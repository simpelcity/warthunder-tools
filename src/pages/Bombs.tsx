import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useMemo } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { bombs } from '@/data/Bombs'
import type { BombDefinition, BaseBombVehicle, Bomb, DumbBomb, GuidedBomb, Guidance, Rank, BR } from '@/types/Bombs'
import { getCountryIcons } from '@/constants/CountryIcons'
import { getAamIconPath } from '@/constants/BombIcons'
import { getBombVariantName } from '@/constants/BombVariantNames'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320

type CategoryFilter = 'All' | Bomb
type FamilyFilter = 'All' | DumbBomb | GuidedBomb
type GuidanceFilter = 'All' | Guidance
type RankFilter = 'All' | Rank
type BRFilter = 'All' | BR
type VehicleFilter = 'All' | string
type OperatorFilter = 'All' | string
type TechTreeFilter = 'All' | string

type BombFilters = {
  category: CategoryFilter
  family: FamilyFilter
  guidance: GuidanceFilter
  rank: RankFilter
  br: BRFilter
  vehicle: VehicleFilter
  operator: OperatorFilter
  techTree: TechTreeFilter
}

const DEFAULT_FILTERS: BombFilters = {
  category: 'All',
  family: 'All',
  guidance: 'All',
  rank: 'All',
  br: 'All',
  vehicle: 'All',
  operator: 'All',
  techTree: 'All',
}

type SortBy = 'name' | 'vehicleCount'
type SortDirection = 'asc' | 'desc'

type GuidedBombDefinition = Extract<BombDefinition, { category: 'Guided' }>

const isGuidedBomb = (bomb: BombDefinition): bomb is GuidedBombDefinition => bomb.category === 'Guided'

export default function Bombs() {
  const [activeBombId, setActiveBombId] = useState<string | null>(null)
  const [activeBombPlacement, setActiveBombPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto')
  const [vehicle, setVehicle] = useState<BaseBombVehicle | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false)
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [showBrs, setShowBrs] = useState(false)
  const targetBrs = useRef<HTMLDivElement | null>(null)

  const [showFilters, setShowFilters] = useState(false)
  const [vehicleSearch, setVehicleSearch] = useState('')
  const [operatorSearch, setOperatorSearch] = useState('')
  const [techTreeSearch, setTechTreeSearch] = useState('')
  const [guidanceSearch, setGuidanceSearch] = useState('')
  const [brSearch, setBrSearch] = useState('')
  const [bombListSearch, setBombListSearch] = useState('')

  const [showVehiclePicker, setShowVehiclePicker] = useState(false)
  const [showOperatorPicker, setShowOperatorPicker] = useState(false)
  const [showTechTreePicker, setShowTechTreePicker] = useState(false)
  const [showGuidancePicker, setShowGuidancePicker] = useState(false)
  const [showBrPicker, setShowBrPicker] = useState(false)
  const [showMoreCategoryDesktop, setShowMoreCategoryDesktop] = useState(false)
  const [showMoreFamilyDesktop, setShowMoreFamilyDesktop] = useState(false)
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false)

  const [appliedFilters, setAppliedFilters] = useState<BombFilters>(DEFAULT_FILTERS)
  const [draftFilters, setDraftFilters] = useState<BombFilters>(DEFAULT_FILTERS)

  const [sortBy, setSortBy] = useState<SortBy>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const getVehicleBrByMode = (bombVehicle: BaseBombVehicle, mode: 'AB' | 'RB' | 'SB') => {
    if (mode === 'AB') return bombVehicle.vehicleBr?.AB ?? bombVehicle.vehicleBr?.RB
    if (mode === 'SB') return bombVehicle.vehicleBr?.SB ?? bombVehicle.vehicleBr?.RB
    return bombVehicle.vehicleBr?.RB
  }

  const matchesBrFilter = (bombVehicle: BaseBombVehicle, brFilter: BRFilter) =>
    brFilter === 'All' || bombVehicle.vehicleBr?.RB === brFilter

  const bombMatchesFilters = (bomb: BombDefinition, filters: BombFilters) => {
    if (filters.category !== 'All' && bomb.category !== filters.category) return false
    if (filters.family !== 'All' && bomb.family !== filters.family) return false
    if (filters.guidance !== 'All' && (!isGuidedBomb(bomb) || bomb.guidance !== filters.guidance)) return false

    return bomb.vehicles.some((bombVehicle) => {
      if (filters.rank !== 'All' && bombVehicle.vehicleRank !== filters.rank) return false
      if (!matchesBrFilter(bombVehicle, filters.br)) return false
      if (filters.vehicle !== 'All' && bombVehicle.vehicleName !== filters.vehicle) return false
      if (filters.operator !== 'All' && bombVehicle.vehicleOperator !== filters.operator) return false
      if (filters.techTree !== 'All' && bombVehicle.vehicleTechTree !== filters.techTree) return false
      return true
    })
  }

  const categoryOptions = useMemo(() => {
    const values = Array.from(new Set(bombs.map((bomb) => bomb.category))).sort((a, b) => a.localeCompare(b))
    return ['All', ...values]
  }, [])

  const familyOptions = useMemo(() => {
    const base = draftFilters.category === 'All' ? bombs : bombs.filter((bomb) => bomb.category === draftFilters.category)
    const values = Array.from(new Set(base.map((bomb) => bomb.family))).sort((a, b) => a.localeCompare(b))
    return ['All', ...values]
  }, [draftFilters.category])

  const guidanceOptions = useMemo(() => {
    const base = bombs.filter((bomb): bomb is GuidedBombDefinition => {
      if (draftFilters.category !== 'All' && bomb.category !== draftFilters.category) return false
      if (draftFilters.family !== 'All' && bomb.family !== draftFilters.family) return false
      return isGuidedBomb(bomb)
    })
    const values = Array.from(new Set(base.map((bomb) => bomb.guidance))).sort((a, b) => a.localeCompare(b))
    return ['All', ...values]
  }, [draftFilters.category, draftFilters.family])

  const rankOptions = useMemo(() => {
    const values = Array.from(new Set(bombs.flatMap((bomb) => bomb.vehicles.map((bombVehicle) => bombVehicle.vehicleRank).filter(Boolean))))
      .sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...values] as string[]
  }, [])

  const brOptions = useMemo(() => {
    const values = Array.from(new Set(
      bombs.flatMap((bomb) =>
        bomb.vehicles
          .filter((bombVehicle) => draftFilters.rank === 'All' || bombVehicle.vehicleRank === draftFilters.rank)
          .map((bombVehicle) => bombVehicle.vehicleBr?.RB)
          .filter((br): br is BR => Boolean(br))
      )
    )).sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }))
    return ['All', ...values] as BRFilter[]
  }, [draftFilters.rank])

  const vehicleOptions = useMemo(() => {
    const values = Array.from(new Map(
      bombs.flatMap((bomb) =>
        bomb.vehicles
          .filter((bombVehicle) => draftFilters.rank === 'All' || bombVehicle.vehicleRank === draftFilters.rank)
          .filter((bombVehicle) => draftFilters.techTree === 'All' || bombVehicle.vehicleTechTree === draftFilters.techTree)
          .map((bombVehicle) => ({ name: bombVehicle.vehicleName, vehicleId: bombVehicle.vehicleId }))
      ).filter((bombVehicle) => bombVehicle.name).map((bombVehicle) => [bombVehicle.name, bombVehicle])
    ).values()).sort((a, b) => a.name.localeCompare(b.name))
    return [{ name: 'All', vehicleId: 'All' }, ...values]
  }, [draftFilters.rank, draftFilters.techTree])

  const techTreeOptions = useMemo(() => {
    const values = Array.from(new Set(
      bombs.flatMap((bomb) =>
        bomb.vehicles
          .filter((bombVehicle) => draftFilters.rank === 'All' || bombVehicle.vehicleRank === draftFilters.rank)
          .filter((bombVehicle) => matchesBrFilter(bombVehicle, draftFilters.br))
          .filter((bombVehicle) => draftFilters.vehicle === 'All' || bombVehicle.vehicleName === draftFilters.vehicle)
          .filter((bombVehicle) => draftFilters.operator === 'All' || bombVehicle.vehicleOperator === draftFilters.operator)
          .map((bombVehicle) => bombVehicle.vehicleTechTree)
          .filter(Boolean)
      )
    )).sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...values] as string[]
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator])

  const operatorOptions = useMemo(() => {
    const values = Array.from(new Set(
      bombs.flatMap((bomb) =>
        bomb.vehicles
          .filter((bombVehicle) => draftFilters.rank === 'All' || bombVehicle.vehicleRank === draftFilters.rank)
          .filter((bombVehicle) => matchesBrFilter(bombVehicle, draftFilters.br))
          .filter((bombVehicle) => draftFilters.vehicle === 'All' || bombVehicle.vehicleName === draftFilters.vehicle)
          .filter((bombVehicle) => draftFilters.techTree === 'All' || bombVehicle.vehicleTechTree === draftFilters.techTree)
          .map((bombVehicle) => bombVehicle.vehicleOperator)
          .filter(Boolean)
      )
    )).sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...values] as string[]
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree])

  const quickVehicleOptions = useMemo(() => vehicleOptions.filter((option) => option.name !== 'All').slice(0, 3), [vehicleOptions])
  const quickOperatorOptions = useMemo(() => operatorOptions.filter((option) => option !== 'All').slice(0, 3), [operatorOptions])
  const quickTechTreeOptions = useMemo(() => techTreeOptions.filter((option) => option !== 'All').slice(0, 3), [techTreeOptions])
  const quickGuidanceOptions = useMemo(() => guidanceOptions.filter((option) => option !== 'All').slice(0, 3), [guidanceOptions])
  const quickBrOptions = useMemo(() => brOptions.filter((option) => option !== 'All').slice(0, 3), [brOptions])

  const searchableVehicleOptions = useMemo(() => {
    const query = vehicleSearch.trim().toLowerCase()
    return vehicleOptions.filter((option) => option.name !== 'All' && (!query || option.name.toLowerCase().includes(query)))
  }, [vehicleOptions, vehicleSearch])

  const searchableOperatorOptions = useMemo(() => {
    const query = operatorSearch.trim().toLowerCase()
    return operatorOptions.filter((option) => option !== 'All' && (!query || option.toLowerCase().includes(query)))
  }, [operatorOptions, operatorSearch])

  const searchableTechTreeOptions = useMemo(() => {
    const query = techTreeSearch.trim().toLowerCase()
    return techTreeOptions.filter((option) => option !== 'All' && (!query || option.toLowerCase().includes(query)))
  }, [techTreeOptions, techTreeSearch])

  const searchableGuidanceOptions = useMemo(() => {
    const query = guidanceSearch.trim().toLowerCase()
    return guidanceOptions.filter((option) => option !== 'All' && (!query || option.toLowerCase().includes(query)))
  }, [guidanceOptions, guidanceSearch])

  const searchableBrOptions = useMemo(() => {
    const query = brSearch.trim().toLowerCase()
    return brOptions.filter((option) => option !== 'All' && (!query || String(option).toLowerCase().includes(query)))
  }, [brOptions, brSearch])

  const filteredBombs = useMemo(() => bombs.filter((bomb) => bombMatchesFilters(bomb, appliedFilters)), [appliedFilters])

  const displayedBombs = useMemo(() => {
    const query = bombListSearch.trim().toLowerCase()
    if (!query) return filteredBombs
    return filteredBombs.filter((bomb) => bomb.designation.toLowerCase().includes(query) || bomb.id.toLowerCase().includes(query))
  }, [filteredBombs, bombListSearch])

  const sortedBombs = useMemo(() => {
    const direction = sortDirection === 'asc' ? 1 : -1
    return [...displayedBombs].sort((firstBomb, secondBomb) =>
      sortBy === 'name'
        ? firstBomb.designation.localeCompare(secondBomb.designation) * direction
        : (firstBomb.vehicles.length - secondBomb.vehicles.length) * direction
    )
  }, [displayedBombs, sortBy, sortDirection])

  const previewFilteredBombsCount = useMemo(
    () => bombs.filter((bomb) => bombMatchesFilters(bomb, draftFilters)).length,
    [draftFilters]
  )

  const hasDraftChanges = Object.keys(DEFAULT_FILTERS).some((key) => {
    const filterKey = key as keyof BombFilters
    return draftFilters[filterKey] !== appliedFilters[filterKey]
  })

  const vehicleIconByName = useMemo(() => {
    const matches = bombs.flatMap((bomb) =>
      bomb.vehicles
        .filter((bombVehicle) => draftFilters.rank === 'All' || bombVehicle.vehicleRank === draftFilters.rank)
        .filter((bombVehicle) => draftFilters.techTree === 'All' || bombVehicle.vehicleTechTree === draftFilters.techTree)
    )
    const icons = new Map<string, string>()
    for (const bombVehicle of matches) {
      if (!bombVehicle.vehicleName || !bombVehicle.vehicleTechTree || icons.has(bombVehicle.vehicleName)) continue
      icons.set(bombVehicle.vehicleName, getCountryIcons({
        vehicleTechTree: bombVehicle.vehicleTechTree,
        vehicleOperator: bombVehicle.vehicleOperator,
      }))
    }
    return icons
  }, [draftFilters.rank, draftFilters.techTree])

  const operatorIconByName = useMemo(() => {
    const matches = bombs.flatMap((bomb) =>
      bomb.vehicles
        .filter((bombVehicle) => draftFilters.rank === 'All' || bombVehicle.vehicleRank === draftFilters.rank)
        .filter((bombVehicle) => matchesBrFilter(bombVehicle, draftFilters.br))
        .filter((bombVehicle) => draftFilters.vehicle === 'All' || bombVehicle.vehicleName === draftFilters.vehicle)
        .filter((bombVehicle) => draftFilters.techTree === 'All' || bombVehicle.vehicleTechTree === draftFilters.techTree)
        .filter((bombVehicle) => Boolean(bombVehicle.vehicleOperator))
    )
    const icons = new Map<string, string>()
    for (const bombVehicle of matches) {
      if (!bombVehicle.vehicleOperator || !bombVehicle.vehicleTechTree || icons.has(bombVehicle.vehicleOperator)) continue
      icons.set(bombVehicle.vehicleOperator, getCountryIcons({
        vehicleTechTree: bombVehicle.vehicleTechTree,
        vehicleOperator: bombVehicle.vehicleOperator,
      }))
    }
    return icons
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree])

  const getVehicleFilterIcon = (option: VehicleFilter) => option === 'All' ? null : vehicleIconByName.get(option) ?? null
  const getOperatorFilterIcon = (option: OperatorFilter) => option === 'All' ? null : operatorIconByName.get(option) ?? null
  const getTechTreeFilterIcon = (option: TechTreeFilter) =>
    option === 'All' ? null : getCountryIcons({ vehicleTechTree: option as NonNullable<BaseBombVehicle['vehicleTechTree']> })

  const getVisibleOptions = (options: string[], showAll: boolean) => showAll ? options : options.slice(0, 3)
  const getBombBrLabel = (bombVehicle: BaseBombVehicle, mode: 'AB' | 'RB' | 'SB') => getVehicleBrByMode(bombVehicle, mode) ?? 'N/A'

  const getPopoverVehicles = (bomb: BombDefinition) => {
    let vehicles = [...bomb.vehicles]
    if (appliedFilters.rank !== 'All') vehicles = vehicles.filter((bombVehicle) => bombVehicle.vehicleRank === appliedFilters.rank)
    if (appliedFilters.br !== 'All') vehicles = vehicles.filter((bombVehicle) => matchesBrFilter(bombVehicle, appliedFilters.br))
    if (appliedFilters.vehicle !== 'All') vehicles = vehicles.filter((bombVehicle) => bombVehicle.vehicleName === appliedFilters.vehicle)
    if (appliedFilters.operator !== 'All') vehicles = vehicles.filter((bombVehicle) => bombVehicle.vehicleOperator === appliedFilters.operator)
    if (appliedFilters.techTree !== 'All') vehicles = vehicles.filter((bombVehicle) => bombVehicle.vehicleTechTree === appliedFilters.techTree)
    return vehicles
  }

  const getRowBombIconSrc = (bomb: BombDefinition) => getAamIconPath(bomb)

  const handleCategorySelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({
      ...current,
      category: eventKey as CategoryFilter,
      family: 'All',
      guidance: 'All',
      vehicle: 'All',
      operator: 'All',
      techTree: 'All',
    }))
  }

  const handleFamilySelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({ ...current, family: eventKey as FamilyFilter, guidance: 'All' }))
  }

  const handleGuidanceSelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({ ...current, guidance: eventKey as GuidanceFilter }))
    setShowGuidancePicker(false)
  }

  const handleRankSelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({
      ...current,
      rank: eventKey as RankFilter,
      vehicle: 'All',
      operator: 'All',
      techTree: 'All',
      br: 'All',
    }))
  }

  const handleBrSelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({ ...current, br: eventKey as BRFilter }))
    setShowBrPicker(false)
  }

  const handleVehicleSelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({ ...current, vehicle: eventKey as VehicleFilter }))
    setShowVehiclePicker(false)
  }

  const handleOperatorSelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({ ...current, operator: eventKey as OperatorFilter }))
    setShowOperatorPicker(false)
  }

  const handleTechTreeSelect = (eventKey: string | null) => {
    if (!eventKey) return
    setDraftFilters((current) => ({ ...current, techTree: eventKey as TechTreeFilter }))
    setShowTechTreePicker(false)
  }

  const handleOpenGuidancePicker = () => {
    setGuidanceSearch('')
    setShowGuidancePicker(true)
  }

  const handleOpenBrPicker = () => {
    setBrSearch('')
    setShowBrPicker(true)
  }

  const handleOpenVehiclePicker = () => {
    setVehicleSearch('')
    setShowVehiclePicker(true)
  }

  const handleOpenOperatorPicker = () => {
    setOperatorSearch('')
    setShowOperatorPicker(true)
  }

  const handleOpenTechTreePicker = () => {
    setTechTreeSearch('')
    setShowTechTreePicker(true)
  }

  const handleCloseFiltersMobile = () => {
    setDraftFilters(appliedFilters)
    setShowFilters(false)
  }

  const handleShowFiltersMobile = () => {
    setDraftFilters(appliedFilters)
    setShowFilters(true)
  }

  const handleApplyFilters = () => {
    setAppliedFilters(draftFilters)
    setShowFilters(false)
  }

  const handleResetDraftFilters = () => {
    setDraftFilters(DEFAULT_FILTERS)
    setAppliedFilters(DEFAULT_FILTERS)
    setShowFilters(false)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 576px)')
    const handleViewportChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleViewportChange)
    return () => mediaQuery.removeEventListener('change', handleViewportChange)
  }, [])

  function handleBombClick(bombId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect()
      const spaceBelow = window.innerHeight - targetRect.bottom
      setActiveBombPlacement(spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE ? 'top-start' : 'bottom-start')
    } else {
      setActiveBombPlacement('auto')
    }

    if (activeBombId === bombId) {
      setActiveBombId(null)
      setVehicle(null)
      return
    }

    const bomb = bombs.find((row) => row.id === bombId)
    if (!bomb) {
      setVehicle(null)
      setActiveBombId(bombId)
      setShowBrs(false)
      return
    }

    const popoverVehicles = getPopoverVehicles(bomb)
    setVehicle(popoverVehicles[0] ?? bomb.vehicles[0] ?? null)
    setActiveBombId(bombId)
    setShowBrs(false)
  }

  const popover = (bomb: BombDefinition) => (
    <Popover id="bomb-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src={getAamIconPath(bomb)} alt="Bomb icon" className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>
        <span className="fs-5 fw-bold">{bomb.designation} bombs</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center gap-1">
              {vehicle?.vehicleId && (
                <Image
                  src={`https://static.encyclopedia.warthunder.com/icons/${vehicle.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : vehicle.vehicleId}_ico.svg`}
                  height={36}
                />
              )}
              {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} height={24} />}
              <span className="font-wt text-wrap text-start">{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? 'is-open' : ''}`}><FaAngleDown /></span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-1 overflow-y-auto pt-0">
              <Dropdown.Item className="text-center border-bottom position-sticky top-0 bg-body pt-2" disabled>
                {getPopoverVehicles(bomb).length} vehicle{getPopoverVehicles(bomb).length !== 1 ? 's' : ''}
              </Dropdown.Item>
              {getPopoverVehicles(bomb).map((bombVehicle) => (
                <Dropdown.Item key={bombVehicle.id} className="d-flex align-items-center gap-1" onClick={() => setVehicle(bombVehicle)}>
                  <Image src={`https://static.encyclopedia.warthunder.com/icons/${bombVehicle.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : bombVehicle.vehicleId}_ico.svg`} height={26} />
                  {bombVehicle.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: bombVehicle.vehicleTechTree, vehicleOperator: bombVehicle.vehicleOperator })} width={27} />}
                  <span className="font-wt">{bombVehicle.vehicleName}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex column-gap-2 align-items-center">
            <div>
              <span>Rank</span>{' '}
              <span className="font-sans fw-normal">{vehicle?.vehicleRank}</span>
            </div>
            <span className="text-muted">•</span>

            {isMobile ? (
              <>
                <div ref={targetBrs} onClick={() => setShowBrs(!showBrs)}>
                  <span>BR</span>{' '}
                  <span>{vehicle ? getBombBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="bomb-overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        {(['AB', 'RB', 'SB'] as const).map((mode) => (
                          <div className="d-flex flex-column" key={mode}>
                            <span className="text-muted small">{mode}</span>
                            <span className="fw-bold fs-6">{vehicle ? getBombBrLabel(vehicle, mode) : ''}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-muted text-start">Battle rating</span>
                    </div>
                  </Tooltip>
                </Overlay>
              </>
            ) : (
              <OverlayTrigger overlay={
                <Tooltip id="bomb-overlay-br">
                  <div className="d-flex flex-column">
                    <div className="d-flex column-gap-2">
                      {(['AB', 'RB', 'SB'] as const).map((mode) => (
                        <div className="d-flex flex-column" key={mode}>
                          <span className="text-muted small">{mode}</span>
                          <span className="fw-bold fs-6">{vehicle ? getBombBrLabel(vehicle, mode) : ''}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>
              }>
                <div>
                  <span>BR</span>{' '}
                  <span>{vehicle ? getBombBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
              </OverlayTrigger>
            )}
          </div>
        </div>

        <ul className="list-unstyled aams-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{bomb.projectileMassKg} kg</span>
          </li>
          
          {isGuidedBomb(bomb) && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Guidance</span>
                {isMobile ? (
                  <>
                    <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{bomb.guidance}</span>
                    <Overlay target={target} show={show} placement="top">
                      <Tooltip id="overlay-name">{getBombVariantName(bomb.guidance).split(/([-\s]+)/).map((part, index) =>
                        /[-+\s]+/.test(part) ? (
                          <span key={index} className="fw-normal text-muted">{part}</span>
                        ) : (
                          <span key={index} className="fw-bold">{part}</span>
                        )
                      )}</Tooltip>
                    </Overlay>
                  </>
                ) : (
                  <>
                    <OverlayTrigger overlay={<Tooltip id={bomb.id}>{getBombVariantName(bomb.guidance).split(/([-\s]+)/).map((part, index) =>
                      /[-+\s]+/.test(part) ? (
                        <span key={index} className="fw-normal text-muted">{part}</span>
                      ) : (
                        <span key={index} className="fw-bold">{part}</span>
                      )
                    )}</Tooltip>}>
                      <span className="text-muted">{bomb.guidance}</span>
                    </OverlayTrigger>
                  </>
                )}
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Guidance time</span>
                <span className="text-muted">{bomb.guidanceTimeS} s</span>
              </li>
            </>
          )}
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{bomb.explosiveType}</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{bomb.explosiveMassKg} kg</span>
          </li>
          {bomb.tntEquivalent && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">TNT equivalent</span>
              <span className="text-muted">{bomb.tntEquivalent} kg</span>
            </li>
          )}
        </ul>
      </Popover.Body>
    </Popover>
  )

  const renderFilterPickers = () => (
    <>
      <Offcanvas show={showVehiclePicker} onHide={() => setShowVehiclePicker(false)} placement="start" className="w-100">
        <Offcanvas.Header closeButton><Offcanvas.Title>Select Vehicle</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column row-gap-2">
          <Form.Control type="search" placeholder="Search vehicle..." value={vehicleSearch} onChange={(event) => setVehicleSearch(event.target.value)} />
          <div className="d-flex flex-column row-gap-2 overflow-auto">
            {searchableVehicleOptions.map((option) => (
              <Button key={option.vehicleId} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleVehicleSelect(option.name)}>
                <Image src={`https://static.encyclopedia.warthunder.com/icons/${option.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : option.vehicleId}_ico.svg`} height={20} />
                {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                <span className="font-wt">{option.name}</span>
              </Button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showOperatorPicker} onHide={() => setShowOperatorPicker(false)} placement="start" className="w-100">
        <Offcanvas.Header closeButton><Offcanvas.Title>Select Operator</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column row-gap-3">
          <Form.Control type="search" placeholder="Search operator..." value={operatorSearch} onChange={(event) => setOperatorSearch(event.target.value)} />
          <div className="d-flex flex-column row-gap-2 overflow-auto">
            {searchableOperatorOptions.map((option) => (
              <Button key={option} variant={draftFilters.operator === option ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleOperatorSelect(option)}>
                {getOperatorFilterIcon(option) && <Image src={getOperatorFilterIcon(option) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                <span>{option}</span>
              </Button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showTechTreePicker} onHide={() => setShowTechTreePicker(false)} placement="start" className="w-100">
        <Offcanvas.Header closeButton><Offcanvas.Title>Select Tech Tree</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column row-gap-3">
          <Form.Control type="search" placeholder="Search tech tree..." value={techTreeSearch} onChange={(event) => setTechTreeSearch(event.target.value)} />
          <div className="d-flex flex-column row-gap-2 overflow-auto">
            {searchableTechTreeOptions.map((option) => (
              <Button key={option} variant={draftFilters.techTree === option ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleTechTreeSelect(option)}>
                {getTechTreeFilterIcon(option) && <Image src={getTechTreeFilterIcon(option) ?? ''} width={20} height={20} alt="Tech tree" />}
                <span>{option}</span>
              </Button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showGuidancePicker} onHide={() => setShowGuidancePicker(false)} placement="start" className="w-100">
        <Offcanvas.Header closeButton><Offcanvas.Title>Select Guidance</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column row-gap-3">
          <Form.Control type="search" placeholder="Search guidance..." value={guidanceSearch} onChange={(event) => setGuidanceSearch(event.target.value)} />
          <div className="d-flex flex-column row-gap-2 overflow-auto">
            {searchableGuidanceOptions.map((option) => (
              <Button key={option} variant={draftFilters.guidance === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleGuidanceSelect(option)}>{option}</Button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showBrPicker} onHide={() => setShowBrPicker(false)} placement="start" className="w-100">
        <Offcanvas.Header closeButton><Offcanvas.Title>Select BR</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column row-gap-3">
          <Form.Control type="search" placeholder="Search BR..." value={brSearch} onChange={(event) => setBrSearch(event.target.value)} />
          <div className="d-flex flex-column row-gap-2 overflow-auto">
            {searchableBrOptions.map((option) => (
              <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleBrSelect(option)}>{option}</Button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )

  const renderDesktopPickers = () => (
    <>
      <Modal show={showVehiclePicker} onHide={() => setShowVehiclePicker(false)} centered scrollable>
        <Modal.Header closeButton><Modal.Title>Select Vehicle</Modal.Title></Modal.Header>
        <Modal.Body className="d-flex flex-column row-gap-2">
          <Form.Control type="search" placeholder="Search vehicle..." value={vehicleSearch} onChange={(event) => setVehicleSearch(event.target.value)} />
          {searchableVehicleOptions.map((option) => (
            <Button key={option.vehicleId} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleVehicleSelect(option.name)}>
              <Image src={`https://static.encyclopedia.warthunder.com/icons/${option.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : option.vehicleId}_ico.svg`} height={20} />
              <span className="font-wt">{option.name}</span>
            </Button>
          ))}
        </Modal.Body>
      </Modal>
      <Modal show={showOperatorPicker} onHide={() => setShowOperatorPicker(false)} centered scrollable>
        <Modal.Header closeButton><Modal.Title>Select Operator</Modal.Title></Modal.Header>
        <Modal.Body className="d-flex flex-column row-gap-2">
          <Form.Control type="search" placeholder="Search operator..." value={operatorSearch} onChange={(event) => setOperatorSearch(event.target.value)} />
          {searchableOperatorOptions.map((option) => (
            <Button key={option} variant={draftFilters.operator === option ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleOperatorSelect(option)}>
              {getOperatorFilterIcon(option) && <Image src={getOperatorFilterIcon(option) ?? ''} width={20} height={20} alt="Vehicle operator" />}
              <span>{option}</span>
            </Button>
          ))}
        </Modal.Body>
      </Modal>
      <Modal show={showTechTreePicker} onHide={() => setShowTechTreePicker(false)} centered scrollable>
        <Modal.Header closeButton><Modal.Title>Select Tech Tree</Modal.Title></Modal.Header>
        <Modal.Body className="d-flex flex-column row-gap-2">
          <Form.Control type="search" placeholder="Search tech tree..." value={techTreeSearch} onChange={(event) => setTechTreeSearch(event.target.value)} />
          {searchableTechTreeOptions.map((option) => (
            <Button key={option} variant={draftFilters.techTree === option ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleTechTreeSelect(option)}>
              {getTechTreeFilterIcon(option) && <Image src={getTechTreeFilterIcon(option) ?? ''} width={20} height={20} alt="Tech tree" />}
              <span>{option}</span>
            </Button>
          ))}
        </Modal.Body>
      </Modal>
      <Modal show={showGuidancePicker} onHide={() => setShowGuidancePicker(false)} centered scrollable>
        <Modal.Header closeButton><Modal.Title>Select Guidance</Modal.Title></Modal.Header>
        <Modal.Body className="d-flex flex-column row-gap-2">
          <Form.Control type="search" placeholder="Search guidance..." value={guidanceSearch} onChange={(event) => setGuidanceSearch(event.target.value)} />
          {searchableGuidanceOptions.map((option) => (
            <Button key={option} variant={draftFilters.guidance === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleGuidanceSelect(option)}>{option}</Button>
          ))}
        </Modal.Body>
      </Modal>
      <Modal show={showBrPicker} onHide={() => setShowBrPicker(false)} centered scrollable>
        <Modal.Header closeButton><Modal.Title>Select BR</Modal.Title></Modal.Header>
        <Modal.Body className="d-flex flex-column row-gap-2">
          <Form.Control type="search" placeholder="Search BR..." value={brSearch} onChange={(event) => setBrSearch(event.target.value)} />
          {searchableBrOptions.map((option) => (
            <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleBrSelect(option)}>{option}</Button>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )

  const renderFilters = () => (
    <div className="aams-sidebar-scroll">
      <div className="aams-sidebar-section">
        <h5 className="aams-sidebar-title">Category</h5>
        <div className="aams-sidebar-options">
          {getVisibleOptions(categoryOptions, showMoreCategoryDesktop).map((option) => (
            <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.category === option ? 'is-active' : ''}`} onClick={() => handleCategorySelect(option)}>{option}</button>
          ))}
        </div>
        {categoryOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreCategoryDesktop((current) => !current)}>{showMoreCategoryDesktop ? 'Less' : 'More'}</button>}
      </div>

      <div className="aams-sidebar-section">
        <h5 className="aams-sidebar-title">Family</h5>
        <div className="aams-sidebar-options">
          {getVisibleOptions(familyOptions, showMoreFamilyDesktop).map((option) => (
            <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.family === option ? 'is-active' : ''}`} onClick={() => handleFamilySelect(option)}>{option}</button>
          ))}
        </div>
        {familyOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreFamilyDesktop((current) => !current)}>{showMoreFamilyDesktop ? 'Less' : 'More'}</button>}
      </div>

      <div className="aams-sidebar-section">
        <h5 className="aams-sidebar-title">Guidance</h5>
        <div className="aams-sidebar-options">
          {quickGuidanceOptions.map((option) => (
            <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.guidance === option ? 'is-active' : ''}`} onClick={() => handleGuidanceSelect(option)}>{option}</button>
          ))}
        </div>
        {guidanceOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenGuidancePicker}>More</button>}
      </div>

      <div className="aams-sidebar-section">
        <h5 className="aams-sidebar-title">Rank</h5>
        <div className="aams-sidebar-options">
          {getVisibleOptions(rankOptions, showMoreRankDesktop).map((option) => (
            <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.rank === option ? 'is-active' : ''}`} onClick={() => handleRankSelect(option)}>{option}</button>
          ))}
        </div>
        {rankOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreRankDesktop((current) => !current)}>{showMoreRankDesktop ? 'Less' : 'More'}</button>}
      </div>

      <div className="aams-sidebar-section">
        <h5 className="aams-sidebar-title">BR</h5>
        <div className="aams-sidebar-options">
          <button type="button" className={`aams-sidebar-option ${draftFilters.br === 'All' ? 'is-active' : ''}`} onClick={() => handleBrSelect('All')}>All</button>
          {quickBrOptions.map((option) => <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.br === option ? 'is-active' : ''}`} onClick={() => handleBrSelect(option)}>{option}</button>)}
        </div>
        {brOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenBrPicker}>More</button>}
      </div>

      {[
        ['Vehicle', quickVehicleOptions, draftFilters.vehicle, handleVehicleSelect, handleOpenVehiclePicker],
        ['Operator', quickOperatorOptions, draftFilters.operator, handleOperatorSelect, handleOpenOperatorPicker],
        ['Tech Tree', quickTechTreeOptions, draftFilters.techTree, handleTechTreeSelect, handleOpenTechTreePicker],
      ].map(([label, options, selected, select, more], index) => (
        <div className="aams-sidebar-section" key={label as string}>
          <h5 className="aams-sidebar-title">{label as string}</h5>
          <div className="aams-sidebar-options">
            <button type="button" className={`aams-sidebar-option ${selected === 'All' ? 'is-active' : ''}`} onClick={() => (select as (key: string) => void)('All')}>All</button>
            {(options as Array<{ name?: string; vehicleId?: string } | string>).map((option) => {
              const value = typeof option === 'string' ? option : option.name ?? ''
              return (
                <button key={value} type="button" className={`aams-sidebar-option ${selected === value ? 'is-active' : ''}`} onClick={() => (select as (key: string) => void)(value)}>
                  {value}
                </button>
              )
            })}
          </div>
          {(index === 0 ? vehicleOptions.length : index === 1 ? operatorOptions.length : techTreeOptions.length) > 4 &&
            <button type="button" className="aams-sidebar-more" onClick={more as () => void}>More</button>}
        </div>
      ))}
    </div>
  )

  const allFiltersSelected =
    draftFilters.category === 'All' && draftFilters.family === 'All' && draftFilters.guidance === 'All' &&
    draftFilters.rank === 'All' && draftFilters.br === 'All' && draftFilters.vehicle === 'All' &&
    draftFilters.operator === 'All' && draftFilters.techTree === 'All'

  const resultSummary = allFiltersSelected
    ? `${displayedBombs.length} result${displayedBombs.length !== 1 ? 's' : ''}`
    : `${previewFilteredBombsCount} result${previewFilteredBombsCount !== 1 ? 's' : ''}`

  return (
    <Container className="p-4">
      {isMobile ? (
        <>
          <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
            <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
            <p className="my-auto">Back to Home</p>
          </Button>

          <h1>Bombs</h1>

          <div className="aams-mobile-filter-bar position-sticky z-1 mb-2">
            <Button variant="primary" onClick={handleShowFiltersMobile} className="aams-mobile-filter-button w-100">
              Filter {previewFilteredBombsCount} Bomb{previewFilteredBombsCount !== 1 ? 's' : ''}
            </Button>
          </div>

          <Offcanvas show={showFilters} onHide={handleCloseFiltersMobile} placement="bottom" className="aams-mobile-filters h-100 w-100">
            <Offcanvas.Header closeButton><Offcanvas.Title>Filter Bombs</Offcanvas.Title></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex flex-column row-gap-3">
                <Dropdown onSelect={handleCategorySelect}>
                  <Dropdown.Toggle variant={draftFilters.category === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">Category: {draftFilters.category}</Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">{categoryOptions.map((option) => <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.category}>{option}</Dropdown.Item>)}</Dropdown.Menu>
                </Dropdown>
                <Dropdown onSelect={handleFamilySelect}>
                  <Dropdown.Toggle variant={draftFilters.family === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">Family: {draftFilters.family}</Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">{familyOptions.map((option) => <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.family}>{option}</Dropdown.Item>)}</Dropdown.Menu>
                </Dropdown>
                <div className="d-flex flex-column row-gap-2">
                  <span className="fw-semibold">Guidance: {draftFilters.guidance}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.guidance === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleGuidanceSelect('All')}>All</Button>
                    {quickGuidanceOptions.map((option) => <Button key={option} variant={draftFilters.guidance === option ? 'primary' : 'outline-secondary'} onClick={() => handleGuidanceSelect(option)}>{option}</Button>)}
                    {guidanceOptions.length > 4 && <Button variant="secondary" onClick={handleOpenGuidancePicker}>More</Button>}
                  </div>
                </div>
                <Dropdown onSelect={handleRankSelect}>
                  <Dropdown.Toggle variant={draftFilters.rank === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">Rank: {draftFilters.rank}</Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">{rankOptions.map((option) => <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.rank}>{option}</Dropdown.Item>)}</Dropdown.Menu>
                </Dropdown>
                {[
                  ['BR', draftFilters.br, quickBrOptions, handleBrSelect, handleOpenBrPicker],
                  ['Vehicle', draftFilters.vehicle, quickVehicleOptions, handleVehicleSelect, handleOpenVehiclePicker],
                  ['Operator', draftFilters.operator, quickOperatorOptions, handleOperatorSelect, handleOpenOperatorPicker],
                  ['Tech Tree', draftFilters.techTree, quickTechTreeOptions, handleTechTreeSelect, handleOpenTechTreePicker],
                ].map(([label, selected, options, select, more]) => (
                  <div className="d-flex flex-column row-gap-2" key={label as string}>
                    <span className="fw-semibold">{label as string}: {selected as string}</span>
                    <div className="d-flex flex-wrap gap-2">
                      <Button variant={selected === 'All' ? 'primary' : 'outline-secondary'} onClick={() => (select as (key: string) => void)('All')}>All</Button>
                      {(options as Array<{ name?: string; vehicleId?: string } | string>).map((option) => {
                        const value = typeof option === 'string' ? option : option.name ?? ''
                        return <Button key={value} variant={selected === value ? 'primary' : 'outline-secondary'} onClick={() => (select as (key: string) => void)(value)}>{value}</Button>
                      })}
                      {(label === 'BR' ? brOptions.length : label === 'Vehicle' ? vehicleOptions.length : label === 'Operator' ? operatorOptions.length : techTreeOptions.length) > 4 &&
                        <Button variant="secondary" onClick={more as () => void}>More</Button>}
                    </div>
                  </div>
                ))}
                {hasDraftChanges && <Button variant="primary" onClick={handleApplyFilters}>Apply {previewFilteredBombsCount} Result{previewFilteredBombsCount !== 1 ? 's' : ''}</Button>}
                <Button variant="outline-primary" onClick={handleResetDraftFilters}>Reset Filters</Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Form.Control type="search" placeholder="Search Bombs..." value={bombListSearch} onChange={(event) => setBombListSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2" />
          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <Form.Select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortBy)} style={{ maxWidth: '220px' }}>
              <option value="name">Name</option>
              <option value="vehicleCount">Vehicles</option>
            </Form.Select>
            <Button variant="outline-primary" onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}>
              {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </Button>
          </div>

          <p className="text-muted mb-3">{resultSummary}</p>

          <div className="d-flex flex-column row-gap-4 plane-aams-row">
            {sortedBombs.map((bomb) => (
              <OverlayTrigger key={bomb.id} trigger="click" placement={activeBombPlacement} show={activeBombId === bomb.id} overlay={popover(bomb)} rootClose onToggle={(nextShow) => {
                if (!nextShow && activeBombId === bomb.id) {
                  setActiveBombId(null)
                  setVehicle(null)
                  setShowBrs(false)
                }
              }}>
                <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleBombClick(bomb.id, event.currentTarget)}>
                  <div className="shell-icon position-relative overflow-hidden">
                    <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                      <Image src={getRowBombIconSrc(bomb)} alt="Bomb icon" className="h-100 flex-grow-0 flex-shrink-1" />
                    </div>
                  </div>
                  <span>{bomb.designation}</span>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </>
      ) : (
        <div className="aams-desktop-layout">
          <aside className="aams-desktop-sidebar">
            {renderFilters()}
            <div className="aams-sidebar-actions">
              <Button variant="outline-primary" onClick={handleResetDraftFilters} className="border-2">Reset</Button>
              {hasDraftChanges && <Button variant="primary" onClick={handleApplyFilters} className="aams-filter-button">Filter {previewFilteredBombsCount} Bomb{previewFilteredBombsCount !== 1 ? 's' : ''}</Button>}
            </div>
          </aside>

          <div className="aams-desktop-results">
            <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
              <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
              <p className="my-auto">Back to Home</p>
            </Button>

            <h1>Bombs</h1>
            <Form.Control type="search" placeholder="Search Bombs..." value={bombListSearch} onChange={(event) => setBombListSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none mb-3" />

            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
              <Form.Select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortBy)} style={{ maxWidth: '220px' }}>
                <option value="name">Name</option>
                <option value="vehicleCount">Vehicles</option>
              </Form.Select>
              <Button variant="outline-primary" onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}>
                {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
              </Button>
            </div>

            <p className="text-muted mb-3">{resultSummary}</p>

            <div className="d-flex flex-column row-gap-4 plane-aams-row">
              {sortedBombs.map((bomb) => (
                <OverlayTrigger key={bomb.id} trigger="click" placement={activeBombPlacement} show={activeBombId === bomb.id} overlay={popover(bomb)} rootClose onToggle={(nextShow) => {
                  if (!nextShow && activeBombId === bomb.id) {
                    setActiveBombId(null)
                    setVehicle(null)
                    setShowBrs(false)
                  }
                }}>
                  <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleBombClick(bomb.id, event.currentTarget)}>
                    <div className="shell-icon position-relative overflow-hidden">
                      <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                        <Image src={getRowBombIconSrc(bomb)} alt="Bomb icon" className="h-100 flex-grow-0 flex-shrink-1" />
                      </div>
                    </div>
                    <span>{bomb.designation}</span>
                  </Button>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobile ? renderFilterPickers() : renderDesktopPickers()}
    </Container>
  )
}
