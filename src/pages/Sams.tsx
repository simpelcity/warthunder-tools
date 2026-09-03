import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useMemo } from 'react'
import { samMissiles } from '@/data/SamMissiles'
import type { SamDefinition, SamVehicle, Sam, SamMissileVariant, Rank, BR } from '@/types/SamMissiles'
import { getSamVariantName } from '@/constants/SamMissileVariantNames'
import '@/styles/pages/Sams.scss'
import { FaArrowLeftLong, FaCircleCheck, FaCircleXmark, FaAngleDown } from 'react-icons/fa6'
import { FiSliders } from 'react-icons/fi'
import { getCountryIcons } from '@/constants/CountryIcons'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 330;

type FamilyFilter = 'All' | Sam;
type VariantFilter = 'All' | SamMissileVariant;
type RankFilter = 'All' | Rank;
type BRFilter = 'All' | BR;
type VehicleFilter = 'All' | string;
type OperatorFilter = 'All' | string;
type TechTreeFilter = 'All' | string;
type SamFilter = 'All' | string;

type SamFilters = {
  family: FamilyFilter;
  variant: VariantFilter;
  rank: RankFilter;
  br: BRFilter;
  vehicle: VehicleFilter;
  operator: OperatorFilter;
  techTree: TechTreeFilter;
  sam: SamFilter;
};

const DEFAULT_FILTERS: SamFilters = {
  family: 'All',
  variant: 'All',
  rank: 'All',
  br: 'All',
  vehicle: 'All',
  operator: 'All',
  techTree: 'All',
  sam: 'All',
};

export default function Sams() {
  const [activeSamId, setActiveSamId] = useState<string | null>(null);
  const [activeSamPlacement, setActiveSamPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<SamVehicle | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [showBrs, setShowBrs] = useState(false);
  const targetBrs = useRef(null);

  const [showFilters, setShowFilters] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [operatorSearch, setOperatorSearch] = useState('');
  const [techTreeSearch, setTechTreeSearch] = useState('');
  const [samSearch, setSamSearch] = useState('');
  const [variantSearch, setVariantSearch] = useState('');
  const [brSearch, setBrSearch] = useState('');
  const [samListSearch, setSamListSearch] = useState('');

  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [showOperatorPicker, setShowOperatorPicker] = useState(false);
  const [showTechTreePicker, setShowTechTreePicker] = useState(false);
  const [showSamPicker, setShowSamPicker] = useState(false);
  const [showVariantPicker, setShowVariantPicker] = useState(false);
  const [showBrPicker, setShowBrPicker] = useState(false);
  const [showMoreFamilyDesktop, setShowMoreFamilyDesktop] = useState(false);
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<SamFilters>(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState<SamFilters>(DEFAULT_FILTERS);

  const getVehicleBrByMode = (samVehicle: SamVehicle, mode: 'AB' | 'RB' | 'SB') => {
    if (mode === 'AB') return samVehicle.vehicleBr?.AB ?? samVehicle.vehicleBr?.RB;
    if (mode === 'SB') return samVehicle.vehicleBr?.SB ?? samVehicle.vehicleBr?.RB;
    return samVehicle.vehicleBr?.RB;
  };

  const matchesBrFilter = (samVehicle: SamVehicle, brFilter: BRFilter) => {
    if (brFilter === 'All') return true;
    return samVehicle.vehicleBr?.RB === brFilter;
  };

  const samMatchesFilters = (sam: SamDefinition, filters: SamFilters) => {
    if (filters.family !== 'All' && sam.family !== filters.family) return false;
    if (filters.variant !== 'All' && sam.variant !== filters.variant) return false;
    if (filters.sam !== 'All' && sam.id !== filters.sam) return false;

    return sam.vehicles.some((samVehicle) => {
      if (filters.rank !== 'All' && samVehicle.vehicleRank !== filters.rank) return false;
      if (!matchesBrFilter(samVehicle, filters.br)) return false;
      if (filters.vehicle !== 'All' && samVehicle.vehicleName !== filters.vehicle) return false;
      if (filters.operator !== 'All' && samVehicle.vehicleOperator !== filters.operator) return false;
      if (filters.techTree !== 'All' && samVehicle.vehicleTechTree !== filters.techTree) return false;
      return true;
    });
  };

  const familyOptions = useMemo(() => {
    const families = Array.from(new Set(samMissiles.map((sam) => sam.family))).sort((a, b) => a.localeCompare(b));
    return ['All', ...families];
  }, []);

  const variantOptions = useMemo(() => {
    const base = draftFilters.family === 'All' ? samMissiles : samMissiles.filter((sam) => sam.family === draftFilters.family);
    const variants = Array.from(new Set(base.map((sam) => sam.variant))).sort((a, b) => a.localeCompare(b));
    return ['All', ...variants];
  }, [draftFilters.family]);

  const rankOptions = useMemo(() => {
    const ranks = Array.from(
      new Set(
        samMissiles.flatMap((sam) => sam.vehicles.map((samVehicle) => samVehicle.vehicleRank).filter(Boolean))
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...ranks] as string[];
  }, []);

  const brOptions = useMemo(() => {
    const brs = Array.from(
      new Set(
        samMissiles.flatMap((sam) =>
          sam.vehicles
            .filter((samVehicle) => draftFilters.rank === 'All' || samVehicle.vehicleRank === draftFilters.rank)
            .map((samVehicle) => samVehicle.vehicleBr?.RB)
            .filter((br): br is BR => Boolean(br))
        )
      )
    ).sort((a, b) => parseFloat(a) - parseFloat(b));

    return ['All', ...brs] as BRFilter[];
  }, [draftFilters.rank]);

  const vehicleOptions = useMemo(() => {
    const vehicles = Array.from(
      new Map(
        samMissiles
          .flatMap((sam) =>
            sam.vehicles
              .filter((vehicle) => draftFilters.rank === 'All' || vehicle.vehicleRank === draftFilters.rank)
              .filter((vehicle) => draftFilters.techTree === 'All' || vehicle.vehicleTechTree === draftFilters.techTree)
              .map((vehicle) => ({
                name: vehicle.vehicleName,
                techTree: vehicle.vehicleTechTree,
                operator: vehicle.vehicleOperator,
                vehicleId: vehicle.vehicleId,
              }))
          )
          .filter((vehicle) => vehicle.name)
          .map((vehicle) => [vehicle.name, vehicle])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));

    return [{ name: 'All', techTree: 'All', operator: 'All', vehicleId: "All" }, ...vehicles];
  }, [draftFilters.rank, draftFilters.techTree]);

  const techTreeOptions = useMemo(() => {
    const trees = Array.from(
      new Set(
        samMissiles.flatMap((sam) =>
          sam.vehicles
            .filter((samVehicle) => draftFilters.rank === 'All' || samVehicle.vehicleRank === draftFilters.rank)
            .filter((samVehicle) => matchesBrFilter(samVehicle, draftFilters.br))
            .filter((samVehicle) => draftFilters.vehicle === 'All' || samVehicle.vehicleName === draftFilters.vehicle)
            .filter((samVehicle) => draftFilters.operator === 'All' || samVehicle.vehicleOperator === draftFilters.operator)
            .map((samVehicle) => samVehicle.vehicleTechTree)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...trees] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator]);

  const operatorOptions = useMemo(() => {
    const operators = Array.from(
      new Set(
        samMissiles.flatMap((sam) =>
          sam.vehicles
            .filter((samVehicle) => draftFilters.rank === 'All' || samVehicle.vehicleRank === draftFilters.rank)
            .filter((samVehicle) => matchesBrFilter(samVehicle, draftFilters.br))
            .filter((samVehicle) => draftFilters.vehicle === 'All' || samVehicle.vehicleName === draftFilters.vehicle)
            .filter((samVehicle) => draftFilters.techTree === 'All' || samVehicle.vehicleTechTree === draftFilters.techTree)
            .map((samVehicle) => samVehicle.vehicleOperator)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...operators] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  const samLabels = useMemo(() => new Map(samMissiles.map((sam) => [sam.id, sam.designation])), []);

  const samOptions = useMemo(() => {
    const baseFilters: SamFilters = { ...draftFilters, sam: 'All' };
    const ids = samMissiles
      .filter((sam) => samMatchesFilters(sam, baseFilters))
      .map((sam) => sam.id)
      .sort((a, b) => (samLabels.get(a) ?? a).localeCompare(samLabels.get(b) ?? b));

    return ['All', ...ids];
  }, [draftFilters, samLabels]);

  const quickVehicleOptions = useMemo(() => vehicleOptions.filter((option) => option.name !== 'All').slice(0, 3), [vehicleOptions]);
  const quickOperatorOptions = useMemo(() => operatorOptions.filter((option) => option !== 'All').slice(0, 3), [operatorOptions]);
  const quickTechTreeOptions = useMemo(() => techTreeOptions.filter((option) => option !== 'All').slice(0, 3), [techTreeOptions]);
  const quickVariantOptions = useMemo(() => variantOptions.filter((option) => option !== 'All').slice(0, 3), [variantOptions]);
  const quickBrOptions = useMemo(() => brOptions.filter((option) => option !== 'All').slice(0, 3), [brOptions]);
  const quickSamOptions = useMemo(() => samOptions.filter((option) => option !== 'All').slice(0, 3), [samOptions]);

  const searchableVehicleOptions = useMemo(() => {
    const query = vehicleSearch.trim().toLowerCase();
    return vehicleOptions.filter((option) => option.name !== 'All' && (!query || option.name.toLowerCase().includes(query)));
  }, [vehicleOptions, vehicleSearch]);

  const searchableOperatorOptions = useMemo(() => {
    const query = operatorSearch.trim().toLowerCase();
    return operatorOptions.filter((option) => option !== 'All' && (!query || option.toLowerCase().includes(query)));
  }, [operatorOptions, operatorSearch]);

  const searchableTechTreeOptions = useMemo(() => {
    const query = techTreeSearch.trim().toLowerCase();
    return techTreeOptions.filter((option) => option !== 'All' && (!query || option.toLowerCase().includes(query)));
  }, [techTreeOptions, techTreeSearch]);

  const searchableVariantOptions = useMemo(() => {
    const query = variantSearch.trim().toLowerCase();
    return variantOptions.filter((option) => option !== 'All' && (!query || option.toLowerCase().includes(query)));
  }, [variantOptions, variantSearch]);

  const searchableBrOptions = useMemo(() => {
    const query = brSearch.trim().toLowerCase();
    return brOptions.filter((option) => option !== 'All' && (!query || String(option).toLowerCase().includes(query)));
  }, [brOptions, brSearch]);

  const searchableSamOptions = useMemo(() => {
    const query = samSearch.trim().toLowerCase();
    return samOptions.filter((option) => {
      if (option === 'All') return false;
      const label = (samLabels.get(option) ?? option).toLowerCase();
      return !query || label.includes(query);
    });
  }, [samOptions, samSearch, samLabels]);

  const filteredSams = useMemo(() => samMissiles.filter((sam) => samMatchesFilters(sam, appliedFilters)), [appliedFilters]);

  const displayedSams = useMemo(() => {
    const query = samListSearch.trim().toLowerCase();
    if (!query) return filteredSams;

    return filteredSams.filter((sam) => {
      const designation = sam.designation.toLowerCase();
      const id = sam.id.toLowerCase();
      return designation.includes(query) || id.includes(query);
    });
  }, [filteredSams, samListSearch]);

  const previewFilteredSamsCount = useMemo(
    () => samMissiles.filter((sam) => samMatchesFilters(sam, draftFilters)).length,
    [draftFilters]
  );

  const hasDraftChanges =
    draftFilters.family !== appliedFilters.family ||
    draftFilters.variant !== appliedFilters.variant ||
    draftFilters.rank !== appliedFilters.rank ||
    draftFilters.br !== appliedFilters.br ||
    draftFilters.vehicle !== appliedFilters.vehicle ||
    draftFilters.operator !== appliedFilters.operator ||
    draftFilters.techTree !== appliedFilters.techTree ||
    draftFilters.sam !== appliedFilters.sam;

  const vehicleIconByName = useMemo(() => {
    const matches = samMissiles.flatMap((sam) =>
      sam.vehicles
        .filter((samVehicle) => draftFilters.rank === 'All' || samVehicle.vehicleRank === draftFilters.rank)
        .filter((samVehicle) => draftFilters.techTree === 'All' || samVehicle.vehicleTechTree === draftFilters.techTree)
    );

    const icons = new Map<string, string>();
    for (const samVehicle of matches) {
      if (!samVehicle.vehicleName || !samVehicle.vehicleTechTree || icons.has(samVehicle.vehicleName)) continue;
      icons.set(
        samVehicle.vehicleName,
        getCountryIcons({
          vehicleTechTree: samVehicle.vehicleTechTree,
          vehicleOperator: samVehicle.vehicleOperator,
        })
      );
    }

    return icons;
  }, [draftFilters.rank, draftFilters.techTree]);

  const operatorIconByName = useMemo(() => {
    const matches = samMissiles.flatMap((sam) =>
      sam.vehicles
        .filter((samVehicle) => draftFilters.rank === 'All' || samVehicle.vehicleRank === draftFilters.rank)
        .filter((samVehicle) => matchesBrFilter(samVehicle, draftFilters.br))
        .filter((samVehicle) => draftFilters.vehicle === 'All' || samVehicle.vehicleName === draftFilters.vehicle)
        .filter((samVehicle) => draftFilters.techTree === 'All' || samVehicle.vehicleTechTree === draftFilters.techTree)
        .filter((samVehicle) => Boolean(samVehicle.vehicleOperator))
    );

    const icons = new Map<string, string>();
    for (const samVehicle of matches) {
      if (!samVehicle.vehicleOperator || !samVehicle.vehicleTechTree || icons.has(samVehicle.vehicleOperator)) continue;
      icons.set(
        samVehicle.vehicleOperator,
        getCountryIcons({
          vehicleTechTree: samVehicle.vehicleTechTree,
          vehicleOperator: samVehicle.vehicleOperator,
        })
      );
    }

    return icons;
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  const getVehicleFilterIcon = (option: VehicleFilter) => {
    if (option === 'All') return null;
    return vehicleIconByName.get(option) ?? null;
  };

  const getOperatorFilterIcon = (option: OperatorFilter) => {
    if (option === 'All') return null;
    return operatorIconByName.get(option) ?? null;
  };

  const getTechTreeFilterIcon = (option: TechTreeFilter) => {
    if (option === 'All') return null;
    return getCountryIcons({ vehicleTechTree: option as NonNullable<SamVehicle['vehicleTechTree']> });
  };

  const getSamFilterLabel = (option: SamFilter) => {
    if (option === 'All') return 'All';
    return samLabels.get(option) ?? option;
  };

  const getVisibleOptions = (options: string[], showAll: boolean) => {
    return showAll ? options : options.slice(0, 3);
  };

  const getVehicleBrLabel = (samVehicle: SamVehicle, mode: 'AB' | 'RB' | 'SB') => {
    return getVehicleBrByMode(samVehicle, mode) ?? 'N/A';
  };

  const getPopoverVehicles = (sam: SamDefinition) => {
    let vehicles = [...sam.vehicles];
    if (appliedFilters.rank !== 'All') vehicles = vehicles.filter((samVehicle) => samVehicle.vehicleRank === appliedFilters.rank);
    if (appliedFilters.br !== 'All') vehicles = vehicles.filter((samVehicle) => matchesBrFilter(samVehicle, appliedFilters.br));
    if (appliedFilters.vehicle !== 'All') vehicles = vehicles.filter((samVehicle) => samVehicle.vehicleName === appliedFilters.vehicle);
    if (appliedFilters.operator !== 'All') vehicles = vehicles.filter((samVehicle) => samVehicle.vehicleOperator === appliedFilters.operator);
    if (appliedFilters.techTree !== 'All') vehicles = vehicles.filter((samVehicle) => samVehicle.vehicleTechTree === appliedFilters.techTree);
    return vehicles;
  };

  const handleFamilySelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      family: eventKey as FamilyFilter,
      variant: 'All',
      sam: 'All',
    }));
  };

  const handleVariantSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, variant: eventKey as VariantFilter }));
    setShowVariantPicker(false);
  };

  const handleRankSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      rank: eventKey as RankFilter,
      vehicle: 'All',
      operator: 'All',
      techTree: 'All',
      br: 'All',
    }));
  };

  const handleBrSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, br: eventKey as BRFilter }));
    setShowBrPicker(false);
  };

  const handleVehicleSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, vehicle: eventKey as VehicleFilter }));
    setShowVehiclePicker(false);
  };

  const handleOperatorSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, operator: eventKey as OperatorFilter }));
    setShowOperatorPicker(false);
  };

  const handleTechTreeSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, techTree: eventKey as TechTreeFilter }));
    setShowTechTreePicker(false);
  };

  const handleSamSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, sam: eventKey as SamFilter }));
    setShowSamPicker(false);
  };

  const handleOpenVariantPicker = () => {
    setVariantSearch('');
    setShowVariantPicker(true);
  };

  const handleOpenBrPicker = () => {
    setBrSearch('');
    setShowBrPicker(true);
  };

  const handleOpenVehiclePicker = () => {
    setVehicleSearch('');
    setShowVehiclePicker(true);
  };

  const handleOpenOperatorPicker = () => {
    setOperatorSearch('');
    setShowOperatorPicker(true);
  };

  const handleOpenTechTreePicker = () => {
    setTechTreeSearch('');
    setShowTechTreePicker(true);
  };

  const handleOpenSamPicker = () => {
    setSamSearch('');
    setShowSamPicker(true);
  };

  const handleCloseFiltersMobile = () => {
    setDraftFilters(appliedFilters);
    setShowFilters(false);
  };

  const handleShowFiltersMobile = () => {
    setDraftFilters(appliedFilters);
    setShowFilters(true);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(draftFilters);
    setShowFilters(false);
  };

  const handleResetDraftFilters = () => {
    setDraftFilters(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
    setShowFilters(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 576px)');
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  function handleSamClick(samId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveSamPlacement(openUpwards ? 'top-start' : 'bottom-start');
    } else {
      setActiveSamPlacement('auto');
    }

    if (activeSamId === samId) {
      setActiveSamId(null);
      setVehicle(null);
      return;
    }

    const sam = samMissiles.find((row) => row.id === samId);
    if (!sam) {
      setVehicle(null);
      setActiveSamId(samId);
      setShow(false);
      setShowBrs(false);
      return;
    }

    const popoverVehicles = getPopoverVehicles(sam);
    setVehicle(popoverVehicles[0] ?? sam.vehicles[0] ?? null);
    setActiveSamId(samId);
    setShow(false);
    setShowBrs(false);
  }

  const popover = (sam: SamDefinition) => (
    <Popover id="sam-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
            <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

            <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
          </div>

          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Surface-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-5 fw-bold">{sam.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div>
          <span className="text-muted">SAM</span>
          <span className="text-muted"> - </span>
          <span className="text-muted">Surface-to-Air Missile</span>
        </div>

        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center gap-1">
              <Image src={`https://static.encyclopedia.warthunder.com/icons/${vehicle?.vehicleId}_ico.svg`} height={36} />

              {vehicle?.vehicleName === "NASAMS 3 (TEL)" ? (
                <>
                  {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree })} height={24} />}
                  {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} height={24} />}
                </>
              ) : (
                <>
                  {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} height={24} />}
                </>
              )}
              <span className="font-wt">{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? 'is-open' : ''}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="text-center pt-0 border-bottom" disabled>
                {getPopoverVehicles(sam).length > 1 ? (
                  <>
                    {getPopoverVehicles(sam).length} vehicles
                  </>
                ) : (
                  <>
                    {getPopoverVehicles(sam).length} vehicle
                  </>
                )}
              </Dropdown.Item>
              {getPopoverVehicles(sam).map((samVehicle) => (
                <Dropdown.Item key={samVehicle.id} className="d-flex align-items-center gap-1" onClick={() => setVehicle(samVehicle)}>
                  <Image src={`https://static.encyclopedia.warthunder.com/icons/${samVehicle?.vehicleId}_ico.svg`} height={26} />

                  {samVehicle.vehicleName === "NASAMS 3 (TEL)" ? (
                    <>
                      {samVehicle.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: samVehicle.vehicleTechTree })} width={24} />}
                      {samVehicle.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: samVehicle.vehicleTechTree, vehicleOperator: samVehicle.vehicleOperator })} width={27} />}
                    </>
                  ) : (
                    <>
                      {samVehicle.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: samVehicle.vehicleTechTree, vehicleOperator: samVehicle.vehicleOperator })} width={27} />}
                    </>
                  )}
                  <span className="font-wt">{samVehicle.vehicleName}</span>
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
                  <span>{vehicle ? getVehicleBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle, 'AB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle, 'RB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle, 'SB') : ''}</span>
                        </div>
                      </div>
                      <span className="text-muted text-start">Battle rating</span>
                    </div>
                  </Tooltip>
                </Overlay>
              </>
            ) : (
              <>
                <OverlayTrigger overlay={<Tooltip id="overlay-br">
                  <div className="d-flex flex-column">
                    <div className="d-flex column-gap-2">
                      <div className="d-flex flex-column">
                        <span className="text-muted small">AB</span>
                        <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle, 'AB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle, 'RB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle, 'SB') : ''}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{' '}
                    <span>{vehicle ? getVehicleBrLabel(vehicle, 'RB') : 'N/A'}</span>
                  </div>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>

        <ul className="list-unstyled sams-performance-list mb-0">
          {(sam.family === 'Semi-Automatic' || sam.family === 'Beam riding') && (
            <li className="d-flex flex-column align-items-between justify-content-center flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="text-muted">Armor penetration (max.)</span>
              <span className="fw-bold">{sam.penetrationMm} mm</span>
            </li>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Caliber</span>
            <span className="text-muted">{sam.caliberMm} mm</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{sam.projectileMassKg} kg</span>
          </li>

          {(sam.family === 'Semi-Automatic' || sam.family === 'Beam riding') && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Fuze Delay</span>
                <span className="text-muted">{sam.fuzeDelayM} m</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Fuze Sensitivity</span>
                <span className="text-muted">{sam.fuzeSensitivityMm} mm</span>
              </li>
            </>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Guidance</span>
            {isMobile ? (
              <>
                <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{sam.guidance}</span>
                <Overlay target={target} show={show} placement="top">
                  <Tooltip id="overlay-name">{getSamVariantName(sam.variant).split(/([-\s]+)/).map((part, index) =>
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
                <OverlayTrigger overlay={<Tooltip id={sam.id}>{getSamVariantName(sam.variant).split(/([-\s]+)/).map((part, index) =>
                  /[-+\s]+/.test(part) ? (
                    <span key={index} className="fw-normal text-muted">{part}</span>
                  ) : (
                    <span key={index} className="fw-bold">{part}</span>
                  )
                )}</Tooltip>}>
                  <span className="text-muted">{sam.guidance}</span>
                </OverlayTrigger>
              </>
            )}
          </li>

          {sam.family === 'IR' && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Aspect</span>
                <span className="text-muted">{sam.aspect}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range in rear-aspect</span>
                <span className="text-muted">{sam.lockRangeRearAspectKm} km</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range in all-aspect</span>
                <span className="text-muted">{sam.lockRangeAllAspectKm} km</span>
              </li>

              {sam.IRCCM ? (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">IRCCM</span>
                  <span className="text-muted"><FaCircleCheck className="text-success" /></span>
                </li>
              ) : (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">IRCCM</span>
                  <span className="text-muted"><FaCircleXmark className="text-danger" /></span>
                </li>
              )}
            </>
          )}

          {sam.family === 'ARH' && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Band</span>
                <span className="text-muted">{sam.band}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Shoot down</span>
                <span className="text-muted">{sam.shootDown}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range</span>
                <span className="text-muted">{sam.lockRangeKm} km</span>
              </li>
            </>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Launch range</span>
            <span className="text-muted">{sam.launchRangeKm} km</span>
          </li>

          {sam.maximumSpeedMs && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum speed</span>
              <span className="text-muted">{sam.maximumSpeedMs} m/s</span>
            </li>
          )}

          {sam.maximumSpeedMach && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum speed</span>
              <span className="text-muted">{sam.maximumSpeedMach} M</span>
            </li>
          )}

          {(sam.family === 'IR' || sam.family === 'ARH') && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum overload</span>
              <span className="text-muted">{sam.maximumOverloadG} G</span>
            </li>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Missile guidance time</span>
            <span className="text-muted">{sam.missileGuidanceTimeS} s</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{sam.explosiveType}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{sam.explosiveMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">TNT Equivalent</span>
            <span className="text-muted">{sam.tntEquivalentKg} kg</span>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  )

  return (
    <Container className="p-4">
      {isMobile ? (
        <>
          <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
            <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
            <p className="my-auto">Back to Home</p>
          </Button>

          <h1>Surface-to-Air Missiles</h1>

          <div className="sams-mobile-filter-bar position-sticky z-1 mb-2">
            <Button variant="primary" onClick={handleShowFiltersMobile} className="sams-mobile-filter-button w-100 d-flex align-items-center justify-content-center column-gap-2">
              <FiSliders className="fs-5" />
              <span className="fw-semibold">Filter {previewFilteredSamsCount} SAM{previewFilteredSamsCount !== 1 ? 's' : ''}</span>
            </Button>
          </div>

          <Offcanvas show={showFilters} onHide={handleCloseFiltersMobile} placement="bottom" className="sams-mobile-filters h-100 w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter SAMs</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="d-flex flex-column row-gap-3">
                <Dropdown onSelect={handleFamilySelect}>
                  <Dropdown.Toggle variant={draftFilters.family === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Family: {draftFilters.family}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {familyOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.family}>
                        {option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleVariantSelect}>
                  <Dropdown.Toggle variant={draftFilters.variant === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Variant: {draftFilters.variant}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {variantOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.variant}>
                        {option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleRankSelect}>
                  <Dropdown.Toggle variant={draftFilters.rank === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Rank: {draftFilters.rank}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {rankOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.rank}>{option}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex flex-column row-gap-2">
                  <span className="fw-semibold">BR: {draftFilters.br}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.br === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleBrSelect('All')}>All</Button>
                    {quickBrOptions.map((option) => (
                      <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} onClick={() => handleBrSelect(option)}>{option}</Button>
                    ))}
                    {brOptions.length > 4 && <Button variant="secondary" onClick={handleOpenBrPicker}>More</Button>}
                  </div>
                </div>

                <div className="d-flex flex-column row-gap-2">
                  <span className="fw-semibold font-wt">Vehicle: {draftFilters.vehicle}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.vehicle === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleVehicleSelect('All')}>All</Button>
                    {quickVehicleOptions.map((option) => (
                      <Button className="font-wt" key={option.name} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} onClick={() => handleVehicleSelect(option.name)}>{option.name}</Button>
                    ))}
                    {vehicleOptions.length > 4 && <Button variant="secondary" onClick={handleOpenVehiclePicker}>More</Button>}
                  </div>
                </div>

                <div className="d-flex flex-column row-gap-2">
                  <span className="fw-semibold">Operator: {draftFilters.operator}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.operator === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleOperatorSelect('All')}>All</Button>
                    {quickOperatorOptions.map((option) => (
                      <Button key={option} variant={draftFilters.operator === option ? 'primary' : 'outline-secondary'} onClick={() => handleOperatorSelect(option)}>{option}</Button>
                    ))}
                    {operatorOptions.length > 4 && <Button variant="secondary" onClick={handleOpenOperatorPicker}>More</Button>}
                  </div>
                </div>

                <div className="d-flex flex-column row-gap-2">
                  <span className="fw-semibold">Tech Tree: {draftFilters.techTree}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.techTree === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleTechTreeSelect('All')}>All</Button>
                    {quickTechTreeOptions.map((option) => (
                      <Button key={option} variant={draftFilters.techTree === option ? 'primary' : 'outline-secondary'} onClick={() => handleTechTreeSelect(option)}>{option}</Button>
                    ))}
                    {techTreeOptions.length > 4 && <Button variant="secondary" onClick={handleOpenTechTreePicker}>More</Button>}
                  </div>
                </div>

                <div className="d-flex flex-column row-gap-2">
                  <span className="fw-semibold">SAM: {getSamFilterLabel(draftFilters.sam)}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.sam === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleSamSelect('All')}>All</Button>
                    {quickSamOptions.map((option) => (
                      <Button key={option} variant={draftFilters.sam === option ? 'primary' : 'outline-secondary'} onClick={() => handleSamSelect(option)}>{getSamFilterLabel(option)}</Button>
                    ))}
                    {samOptions.length > 4 && <Button variant="secondary" onClick={handleOpenSamPicker}>More</Button>}
                  </div>
                </div>
                
                {hasDraftChanges && (
                  <Button variant="primary" onClick={handleApplyFilters}>Apply {previewFilteredSamsCount} Result{previewFilteredSamsCount !== 1 ? 's' : ''}</Button>
                )}
                <Button variant="outline-primary" onClick={handleResetDraftFilters}>Reset Filters</Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Form.Control
            type="search"
            placeholder="Search SAMs..."
            value={samListSearch}
            onChange={(event) => setSamListSearch(event.target.value)}
            className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2"
          />

          <p className="text-muted mb-3">{displayedSams.length} results</p>

          <div className="d-flex flex-column row-gap-4 spaa-sams-row">
            {displayedSams.map((sam) => (
              <OverlayTrigger key={sam.id} trigger="click" placement={activeSamPlacement} show={activeSamId === sam.id} overlay={popover(sam)} rootClose onToggle={(nextShow) => {
                if (!nextShow && activeSamId === sam.id) {
                  setActiveSamId(null);
                  setVehicle(null);
                }
              }}>
                <Button
                  variant="transparent"
                  className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
                  onClick={(event) => handleSamClick(sam.id, event.currentTarget)}
                >
                  <div className="shell-icon position-relative overflow-hidden">
                    <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                      <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

                      <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
                    </div>

                    <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                      <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Surface-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                    </div>
                  </div>

                  <span>{sam.designation}</span>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </>
      ) : (
        <div className="sams-desktop-layout">
          <aside className="sams-desktop-sidebar">
            <div className="sams-sidebar-scroll">
              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">Family</h5>
                <div className="sams-sidebar-options">
                  {getVisibleOptions(familyOptions as string[], showMoreFamilyDesktop).map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.family === option ? 'is-active' : ''}`} onClick={() => handleFamilySelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {(familyOptions as string[]).length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={() => setShowMoreFamilyDesktop((current) => !current)}>
                    {showMoreFamilyDesktop ? 'Less' : 'More'}
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">Variant</h5>
                <div className="sams-sidebar-options">
                  {quickVariantOptions.map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.variant === option ? 'is-active' : ''}`} onClick={() => handleVariantSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {variantOptions.length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={handleOpenVariantPicker}>
                    More
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">Rank</h5>
                <div className="sams-sidebar-options">
                  {getVisibleOptions(rankOptions as string[], showMoreRankDesktop).map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.rank === option ? 'is-active' : ''}`} onClick={() => handleRankSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {(rankOptions as string[]).length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={() => setShowMoreRankDesktop((current) => !current)}>
                    {showMoreRankDesktop ? 'Less' : 'More'}
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">BR</h5>
                <div className="sams-sidebar-options">
                  <button type="button" className={`sams-sidebar-option ${draftFilters.br === 'All' ? 'is-active' : ''}`} onClick={() => handleBrSelect('All')}>
                    All
                  </button>
                  {quickBrOptions.map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.br === option ? 'is-active' : ''}`} onClick={() => handleBrSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {brOptions.length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={handleOpenBrPicker}>
                    More
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">Vehicle</h5>
                <div className="sams-sidebar-options">
                  <button type="button" className={`sams-sidebar-option ${draftFilters.vehicle === 'All' ? 'is-active' : ''}`} onClick={() => handleVehicleSelect('All')}>
                    All
                  </button>
                  {quickVehicleOptions.map((option) => (
                    <button key={option.name} type="button" className={`sams-sidebar-option font-wt ${draftFilters.vehicle === option.name ? 'is-active' : ''}`} onClick={() => handleVehicleSelect(option.name)}>
                      {option.name}
                    </button>
                  ))}
                </div>
                {vehicleOptions.length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={handleOpenVehiclePicker}>
                    More
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">Operator</h5>
                <div className="sams-sidebar-options">
                  <button type="button" className={`sams-sidebar-option ${draftFilters.operator === 'All' ? 'is-active' : ''}`} onClick={() => handleOperatorSelect('All')}>
                    All
                  </button>
                  {quickOperatorOptions.map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.operator === option ? 'is-active' : ''}`} onClick={() => handleOperatorSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {operatorOptions.length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={handleOpenOperatorPicker}>
                    More
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">Tech Tree</h5>
                <div className="sams-sidebar-options">
                  <button type="button" className={`sams-sidebar-option ${draftFilters.techTree === 'All' ? 'is-active' : ''}`} onClick={() => handleTechTreeSelect('All')}>
                    All
                  </button>
                  {quickTechTreeOptions.map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.techTree === option ? 'is-active' : ''}`} onClick={() => handleTechTreeSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {techTreeOptions.length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={handleOpenTechTreePicker}>
                    More
                  </button>
                )}
              </div>

              <div className="sams-sidebar-section">
                <h5 className="sams-sidebar-title">SAM</h5>
                <div className="sams-sidebar-options">
                  <button type="button" className={`sams-sidebar-option ${draftFilters.sam === 'All' ? 'is-active' : ''}`} onClick={() => handleSamSelect('All')}>
                    All
                  </button>
                  {quickSamOptions.map((option) => (
                    <button key={option} type="button" className={`sams-sidebar-option ${draftFilters.sam === option ? 'is-active' : ''}`} onClick={() => handleSamSelect(option)}>
                      {getSamFilterLabel(option)}
                    </button>
                  ))}
                </div>
                {samOptions.length > 4 && (
                  <button type="button" className="sams-sidebar-more" onClick={handleOpenSamPicker}>
                    More
                  </button>
                )}
              </div>
            </div>

            <div className="sams-sidebar-actions">
              <Button variant="outline-primary" onClick={handleResetDraftFilters} className="border-2">
                Reset
              </Button>
              {hasDraftChanges && (
                <Button variant="primary" onClick={handleApplyFilters} className="sams-filter-button">
                  <FiSliders className="fs-5 me-1" />
                  <span className="fw-semibold">Filter {previewFilteredSamsCount} SAM{previewFilteredSamsCount !== 1 ? 's' : ''}</span>
                </Button>
              )}
            </div>
          </aside>

          <div className="sams-desktop-results">
            <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
              <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
              <p className="my-auto">Back to Home</p>
            </Button>

            <h1>Surface-to-Air Missiles</h1>

            <Form.Control
              type="search"
              placeholder="Search SAMs..."
              value={samListSearch}
              onChange={(event) => setSamListSearch(event.target.value)}
              className="sams-modal-search bg-transparent text-light border-2 shadow-none mb-3"
            />

            <p className="text-muted mb-3">{displayedSams.length} results</p>

            <div className="d-flex flex-column row-gap-4 spaa-sams-row">
              {displayedSams.map((sam) => (
                <OverlayTrigger key={sam.id} trigger="click" placement={activeSamPlacement} show={activeSamId === sam.id} overlay={popover(sam)} rootClose onToggle={(nextShow) => {
                  if (!nextShow && activeSamId === sam.id) {
                    setActiveSamId(null);
                    setVehicle(null);
                  }
                }}>
                  <Button
                    variant="transparent"
                    className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
                    onClick={(event) => handleSamClick(sam.id, event.currentTarget)}
                  >
                    <div className="shell-icon position-relative overflow-hidden">
                      <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                        <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

                        <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
                      </div>

                      <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                        <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Surface-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                      </div>
                    </div>

                    <span>{sam.designation}</span>
                  </Button>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobile ? (
        <>
          <Offcanvas
            show={showVehiclePicker}
            onHide={() => setShowVehiclePicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Vehicle</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column row-gap-2">
              <Form.Control type="search" placeholder="Search vehicle..." value={vehicleSearch} onChange={(event) => setVehicleSearch(event.target.value)} className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              
              <span className="text-muted">{searchableVehicleOptions.length} vehicles</span>

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button key={option.name} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleVehicleSelect(option.name)}>
                    <Image src={`https://static.encyclopedia.warthunder.com/icons/${option?.vehicleId}_ico.svg`} height={24} />
                    {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                    <span className="font-wt">{option.name}</span>
                  </Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas
            show={showOperatorPicker}
            onHide={() => setShowOperatorPicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Operator</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search operator..." value={operatorSearch} onChange={(event) => setOperatorSearch(event.target.value)} className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
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

          <Offcanvas
            show={showTechTreePicker}
            onHide={() => setShowTechTreePicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Tech Tree</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search tech tree..." value={techTreeSearch} onChange={(event) => setTechTreeSearch(event.target.value)} className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
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

          <Offcanvas
            show={showVariantPicker}
            onHide={() => setShowVariantPicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Variant</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search variant..." value={variantSearch} onChange={(event) => setVariantSearch(event.target.value)} className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVariantOptions.map((option) => (
                  <Button key={option} variant={draftFilters.variant === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleVariantSelect(option)}>
                    {option}
                  </Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas
            show={showBrPicker}
            onHide={() => setShowBrPicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select BR</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search BR..." value={brSearch} onChange={(event) => setBrSearch(event.target.value)} className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableBrOptions.map((option) => (
                  <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleBrSelect(option)}>
                    {option}
                  </Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas
            show={showSamPicker}
            onHide={() => setShowSamPicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select SAM</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search SAM..." value={samSearch} onChange={(event) => setSamSearch(event.target.value)} className="sams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableSamOptions.map((option) => (
                  <Button key={option} variant={draftFilters.sam === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleSamSelect(option)}>
                    {getSamFilterLabel(option)}
                  </Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <>
          <Modal show={showVehiclePicker} onHide={() => setShowVehiclePicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select Vehicle</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-2">
              <Form.Control type="search" placeholder="Search vehicle..." value={vehicleSearch} onChange={(event) => setVehicleSearch(event.target.value)} className="sams-modal-search bg-transparent text-light border-2 shadow-none" />

              <span className="text-muted">{searchableVehicleOptions.length} vehicles</span>
              
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option: any) => (
                  <Button key={option.name} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleVehicleSelect(option.name)}>
                    <Image src={`https://static.encyclopedia.warthunder.com/icons/${option?.vehicleId}_ico.svg`} height={24} />
                    
                    {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} alt="Vehicle operator" />}
                    <span className="font-wt">{option.name}</span>
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showOperatorPicker} onHide={() => setShowOperatorPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select Operator</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search operator..." value={operatorSearch} onChange={(event) => setOperatorSearch(event.target.value)} className="sams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableOperatorOptions.map((option) => (
                  <Button key={option} variant={draftFilters.operator === option ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleOperatorSelect(option)}>
                    {getOperatorFilterIcon(option) && <Image src={getOperatorFilterIcon(option) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                    <span>{option}</span>
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showTechTreePicker} onHide={() => setShowTechTreePicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select Tech Tree</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search tech tree..." value={techTreeSearch} onChange={(event) => setTechTreeSearch(event.target.value)} className="sams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableTechTreeOptions.map((option) => (
                  <Button key={option} variant={draftFilters.techTree === option ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleTechTreeSelect(option)}>
                    {getTechTreeFilterIcon(option) && <Image src={getTechTreeFilterIcon(option) ?? ''} width={20} height={20} alt="Tech tree" />}
                    <span>{option}</span>
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showVariantPicker} onHide={() => setShowVariantPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select Variant</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search variant..." value={variantSearch} onChange={(event) => setVariantSearch(event.target.value)} className="sams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVariantOptions.map((option) => (
                  <Button key={option} variant={draftFilters.variant === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleVariantSelect(option)}>
                    {option}
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showBrPicker} onHide={() => setShowBrPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select BR</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search BR..." value={brSearch} onChange={(event) => setBrSearch(event.target.value)} className="sams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableBrOptions.map((option) => (
                  <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleBrSelect(option)}>
                    {option}
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showSamPicker} onHide={() => setShowSamPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select SAM</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search SAM..." value={samSearch} onChange={(event) => setSamSearch(event.target.value)} className="sams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableSamOptions.map((option) => (
                  <Button key={option} variant={draftFilters.sam === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleSamSelect(option)}>
                    {getSamFilterLabel(option)}
                  </Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  )
}
