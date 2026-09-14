import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useMemo } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { rockets } from '@/data/Rockets'
import type { RocketDefinition, BaseRocketVehicle, Rank, BR } from '@/types/Rockets'
import { getCountryIcons } from '@/constants/CountryIcons'
import { getAamIconPath } from '@/constants/RocketIcons'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320

type RankFilter = 'All' | Rank
type BRFilter = 'All' | BR
type VehicleFilter = 'All' | string
type OperatorFilter = 'All' | string
type TechTreeFilter = 'All' | string

type RocketFilters = {
  rank: RankFilter
  br: BRFilter
  vehicle: VehicleFilter
  operator: OperatorFilter
  techTree: TechTreeFilter
}

const DEFAULT_FILTERS: RocketFilters = {
  rank: 'All',
  br: 'All',
  vehicle: 'All',
  operator: 'All',
  techTree: 'All',
}

type SortBy = 'name' | 'vehicleCount'
type SortDirection = 'asc' | 'desc'

export default function Rockets() {
  const [activeRocketId, setActiveRocketId] = useState<string | null>(null)
  const [activeRocketPlacement, setActiveRocketPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto')
  const [vehicle, setVehicle] = useState<BaseRocketVehicle | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false)
  const [showBrs, setShowBrs] = useState(false)
  const targetBrs = useRef<HTMLDivElement | null>(null)

  const [showFilters, setShowFilters] = useState(false)
  const [vehicleSearch, setVehicleSearch] = useState('')
  const [operatorSearch, setOperatorSearch] = useState('')
  const [techTreeSearch, setTechTreeSearch] = useState('')
  const [brSearch, setBrSearch] = useState('')
  const [rocketListSearch, setRocketListSearch] = useState('')

  const [showVehiclePicker, setShowVehiclePicker] = useState(false)
  const [showOperatorPicker, setShowOperatorPicker] = useState(false)
  const [showTechTreePicker, setShowTechTreePicker] = useState(false)
  const [showBrPicker, setShowBrPicker] = useState(false)
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false)

  const [appliedFilters, setAppliedFilters] = useState<RocketFilters>(DEFAULT_FILTERS)
  const [draftFilters, setDraftFilters] = useState<RocketFilters>(DEFAULT_FILTERS)
  const [sortBy, setSortBy] = useState<SortBy>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const getVehicleBrByMode = (rocketVehicle: BaseRocketVehicle, mode: 'AB' | 'RB' | 'SB') => {
    if (mode === 'AB') return rocketVehicle.vehicleBr?.AB ?? rocketVehicle.vehicleBr?.RB
    if (mode === 'SB') return rocketVehicle.vehicleBr?.SB ?? rocketVehicle.vehicleBr?.RB
    return rocketVehicle.vehicleBr?.RB
  }

  const matchesBrFilter = (rocketVehicle: BaseRocketVehicle, brFilter: BRFilter) =>
    brFilter === 'All' || rocketVehicle.vehicleBr?.RB === brFilter

  const rocketMatchesFilters = (rocket: RocketDefinition, filters: RocketFilters) =>
    rocket.vehicles.some((rocketVehicle) => {
      if (filters.rank !== 'All' && rocketVehicle.vehicleRank !== filters.rank) return false
      if (!matchesBrFilter(rocketVehicle, filters.br)) return false
      if (filters.vehicle !== 'All' && rocketVehicle.vehicleName !== filters.vehicle) return false
      if (filters.operator !== 'All' && rocketVehicle.vehicleOperator !== filters.operator) return false
      if (filters.techTree !== 'All' && rocketVehicle.vehicleTechTree !== filters.techTree) return false
      return true
    })

  const rankOptions = useMemo(() => {
    const values = Array.from(new Set(
      rockets.flatMap((rocket) => rocket.vehicles.map((rocketVehicle) => rocketVehicle.vehicleRank).filter(Boolean))
    )).sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...values] as string[]
  }, [])

  const brOptions = useMemo(() => {
    const values = Array.from(new Set(
      rockets.flatMap((rocket) =>
        rocket.vehicles
          .filter((rocketVehicle) => draftFilters.rank === 'All' || rocketVehicle.vehicleRank === draftFilters.rank)
          .map((rocketVehicle) => rocketVehicle.vehicleBr?.RB)
          .filter((br): br is BR => Boolean(br))
      )
    )).sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }))
    return ['All', ...values] as BRFilter[]
  }, [draftFilters.rank])

  const vehicleOptions = useMemo(() => {
    const values = Array.from(new Map(
      rockets.flatMap((rocket) =>
        rocket.vehicles
          .filter((rocketVehicle) => draftFilters.rank === 'All' || rocketVehicle.vehicleRank === draftFilters.rank)
          .filter((rocketVehicle) => draftFilters.techTree === 'All' || rocketVehicle.vehicleTechTree === draftFilters.techTree)
          .map((rocketVehicle) => ({ name: rocketVehicle.vehicleName, vehicleId: rocketVehicle.vehicleId }))
      ).filter((rocketVehicle) => rocketVehicle.name).map((rocketVehicle) => [rocketVehicle.name, rocketVehicle])
    ).values()).sort((a, b) => a.name.localeCompare(b.name))
    return [{ name: 'All', vehicleId: 'All' }, ...values]
  }, [draftFilters.rank, draftFilters.techTree])

  const techTreeOptions = useMemo(() => {
    const values = Array.from(new Set(
      rockets.flatMap((rocket) =>
        rocket.vehicles
          .filter((rocketVehicle) => draftFilters.rank === 'All' || rocketVehicle.vehicleRank === draftFilters.rank)
          .filter((rocketVehicle) => matchesBrFilter(rocketVehicle, draftFilters.br))
          .filter((rocketVehicle) => draftFilters.vehicle === 'All' || rocketVehicle.vehicleName === draftFilters.vehicle)
          .filter((rocketVehicle) => draftFilters.operator === 'All' || rocketVehicle.vehicleOperator === draftFilters.operator)
          .map((rocketVehicle) => rocketVehicle.vehicleTechTree)
          .filter(Boolean)
      )
    )).sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...values] as string[]
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator])

  const operatorOptions = useMemo(() => {
    const values = Array.from(new Set(
      rockets.flatMap((rocket) =>
        rocket.vehicles
          .filter((rocketVehicle) => draftFilters.rank === 'All' || rocketVehicle.vehicleRank === draftFilters.rank)
          .filter((rocketVehicle) => matchesBrFilter(rocketVehicle, draftFilters.br))
          .filter((rocketVehicle) => draftFilters.vehicle === 'All' || rocketVehicle.vehicleName === draftFilters.vehicle)
          .filter((rocketVehicle) => draftFilters.techTree === 'All' || rocketVehicle.vehicleTechTree === draftFilters.techTree)
          .map((rocketVehicle) => rocketVehicle.vehicleOperator)
          .filter(Boolean)
      )
    )).sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...values] as string[]
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree])

  const quickVehicleOptions = useMemo(() => vehicleOptions.filter((option) => option.name !== 'All').slice(0, 3), [vehicleOptions])
  const quickOperatorOptions = useMemo(() => operatorOptions.filter((option) => option !== 'All').slice(0, 3), [operatorOptions])
  const quickTechTreeOptions = useMemo(() => techTreeOptions.filter((option) => option !== 'All').slice(0, 3), [techTreeOptions])
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

  const searchableBrOptions = useMemo(() => {
    const query = brSearch.trim().toLowerCase()
    return brOptions.filter((option) => option !== 'All' && (!query || String(option).toLowerCase().includes(query)))
  }, [brOptions, brSearch])

  const filteredRockets = useMemo(() => rockets.filter((rocket) => rocketMatchesFilters(rocket, appliedFilters)), [appliedFilters])

  const displayedRockets = useMemo(() => {
    const query = rocketListSearch.trim().toLowerCase()
    if (!query) return filteredRockets
    return filteredRockets.filter((rocket) =>
      rocket.designation.toLowerCase().includes(query) || rocket.id.toLowerCase().includes(query)
    )
  }, [filteredRockets, rocketListSearch])

  const sortedRockets = useMemo(() => {
    const direction = sortDirection === 'asc' ? 1 : -1
    return [...displayedRockets].sort((firstRocket, secondRocket) =>
      sortBy === 'name'
        ? firstRocket.designation.localeCompare(secondRocket.designation) * direction
        : (firstRocket.vehicles.length - secondRocket.vehicles.length) * direction
    )
  }, [displayedRockets, sortBy, sortDirection])

  const previewFilteredRocketsCount = useMemo(
    () => rockets.filter((rocket) => rocketMatchesFilters(rocket, draftFilters)).length,
    [draftFilters]
  )

  const hasDraftChanges = Object.keys(DEFAULT_FILTERS).some((key) => {
    const filterKey = key as keyof RocketFilters
    return draftFilters[filterKey] !== appliedFilters[filterKey]
  })

  // const vehicleIconByName = useMemo(() => {
  //   const icons = new Map<string, string>()
  //   rockets.flatMap((rocket) => rocket.vehicles)
  //     .filter((rocketVehicle) => draftFilters.rank === 'All' || rocketVehicle.vehicleRank === draftFilters.rank)
  //     .filter((rocketVehicle) => draftFilters.techTree === 'All' || rocketVehicle.vehicleTechTree === draftFilters.techTree)
  //     .forEach((rocketVehicle) => {
  //       if (rocketVehicle.vehicleName && rocketVehicle.vehicleTechTree && !icons.has(rocketVehicle.vehicleName)) {
  //         icons.set(rocketVehicle.vehicleName, getCountryIcons({
  //           vehicleTechTree: rocketVehicle.vehicleTechTree,
  //           vehicleOperator: rocketVehicle.vehicleOperator,
  //         }))
  //       }
  //     })
  //   return icons
  // }, [draftFilters.rank, draftFilters.techTree])

  // const operatorIconByName = useMemo(() => {
  //   const icons = new Map<string, string>()
  //   rockets.flatMap((rocket) => rocket.vehicles)
  //     .filter((rocketVehicle) => draftFilters.rank === 'All' || rocketVehicle.vehicleRank === draftFilters.rank)
  //     .filter((rocketVehicle) => matchesBrFilter(rocketVehicle, draftFilters.br))
  //     .filter((rocketVehicle) => draftFilters.vehicle === 'All' || rocketVehicle.vehicleName === draftFilters.vehicle)
  //     .filter((rocketVehicle) => draftFilters.techTree === 'All' || rocketVehicle.vehicleTechTree === draftFilters.techTree)
  //     .forEach((rocketVehicle) => {
  //       if (rocketVehicle.vehicleOperator && rocketVehicle.vehicleTechTree && !icons.has(rocketVehicle.vehicleOperator)) {
  //         icons.set(rocketVehicle.vehicleOperator, getCountryIcons({
  //           vehicleTechTree: rocketVehicle.vehicleTechTree,
  //           vehicleOperator: rocketVehicle.vehicleOperator,
  //         }))
  //       }
  //     })
  //   return icons
  // }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree])

  // const getVehicleFilterIcon = (option: VehicleFilter) => option === 'All' ? null : vehicleIconByName.get(option) ?? null
  // const getOperatorFilterIcon = (option: OperatorFilter) => option === 'All' ? null : operatorIconByName.get(option) ?? null
  // const getTechTreeFilterIcon = (option: TechTreeFilter) =>
  //   option === 'All' ? null : getCountryIcons({ vehicleTechTree: option as NonNullable<BaseRocketVehicle['vehicleTechTree']> })

  const getPopoverVehicles = (rocket: RocketDefinition) => {
    let vehicles = [...rocket.vehicles]
    if (appliedFilters.rank !== 'All') vehicles = vehicles.filter((v) => v.vehicleRank === appliedFilters.rank)
    if (appliedFilters.br !== 'All') vehicles = vehicles.filter((v) => matchesBrFilter(v, appliedFilters.br))
    if (appliedFilters.vehicle !== 'All') vehicles = vehicles.filter((v) => v.vehicleName === appliedFilters.vehicle)
    if (appliedFilters.operator !== 'All') vehicles = vehicles.filter((v) => v.vehicleOperator === appliedFilters.operator)
    if (appliedFilters.techTree !== 'All') vehicles = vehicles.filter((v) => v.vehicleTechTree === appliedFilters.techTree)
    return vehicles
  }

  const getRowVehicleIconSrc = (rocket: RocketDefinition) => {
    return getAamIconPath(rocket)
  }

  const getRocketBrLabel = (rocketVehicle: BaseRocketVehicle, mode: 'AB' | 'RB' | 'SB') =>
    getVehicleBrByMode(rocketVehicle, mode) ?? 'N/A'

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

  const handleCloseFiltersMobile = () => {
    setDraftFilters(appliedFilters)
    setShowFilters(false)
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

  function handleRocketClick(rocketId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const rect = targetElement.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      setActiveRocketPlacement(spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE ? 'top-start' : 'bottom-start')
    } else {
      setActiveRocketPlacement('auto')
    }

    if (activeRocketId === rocketId) {
      setActiveRocketId(null)
      setVehicle(null)
      return
    }

    const rocket = rockets.find((row) => row.id === rocketId)
    if (!rocket) {
      setVehicle(null)
      setActiveRocketId(rocketId)
      setShowBrs(false)
      return
    }

    const popoverVehicles = getPopoverVehicles(rocket)
    setVehicle(popoverVehicles[0] ?? rocket.vehicles[0] ?? null)
    setActiveRocketId(rocketId)
    setShowBrs(false)
  }

  const popover = (rocket: RocketDefinition) => (
    <Popover id="rocket-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative">
          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image
              src={getAamIconPath(rocket)}
              alt="Rocket icon"
              className="h-100 flex-grow-0 flex-shrink-1"
            />
          </div>
        </div>
        <span className="fs-5 fw-bold">{rocket.designation} rockets</span>
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
              {vehicle?.vehicleTechTree && (
                <Image src={getCountryIcons({
                  vehicleTechTree: vehicle.vehicleTechTree,
                  vehicleOperator: vehicle.vehicleOperator,
                })} height={24} />
              )}
              <span className="font-wt text-wrap text-start">{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? 'is-open' : ''}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-1 overflow-y-auto pt-0">
              <Dropdown.Item className="text-center border-bottom position-sticky top-0 bg-body pt-2" disabled>
                {getPopoverVehicles(rocket).length} vehicle{getPopoverVehicles(rocket).length !== 1 ? 's' : ''}
              </Dropdown.Item>
              {getPopoverVehicles(rocket).map((rocketVehicle) => (
                <Dropdown.Item key={rocketVehicle.id} className="d-flex align-items-center gap-1" onClick={() => setVehicle(rocketVehicle)}>
                  <Image src={`https://static.encyclopedia.warthunder.com/icons/${rocketVehicle.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : rocketVehicle.vehicleId}_ico.svg`} height={26} />
                  {rocketVehicle.vehicleTechTree && (
                    <Image src={getCountryIcons({
                      vehicleTechTree: rocketVehicle.vehicleTechTree,
                      vehicleOperator: rocketVehicle.vehicleOperator,
                    })} width={27} />
                  )}
                  <span className="font-wt">{rocketVehicle.vehicleName}</span>
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
                  <span>{vehicle ? getRocketBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="rocket-overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        {(['AB', 'RB', 'SB'] as const).map((mode) => (
                          <div className="d-flex flex-column" key={mode}>
                            <span className="text-muted small">{mode}</span>
                            <span className="fw-bold fs-6">{vehicle ? getRocketBrLabel(vehicle, mode) : ''}</span>
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
                <Tooltip id="rocket-overlay-br">
                  <div className="d-flex flex-column">
                    <div className="d-flex column-gap-2">
                      {(['AB', 'RB', 'SB'] as const).map((mode) => (
                        <div className="d-flex flex-column" key={mode}>
                          <span className="text-muted small">{mode}</span>
                          <span className="fw-bold fs-6">{vehicle ? getRocketBrLabel(vehicle, mode) : ''}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>
              }>
                <div>
                  <span>BR</span>{' '}
                  <span>{vehicle ? getRocketBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
              </OverlayTrigger>
            )}
          </div>
        </div>

        <ul className="list-unstyled aams-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Caliber</span>
            <span className="text-muted">{rocket.caliberMm} mm</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{rocket.projectileMassKg} kg</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{rocket.explosiveType}</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{rocket.explosiveMassKg} kg</span>
          </li>
          {rocket.tntEquivalent && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">TNT equivalent</span>
              <span className="text-muted">{rocket.tntEquivalent} kg</span>
            </li>
          )}
        </ul>
      </Popover.Body>
    </Popover>
  )

  const renderPicker = (
    title: string,
    search: string,
    setSearch: (value: string) => void,
    options: string[],
    selected: string,
    onSelect: (value: string) => void,
    show: boolean,
    setShow: (value: boolean) => void
  ) => (
    <Modal show={show} onHide={() => setShow(false)} centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Select {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column row-gap-2">
        <Form.Control type="search" placeholder={`Search ${title.toLowerCase()}...`} value={search} onChange={(event) => setSearch(event.target.value)} />
        {options.map((option) => (
          <Button key={option} variant={selected === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => onSelect(option)}>
            {option}
          </Button>
        ))}
      </Modal.Body>
    </Modal>
  )

  const filterSections = (
    <div className="aams-sidebar-scroll">
      <div className="aams-sidebar-section">
        <h5 className="aams-sidebar-title">Rank</h5>
        <div className="aams-sidebar-options">
          {(showMoreRankDesktop ? rankOptions : rankOptions.slice(0, 3)).map((option) => (
            <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.rank === option ? 'is-active' : ''}`} onClick={() => handleRankSelect(option)}>
              {option}
            </button>
          ))}
        </div>
        {rankOptions.length > 4 && (
          <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreRankDesktop((current) => !current)}>
            {showMoreRankDesktop ? 'Less' : 'More'}
          </button>
        )}
      </div>

      {[
        ['BR', quickBrOptions, draftFilters.br, handleBrSelect, () => { setBrSearch(''); setShowBrPicker(true) }],
        ['Vehicle', quickVehicleOptions.map((option) => option.name), draftFilters.vehicle, handleVehicleSelect, () => { setVehicleSearch(''); setShowVehiclePicker(true) }],
        ['Operator', quickOperatorOptions, draftFilters.operator, handleOperatorSelect, () => { setOperatorSearch(''); setShowOperatorPicker(true) }],
        ['Tech Tree', quickTechTreeOptions, draftFilters.techTree, handleTechTreeSelect, () => { setTechTreeSearch(''); setShowTechTreePicker(true) }],
      ].map(([label, options, selected, select, more]) => (
        <div className="aams-sidebar-section" key={label as string}>
          <h5 className="aams-sidebar-title">{label as string}</h5>
          <div className="aams-sidebar-options">
            <button type="button" className={`aams-sidebar-option ${selected === 'All' ? 'is-active' : ''}`} onClick={() => (select as (value: string) => void)('All')}>All</button>
            {(options as string[]).map((option) => (
              <button key={option} type="button" className={`aams-sidebar-option ${selected === option ? 'is-active' : ''}`} onClick={() => (select as (value: string) => void)(option)}>
                {option}
              </button>
            ))}
          </div>
          {(label === 'BR' ? brOptions.length : label === 'Vehicle' ? vehicleOptions.length : label === 'Operator' ? operatorOptions.length : techTreeOptions.length) > 4 && (
            <button type="button" className="aams-sidebar-more" onClick={more as () => void}>More</button>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <Container className="p-4">
      {isMobile ? (
        <>
          <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
            <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
            <p className="my-auto">Back to Home</p>
          </Button>

          <h1>Rockets</h1>

          <div className="aams-mobile-filter-bar position-sticky z-1 mb-2">
            <Button variant="primary" onClick={() => { setDraftFilters(appliedFilters); setShowFilters(true) }} className="aams-mobile-filter-button w-100">
              Filter {previewFilteredRocketsCount} Rocket{previewFilteredRocketsCount !== 1 ? 's' : ''}
            </Button>
          </div>

          <Offcanvas show={showFilters} onHide={handleCloseFiltersMobile} placement="bottom" className="aams-mobile-filters h-100 w-100">
            <Offcanvas.Header closeButton><Offcanvas.Title>Filter Rockets</Offcanvas.Title></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex flex-column row-gap-3">
                <Dropdown onSelect={handleRankSelect}>
                  <Dropdown.Toggle variant={draftFilters.rank === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Rank: {draftFilters.rank}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {rankOptions.map((option) => <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.rank}>{option}</Dropdown.Item>)}
                  </Dropdown.Menu>
                </Dropdown>

                {[
                  ['BR', quickBrOptions, draftFilters.br, handleBrSelect],
                  ['Vehicle', quickVehicleOptions.map((option) => option.name), draftFilters.vehicle, handleVehicleSelect],
                  ['Operator', quickOperatorOptions, draftFilters.operator, handleOperatorSelect],
                  ['Tech Tree', quickTechTreeOptions, draftFilters.techTree, handleTechTreeSelect],
                ].map(([label, options, selected, select]) => (
                  <div className="d-flex flex-column row-gap-2" key={label as string}>
                    <span className="fw-semibold">{label as string}: {selected as string}</span>
                    <div className="d-flex flex-wrap gap-2">
                      <Button variant={selected === 'All' ? 'primary' : 'outline-secondary'} onClick={() => (select as (value: string) => void)('All')}>All</Button>
                      {(options as string[]).map((option) => (
                        <Button key={option} variant={selected === option ? 'primary' : 'outline-secondary'} onClick={() => (select as (value: string) => void)(option)}>
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}

                {hasDraftChanges && <Button variant="primary" onClick={handleApplyFilters}>Apply {previewFilteredRocketsCount} Result{previewFilteredRocketsCount !== 1 ? 's' : ''}</Button>}
                <Button variant="outline-primary" onClick={handleResetDraftFilters}>Reset Filters</Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Form.Control type="search" placeholder="Search Rockets..." value={rocketListSearch} onChange={(event) => setRocketListSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2" />
          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <Form.Select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortBy)} style={{ maxWidth: '220px' }}>
              <option value="name">Name</option>
              <option value="vehicleCount">Vehicles</option>
            </Form.Select>
            <Button variant="outline-primary" onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}>
              {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </Button>
          </div>
          <p className="text-muted mb-3">{displayedRockets.length} result{displayedRockets.length !== 1 ? 's' : ''}</p>

          <div className="d-flex flex-column row-gap-4 plane-aams-row">
            {sortedRockets.map((rocket) => (
              <OverlayTrigger key={rocket.id} trigger="click" placement={activeRocketPlacement} show={activeRocketId === rocket.id} overlay={popover(rocket)} rootClose onToggle={(nextShow) => {
                if (!nextShow && activeRocketId === rocket.id) {
                  setActiveRocketId(null)
                  setVehicle(null)
                  setShowBrs(false)
                }
              }}>
                <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleRocketClick(rocket.id, event.currentTarget)}>
                  <div className="shell-icon position-relative overflow-hidden">
                    <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                      <Image src={getRowVehicleIconSrc(rocket)} alt="Rocket icon" className="h-100 flex-grow-0 flex-shrink-1" />
                    </div>
                  </div>
                  <span>{rocket.designation}</span>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </>
      ) : (
        <div className="aams-desktop-layout">
          <aside className="aams-desktop-sidebar">
            {filterSections}
            <div className="aams-sidebar-actions">
              <Button variant="outline-primary" onClick={handleResetDraftFilters} className="border-2">Reset</Button>
              {hasDraftChanges && <Button variant="primary" onClick={handleApplyFilters} className="aams-filter-button">Filter {previewFilteredRocketsCount} Rocket{previewFilteredRocketsCount !== 1 ? 's' : ''}</Button>}
            </div>
          </aside>

          <div className="aams-desktop-results">
            <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
              <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
              <p className="my-auto">Back to Home</p>
            </Button>
            <h1>Rockets</h1>
            <Form.Control type="search" placeholder="Search Rockets..." value={rocketListSearch} onChange={(event) => setRocketListSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none mb-3" />
            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
              <Form.Select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortBy)} style={{ maxWidth: '220px' }}>
                <option value="name">Name</option>
                <option value="vehicleCount">Vehicles</option>
              </Form.Select>
              <Button variant="outline-primary" onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}>
                {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
              </Button>
            </div>
            <p className="text-muted mb-3">{displayedRockets.length} result{displayedRockets.length !== 1 ? 's' : ''}</p>

            <div className="d-flex flex-column row-gap-4 plane-aams-row">
              {sortedRockets.map((rocket) => (
                <OverlayTrigger key={rocket.id} trigger="click" placement={activeRocketPlacement} show={activeRocketId === rocket.id} overlay={popover(rocket)} rootClose onToggle={(nextShow) => {
                  if (!nextShow && activeRocketId === rocket.id) {
                    setActiveRocketId(null)
                    setVehicle(null)
                    setShowBrs(false)
                  }
                }}>
                  <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleRocketClick(rocket.id, event.currentTarget)}>
                    <div className="shell-icon position-relative overflow-hidden">
                      <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                        <Image src={getRowVehicleIconSrc(rocket)} alt="Rocket icon" className="h-100 flex-grow-0 flex-shrink-1" />
                      </div>
                    </div>
                    <span>{rocket.designation}</span>
                  </Button>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="d-none">
        {renderPicker('Vehicle', vehicleSearch, setVehicleSearch, searchableVehicleOptions.map((option) => option.name), draftFilters.vehicle, handleVehicleSelect, showVehiclePicker, setShowVehiclePicker)}
        {renderPicker('Operator', operatorSearch, setOperatorSearch, searchableOperatorOptions, draftFilters.operator, handleOperatorSelect, showOperatorPicker, setShowOperatorPicker)}
        {renderPicker('Tech Tree', techTreeSearch, setTechTreeSearch, searchableTechTreeOptions, draftFilters.techTree, handleTechTreeSelect, showTechTreePicker, setShowTechTreePicker)}
        {renderPicker('BR', brSearch, setBrSearch, searchableBrOptions, draftFilters.br, handleBrSelect, showBrPicker, setShowBrPicker)}
      </div>
    </Container>
  )
}
