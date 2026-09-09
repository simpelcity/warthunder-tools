import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useMemo } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { FiSliders } from 'react-icons/fi'
import { agmMissiles } from '@/data/AgmMissiles'
import type { AgmDefinition, BaseAgmVehicle, Agm, AgmMissileVariant, Rank, BR } from '@/types/AgmMissiles'
import '@/styles/pages/Aams.scss'
import { getArmIconPath as getAgmIconPath } from '@/constants/AgmMissileIcons'
import { getCountryIcons } from '@/constants/CountryIcons'
import { formatVehicleNameWithNato } from '@/constants/NatoReportingNames'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

type CategoryFilter = 'All' | Agm;
type FamilyFilter = 'All' | AgmDefinition['family'];
type VariantFilter = 'All' | AgmMissileVariant;
type RankFilter = 'All' | Rank;
type BRFilter = 'All' | BR;
type VehicleFilter = 'All' | string;
type OperatorFilter = 'All' | string;
type TechTreeFilter = 'All' | string;
type AgmFilter = 'All' | string;

type AgmFilters = {
  category: CategoryFilter;
  family: FamilyFilter;
  variant: VariantFilter;
  rank: RankFilter;
  br: BRFilter;
  vehicle: VehicleFilter;
  operator: OperatorFilter;
  techTree: TechTreeFilter;
  agm: AgmFilter;
};

const DEFAULT_FILTERS: AgmFilters = {
  category: 'All',
  family: 'All',
  variant: 'All',
  rank: 'All',
  br: 'All',
  vehicle: 'All',
  operator: 'All',
  techTree: 'All',
  agm: 'All',
};

export default function Agms() {
  const [activeAgmId, setActiveAgmId] = useState<string | null>(null);
  const [activeAgmPlacement, setActiveAgmPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<BaseAgmVehicle | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [showBrs, setShowBrs] = useState(false);
  const targetBrs = useRef(null);

  const [showFilters, setShowFilters] = useState(false);
  const [showNatoNames, setShowNatoNames] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [operatorSearch, setOperatorSearch] = useState('');
  const [techTreeSearch, setTechTreeSearch] = useState('');
  const [agmSearch, setAgmSearch] = useState('');
  const [variantSearch, setVariantSearch] = useState('');
  const [brSearch, setBrSearch] = useState('');
  const [agmListSearch, setAgmListSearch] = useState('');

  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [showOperatorPicker, setShowOperatorPicker] = useState(false);
  const [showTechTreePicker, setShowTechTreePicker] = useState(false);
  const [showAgmPicker, setShowAgmPicker] = useState(false);
  const [showVariantPicker, setShowVariantPicker] = useState(false);
  const [showBrPicker, setShowBrPicker] = useState(false);
  const [showMoreCategoryDesktop, setShowMoreCategoryDesktop] = useState(false);
  const [showMoreFamilyDesktop, setShowMoreFamilyDesktop] = useState(false);
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<AgmFilters>(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState<AgmFilters>(DEFAULT_FILTERS);

  const formatVehicleName = (name?: string | null, vehicleId?: string | null) => {
    if (!name) return name;
    return showNatoNames ? formatVehicleNameWithNato(name, vehicleId) : name;
  };

  const getVehicleBrByMode = (agmVehicle: BaseAgmVehicle, mode: 'AB' | 'RB' | 'SB') => {
    if (mode === 'AB') return agmVehicle.vehicleBr?.AB ?? agmVehicle.vehicleBr?.RB;
    if (mode === 'SB') return agmVehicle.vehicleBr?.SB ?? agmVehicle.vehicleBr?.RB;
    return agmVehicle.vehicleBr?.RB;
  };

  const matchesBrFilter = (agmVehicle: BaseAgmVehicle, brFilter: BRFilter) => {
    if (brFilter === 'All') return true;
    return agmVehicle.vehicleBr?.RB === brFilter;
  };

  const agmMatchesFilters = (agm: AgmDefinition, filters: AgmFilters) => {
    if (filters.category !== 'All' && agm.category !== filters.category) return false;
    if (filters.family !== 'All' && agm.family !== filters.family) return false;
    if (filters.variant !== 'All' && agm.family !== filters.variant) return false;
    if (filters.agm !== 'All' && agm.id !== filters.agm) return false;

    return agm.vehicles.some((agmVehicle) => {
      if (filters.rank !== 'All' && agmVehicle.vehicleRank !== filters.rank) return false;
      if (!matchesBrFilter(agmVehicle, filters.br)) return false;
      if (filters.vehicle !== 'All' && agmVehicle.vehicleName !== filters.vehicle) return false;
      if (filters.operator !== 'All' && agmVehicle.vehicleOperator !== filters.operator) return false;
      if (filters.techTree !== 'All' && agmVehicle.vehicleTechTree !== filters.techTree) return false;
      return true;
    });
  };

  const categoryOptions = useMemo(() => {
    const values = Array.from(new Set(agmMissiles.map((agm) => agm.category))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values];
  }, []);

  const familyOptions = useMemo(() => {
    const base = draftFilters.category === 'All' ? agmMissiles : agmMissiles.filter((agm) => agm.category === draftFilters.category);
    const values = Array.from(new Set(base.map((agm) => agm.family))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values];
  }, [draftFilters.category]);

  const variantOptions = useMemo(() => {
    const base = agmMissiles.filter((agm) => {
      if (draftFilters.category !== 'All' && agm.category !== draftFilters.category) return false;
      if (draftFilters.family !== 'All' && agm.family !== draftFilters.family) return false;
      return true;
    });

    const values = Array.from(new Set(base.map((agm) => agm.family))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values];
  }, [draftFilters.category, draftFilters.family]);

  const rankOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        agmMissiles.flatMap((agm) => agm.vehicles.map((agmVehicle) => agmVehicle.vehicleRank).filter(Boolean))
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, []);

  const brOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        agmMissiles.flatMap((agm) =>
          agm.vehicles
            .filter((agmVehicle) => draftFilters.rank === 'All' || agmVehicle.vehicleRank === draftFilters.rank)
            .map((agmVehicle) => agmVehicle.vehicleBr?.RB)
            .filter((br): br is BR => Boolean(br))
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));

    return ['All', ...values] as BRFilter[];
  }, [draftFilters.rank]);

  const vehicleOptions = useMemo(() => {
    const values = Array.from(
      new Map(
        agmMissiles.flatMap((agm) =>
          agm.vehicles
            .filter((agmVehicle) => draftFilters.rank === 'All' || agmVehicle.vehicleRank === draftFilters.rank)
            .filter((agmVehicle) => draftFilters.techTree === 'All' || agmVehicle.vehicleTechTree === draftFilters.techTree)
            .map((agmVehicle) => ({
              name: agmVehicle?.vehicleName,
              vehicleId: agmVehicle?.vehicleId
            }))
        )
        .filter((agmVehicle) => agmVehicle.name)
        .map((agmVehicle) => [agmVehicle.name, agmVehicle])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));

    return [{ name: 'All', vehicleId: 'All' }, ...values];
  }, [draftFilters.rank, draftFilters.techTree]);

  const techTreeOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        agmMissiles.flatMap((agm) =>
          agm.vehicles
            .filter((agmVehicle) => draftFilters.rank === 'All' || agmVehicle.vehicleRank === draftFilters.rank)
            .filter((agmVehicle) => matchesBrFilter(agmVehicle, draftFilters.br))
            .filter((agmVehicle) => draftFilters.vehicle === 'All' || agmVehicle.vehicleName === draftFilters.vehicle)
            .filter((agmVehicle) => draftFilters.operator === 'All' || agmVehicle.vehicleOperator === draftFilters.operator)
            .map((agmVehicle) => agmVehicle.vehicleTechTree)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator]);

  const operatorOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        agmMissiles.flatMap((agm) =>
          agm.vehicles
            .filter((agmVehicle) => draftFilters.rank === 'All' || agmVehicle.vehicleRank === draftFilters.rank)
            .filter((agmVehicle) => matchesBrFilter(agmVehicle, draftFilters.br))
            .filter((agmVehicle) => draftFilters.vehicle === 'All' || agmVehicle.vehicleName === draftFilters.vehicle)
            .filter((agmVehicle) => draftFilters.techTree === 'All' || agmVehicle.vehicleTechTree === draftFilters.techTree)
            .map((agmVehicle) => agmVehicle.vehicleOperator)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  const agmLabels = useMemo(() => new Map(agmMissiles.map((agm) => [agm.id, agm.designation])), []);

  const agmOptions = useMemo(() => {
    const baseFilters: AgmFilters = { ...draftFilters, agm: 'All' };
    const values = agmMissiles
      .filter((agm) => agmMatchesFilters(agm, baseFilters))
      .map((agm) => agm.id)
      .sort((a, b) => (agmLabels.get(a) ?? a).localeCompare(agmLabels.get(b) ?? b));

    return ['All', ...values];
  }, [draftFilters, agmLabels]);

  const quickVehicleOptions = useMemo(() => vehicleOptions.filter((option) => option.name !== 'All').slice(0, 3), [vehicleOptions]);
  const quickOperatorOptions = useMemo(() => operatorOptions.filter((option) => option !== 'All').slice(0, 3), [operatorOptions]);
  const quickTechTreeOptions = useMemo(() => techTreeOptions.filter((option) => option !== 'All').slice(0, 3), [techTreeOptions]);
  const quickVariantOptions = useMemo(() => variantOptions.filter((option) => option !== 'All').slice(0, 3), [variantOptions]);
  const quickBrOptions = useMemo(() => brOptions.filter((option) => option !== 'All').slice(0, 3), [brOptions]);
  const quickAgmOptions = useMemo(() => agmOptions.filter((option) => option !== 'All').slice(0, 3), [agmOptions]);

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

  const searchableAgmOptions = useMemo(() => {
    const query = agmSearch.trim().toLowerCase();
    return agmOptions.filter((option) => {
      if (option === 'All') return false;
      const label = (agmLabels.get(option) ?? option).toLowerCase();
      return !query || label.includes(query);
    });
  }, [agmOptions, agmSearch, agmLabels]);

  const filteredAgms = useMemo(() => agmMissiles.filter((agm) => agmMatchesFilters(agm, appliedFilters)), [appliedFilters]);

  const displayedAgms = useMemo(() => {
    const query = agmListSearch.trim().toLowerCase();
    if (!query) return filteredAgms;

    return filteredAgms.filter((agm) => {
      const designation = agm.designation.toLowerCase();
      const id = agm.id.toLowerCase();
      return designation.includes(query) || id.includes(query);
    });
  }, [filteredAgms, agmListSearch]);

  const previewFilteredAgmsCount = useMemo(
    () => agmMissiles.filter((agm) => agmMatchesFilters(agm, draftFilters)).length,
    [draftFilters]
  );

  const hasDraftChanges =
    draftFilters.category !== appliedFilters.category ||
    draftFilters.family !== appliedFilters.family ||
    draftFilters.variant !== appliedFilters.variant ||
    draftFilters.rank !== appliedFilters.rank ||
    draftFilters.br !== appliedFilters.br ||
    draftFilters.vehicle !== appliedFilters.vehicle ||
    draftFilters.operator !== appliedFilters.operator ||
    draftFilters.techTree !== appliedFilters.techTree ||
    draftFilters.agm !== appliedFilters.agm;

  const vehicleIconByName = useMemo(() => {
    const matches = agmMissiles.flatMap((agm) =>
      agm.vehicles
        .filter((agmVehicle) => draftFilters.rank === 'All' || agmVehicle.vehicleRank === draftFilters.rank)
        .filter((agmVehicle) => draftFilters.techTree === 'All' || agmVehicle.vehicleTechTree === draftFilters.techTree)
    );

    const icons = new Map<string, string>();
    for (const agmVehicle of matches) {
      if (!agmVehicle.vehicleName || !agmVehicle.vehicleTechTree || icons.has(agmVehicle.vehicleName)) continue;
      icons.set(
        agmVehicle.vehicleName,
        getCountryIcons({
          vehicleTechTree: agmVehicle.vehicleTechTree,
          vehicleOperator: agmVehicle.vehicleOperator,
        })
      );
    }

    return icons;
  }, [draftFilters.rank, draftFilters.techTree]);

  const operatorIconByName = useMemo(() => {
    const matches = agmMissiles.flatMap((agm) =>
      agm.vehicles
        .filter((agmVehicle) => draftFilters.rank === 'All' || agmVehicle.vehicleRank === draftFilters.rank)
        .filter((agmVehicle) => matchesBrFilter(agmVehicle, draftFilters.br))
        .filter((agmVehicle) => draftFilters.vehicle === 'All' || agmVehicle.vehicleName === draftFilters.vehicle)
        .filter((agmVehicle) => draftFilters.techTree === 'All' || agmVehicle.vehicleTechTree === draftFilters.techTree)
        .filter((agmVehicle) => Boolean(agmVehicle.vehicleOperator))
    );

    const icons = new Map<string, string>();
    for (const agmVehicle of matches) {
      if (!agmVehicle.vehicleOperator || !agmVehicle.vehicleTechTree || icons.has(agmVehicle.vehicleOperator)) continue;
      icons.set(
        agmVehicle.vehicleOperator,
        getCountryIcons({
          vehicleTechTree: agmVehicle.vehicleTechTree,
          vehicleOperator: agmVehicle.vehicleOperator,
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
    return getCountryIcons({ vehicleTechTree: option as NonNullable<BaseAgmVehicle['vehicleTechTree']> });
  };

  const getAgmFilterLabel = (option: AgmFilter) => {
    if (option === 'All') return 'All';
    return agmLabels.get(option) ?? option;
  };

  const getVisibleOptions = (options: string[], showAll: boolean) => {
    return showAll ? options : options.slice(0, 3);
  };

  const getAgmBrLabel = (agmVehicle: BaseAgmVehicle, mode: 'AB' | 'RB' | 'SB') => getVehicleBrByMode(agmVehicle, mode) ?? 'N/A';

  const getPopoverVehicles = (agm: AgmDefinition) => {
    let vehicles = [...agm.vehicles];
    if (appliedFilters.rank !== 'All') vehicles = vehicles.filter((agmVehicle) => agmVehicle.vehicleRank === appliedFilters.rank);
    if (appliedFilters.br !== 'All') vehicles = vehicles.filter((agmVehicle) => matchesBrFilter(agmVehicle, appliedFilters.br));
    if (appliedFilters.vehicle !== 'All') vehicles = vehicles.filter((agmVehicle) => agmVehicle.vehicleName === appliedFilters.vehicle);
    if (appliedFilters.operator !== 'All') vehicles = vehicles.filter((agmVehicle) => agmVehicle.vehicleOperator === appliedFilters.operator);
    if (appliedFilters.techTree !== 'All') vehicles = vehicles.filter((agmVehicle) => agmVehicle.vehicleTechTree === appliedFilters.techTree);
    return vehicles;
  };

  const getRowVehicleIconSrc = (agm: AgmDefinition) => {
    const activeVehicle = activeAgmId === agm.id ? vehicle : appliedFilters.vehicle !== 'All' ? getVehicleForRow(agm) : null;
    if (!activeVehicle) return getAgmIconPath(agm);
    return activeVehicle.icon ? getAgmIconPath({ ...activeVehicle, icon: activeVehicle.icon }) : getAgmIconPath(agm);
  };

  const getVehicleForRow = (agm: AgmDefinition): BaseAgmVehicle | null => {
    if (appliedFilters.vehicle === 'All') return null;
    const vehicles = getPopoverVehicles(agm);
    return vehicles[0] ?? null;
  };

  const handleCategorySelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      category: eventKey as CategoryFilter,
      family: 'All',
      variant: 'All',
      vehicle: 'All',
      operator: 'All',
      techTree: 'All',
      agm: 'All',
    }));
  };

  const handleFamilySelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      family: eventKey as FamilyFilter,
      variant: 'All',
      agm: 'All',
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

  const handleAgmSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, agm: eventKey as AgmFilter }));
    setShowAgmPicker(false);
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

  const handleOpenAgmPicker = () => {
    setAgmSearch('');
    setShowAgmPicker(true);
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

  function handleAgmClick(agmId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveAgmPlacement(openUpwards ? 'top-start' : 'bottom-start');
    } else {
      setActiveAgmPlacement('auto');
    }

    if (activeAgmId === agmId) {
      setActiveAgmId(null);
      setVehicle(null);
      return;
    }

    const agm = agmMissiles.find((row) => row.id === agmId);
    if (!agm) {
      setVehicle(null);
      setActiveAgmId(agmId);
      setShow(false);
      setShowBrs(false);
      return;
    }

    const popoverVehicles = getPopoverVehicles(agm);
    setVehicle(popoverVehicles[0] ?? agm.vehicles[0] ?? null);
    setActiveAgmId(agmId);
    setShow(false);
    setShowBrs(false);
  }

  function getAgmDesignation(agmId: string): string | undefined {
    if (!agmId) return undefined;

    const agm = agmMissiles.find((row) => row.id === agmId);
    return agm?.designation;
  }

  const popover = (agm: AgmDefinition) => (
    <Popover id="aam-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src={vehicle?.icon ? getAgmIconPath({ ...vehicle, icon: vehicle.icon }) : getAgmIconPath(agm)} alt="Air-to-Ground Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-5 fw-bold">{agm.designation} air-to-ground missile</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center gap-1">
              <Image src={`https://static.encyclopedia.warthunder.com/icons/${vehicle?.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : vehicle?.vehicleId}_ico.svg`} height={36} />

              {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} height={24} />}
              <span className="font-wt text-wrap text-start">{formatVehicleName(vehicle?.vehicleName, vehicle?.vehicleId)}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? 'is-open' : ''}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-1 overflow-y-auto pt-0">
              <Dropdown.Item className="text-center border-bottom position-sticky top-0 bg-body pt-2" disabled>
                {getPopoverVehicles(agm).length > 1 ? `${getPopoverVehicles(agm).length} vehicles` : `${getPopoverVehicles(agm).length} vehicle`}
              </Dropdown.Item>
              {getPopoverVehicles(agm).map((agmVehicle) => (
                <Dropdown.Item key={agmVehicle.id} className="d-flex align-items-center gap-1" onClick={() => setVehicle(agmVehicle)}>
                  <Image src={`https://static.encyclopedia.warthunder.com/icons/${agmVehicle.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : agmVehicle.vehicleId}_ico.svg`} height={26} />

                  {agmVehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: agmVehicle.vehicleTechTree, vehicleOperator: agmVehicle.vehicleOperator })} width={27} />}
                  <span className="font-wt">{formatVehicleName(agmVehicle.vehicleName, agmVehicle.vehicleId)}</span>
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
                  <span>{vehicle ? getAgmBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle ? getAgmBrLabel(vehicle, 'AB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle ? getAgmBrLabel(vehicle, 'RB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle ? getAgmBrLabel(vehicle, 'SB') : ''}</span>
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
                        <span className="fw-bold fs-6">{vehicle ? getAgmBrLabel(vehicle, 'AB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle ? getAgmBrLabel(vehicle, 'RB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle ? getAgmBrLabel(vehicle, 'SB') : ''}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{' '}
                    <span>{vehicle ? getAgmBrLabel(vehicle, 'RB') : 'N/A'}</span>
                  </div>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>

        <ul className="list-unstyled aams-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{agm.projectileMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Guidance</span>
            {isMobile ? (
              <>
                <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{agm.guidance}</span>
                <Overlay target={target} show={show} placement="top">
                  <Tooltip id="overlay-name">{agm.guidance.split(/([+\s]+)/).map((part, index) =>
                    /[+\s]+/.test(part) ? (
                      <span key={index} className="fw-normal text-muted">{part}</span>
                    ) : (
                      <span key={index} className="fw-bold">{part}</span>
                    )
                  )}</Tooltip>
                </Overlay>
              </>
            ) : (
              <>
                <OverlayTrigger overlay={<Tooltip id={agm.id}>{agm.guidance.split(/([+\s]+)/).map((part, index) =>
                  /[+\s]+/.test(part) ? (
                    <span key={index} className="fw-normal text-muted">{part}</span>
                  ) : (
                    <span key={index} className="fw-bold">{part}</span>
                  )
                )}</Tooltip>}>
                  <span className="text-muted">{agm.guidance}</span>
                </OverlayTrigger>
              </>
            )}
          </li>

          {agm.lockRangeKm && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Lock range</span>
              <span className="text-muted">{agm.lockRangeKm} km</span>
            </li>
          )}

          {agm.launchRangeKm && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Launch range</span>
              <span className="text-muted">{agm.launchRangeKm} km</span>
            </li>
          )}

          {agm.maximumSpeedMach && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum speed</span>
              <span className="text-muted">{agm.maximumSpeedMach} M</span>
            </li>
          )}

          {agm.maximumSpeedMs && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum speed</span>
              <span className="text-muted">{agm.maximumSpeedMs} m/s</span>
            </li>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Missile guidance time</span>
            <span className="text-muted">{agm.missileGuidanceTimeS} s</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{agm.explosiveType}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{agm.explosiveMassKg} kg</span>
          </li>

          {agm.tntEquivalentKg && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">TNT equivalent</span>
              <span className="text-muted">{agm.tntEquivalentKg} kg</span>
            </li>
          )}

          {agm.warhead && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Warhead</span>
              <span className="text-muted">{agm.warhead}</span>
            </li>
          )}
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="p-4">
      {isMobile ? (
        <>
          <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
            <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
            <p className="my-auto">Back to Home</p>
          </Button>

          <h1>Air-to-Ground Missiles</h1>

          <Form.Check
            type="switch"
            id="nato-names-toggle-mobile"
            label="Show NATO reporting names"
            checked={showNatoNames}
            onChange={(event) => setShowNatoNames(event.target.checked)}
            className="mb-3"
          />

          <div className="aams-mobile-filter-bar position-sticky z-1 mb-2">
            <Button variant="primary" onClick={handleShowFiltersMobile} className="aams-mobile-filter-button w-100 d-flex align-items-center justify-content-center column-gap-2">
              <FiSliders className="fs-5" />
              <span className="fw-semibold">Filter {previewFilteredAgmsCount} AGM{previewFilteredAgmsCount !== 1 ? 's' : ''}</span>
            </Button>
          </div>

          <Offcanvas show={showFilters} onHide={handleCloseFiltersMobile} placement="bottom" className="aams-mobile-filters h-100 w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter AGMs</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="d-flex flex-column row-gap-3">
                <Dropdown onSelect={handleCategorySelect}>
                  <Dropdown.Toggle variant={draftFilters.category === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Category: {draftFilters.category}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {categoryOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.category}>{option}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleFamilySelect}>
                  <Dropdown.Toggle variant={draftFilters.family === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Family: {draftFilters.family}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {familyOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.family}>{option}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleVariantSelect}>
                  <Dropdown.Toggle variant={draftFilters.variant === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Variant: {draftFilters.variant}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {variantOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.variant}>{option}</Dropdown.Item>
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
                      <Button key={option.vehicleId} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} onClick={() => handleVehicleSelect(option.name)} className="font-wt">{formatVehicleName(option.name, option.vehicleId)}</Button>
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
                  <span className="fw-semibold">AGM: {getAgmFilterLabel(draftFilters.agm)}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.agm === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleAgmSelect('All')}>All</Button>
                    {quickAgmOptions.map((option) => (
                      <Button key={option} variant={draftFilters.agm === option ? 'primary' : 'outline-secondary'} onClick={() => handleAgmSelect(option)}>{getAgmFilterLabel(option)}</Button>
                    ))}
                    {agmOptions.length > 4 && <Button variant="secondary" onClick={handleOpenAgmPicker}>More</Button>}
                  </div>
                </div>

                {hasDraftChanges && (
                  <Button variant="primary" onClick={handleApplyFilters}>Apply {previewFilteredAgmsCount} Result{previewFilteredAgmsCount !== 1 ? 's' : ''}</Button>
                )}
                <Button variant="outline-primary" onClick={handleResetDraftFilters}>Reset Filters</Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Form.Control
            type="search"
            placeholder="Search AGMs..."
            value={agmListSearch}
            onChange={(event) => setAgmListSearch(event.target.value)}
            className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2"
          />

          {(draftFilters.agm === 'All' && draftFilters.br === 'All' && draftFilters.category === 'All' && draftFilters.family === 'All' && draftFilters.operator === 'All' && draftFilters.rank === 'All' && draftFilters.techTree === 'All' && draftFilters.variant === 'All' && draftFilters.vehicle === 'All') ? (
            <p className="text-muted mb-3">{displayedAgms.length} result{displayedAgms.length > 1 ? 's' : ''}</p>
          ) : (
            <>
              {draftFilters.agm !== 'All' ? (
                <p className="text-muted mb-3">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for: {getAgmDesignation(draftFilters.agm)}</p>
              ) : draftFilters.br !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Battle Rating: {draftFilters.br}</p>
              ) : draftFilters.category !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Category: {draftFilters.category}</p>
              ) : draftFilters.family !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Family: {draftFilters.family}</p>
              ) : draftFilters.operator !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Operator: {draftFilters.operator}</p>
              ) : draftFilters.rank !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Rank: {draftFilters.rank}</p>
              ) : draftFilters.techTree !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for TechTree: {draftFilters.techTree}</p>
              ) : draftFilters.variant !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Variant: {draftFilters.variant}</p>
              ) : draftFilters.vehicle !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Vehicle: {draftFilters.vehicle}</p>
              ) : agmListSearch !== '' ? (
                <p className="text-muted mb-3">{displayedAgms.length} result{displayedAgms.length > 1 ? 's' : ''} for: {agmListSearch}</p>
              ) : null}
            </>
          )}

          <div className="d-flex flex-column row-gap-4 plane-aams-row">
            {displayedAgms.map((agm) => (
              <OverlayTrigger key={agm.id} trigger="click" placement={activeAgmPlacement} show={activeAgmId === agm.id} overlay={popover(agm)} rootClose onToggle={(nextShow) => {
                if (!nextShow && activeAgmId === agm.id) {
                  setActiveAgmId(null);
                  setVehicle(null);
                  setShow(false);
                }
              }}>
                <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleAgmClick(agm.id, event.currentTarget)}>
                  <div className="shell-icon position-relative overflow-hidden">
                    <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                      <Image src={getRowVehicleIconSrc(agm)} alt="Air-to-Ground Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                    </div>
                  </div>

                  <span>{agm.designation}</span>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </>
      ) : (
        <div className="aams-desktop-layout">
          <aside className="aams-desktop-sidebar">
            <div className="aams-sidebar-scroll">
              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Category</h5>
                <div className="aams-sidebar-options">
                  {getVisibleOptions(categoryOptions as string[], showMoreCategoryDesktop).map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.category === option ? 'is-active' : ''}`} onClick={() => handleCategorySelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {(categoryOptions as string[]).length > 4 && (
                  <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreCategoryDesktop((current) => !current)}>
                    {showMoreCategoryDesktop ? 'Less' : 'More'}
                  </button>
                )}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Family</h5>
                <div className="aams-sidebar-options">
                  {getVisibleOptions(familyOptions as string[], showMoreFamilyDesktop).map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.family === option ? 'is-active' : ''}`} onClick={() => handleFamilySelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {(familyOptions as string[]).length > 4 && (
                  <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreFamilyDesktop((current) => !current)}>
                    {showMoreFamilyDesktop ? 'Less' : 'More'}
                  </button>
                )}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Variant</h5>
                <div className="aams-sidebar-options">
                  {quickVariantOptions.map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.variant === option ? 'is-active' : ''}`} onClick={() => handleVariantSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {variantOptions.length > 4 && (
                  <button type="button" className="aams-sidebar-more" onClick={handleOpenVariantPicker}>More</button>
                )}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Rank</h5>
                <div className="aams-sidebar-options">
                  {getVisibleOptions(rankOptions as string[], showMoreRankDesktop).map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.rank === option ? 'is-active' : ''}`} onClick={() => handleRankSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {(rankOptions as string[]).length > 4 && (
                  <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreRankDesktop((current) => !current)}>
                    {showMoreRankDesktop ? 'Less' : 'More'}
                  </button>
                )}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">BR</h5>
                <div className="aams-sidebar-options">
                  <button type="button" className={`aams-sidebar-option ${draftFilters.br === 'All' ? 'is-active' : ''}`} onClick={() => handleBrSelect('All')}>All</button>
                  {quickBrOptions.map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.br === option ? 'is-active' : ''}`} onClick={() => handleBrSelect(option)}>{option}</button>
                  ))}
                </div>
                {brOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenBrPicker}>More</button>}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Vehicle</h5>
                <div className="aams-sidebar-options">
                  <button type="button" className={`aams-sidebar-option ${draftFilters.vehicle === 'All' ? 'is-active' : ''}`} onClick={() => handleVehicleSelect('All')}>All</button>
                  {quickVehicleOptions.map((option) => (
                    <button key={option.vehicleId} type="button" className={`aams-sidebar-option font-wt ${draftFilters.vehicle === option.name ? 'is-active' : ''}`} onClick={() => handleVehicleSelect(option.name)}>{formatVehicleName(option.name, option.vehicleId)}</button>
                  ))}
                </div>
                {vehicleOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenVehiclePicker}>More</button>}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Operator</h5>
                <div className="aams-sidebar-options">
                  <button type="button" className={`aams-sidebar-option ${draftFilters.operator === 'All' ? 'is-active' : ''}`} onClick={() => handleOperatorSelect('All')}>All</button>
                  {quickOperatorOptions.map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.operator === option ? 'is-active' : ''}`} onClick={() => handleOperatorSelect(option)}>{option}</button>
                  ))}
                </div>
                {operatorOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenOperatorPicker}>More</button>}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">Tech Tree</h5>
                <div className="aams-sidebar-options">
                  <button type="button" className={`aams-sidebar-option ${draftFilters.techTree === 'All' ? 'is-active' : ''}`} onClick={() => handleTechTreeSelect('All')}>All</button>
                  {quickTechTreeOptions.map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.techTree === option ? 'is-active' : ''}`} onClick={() => handleTechTreeSelect(option)}>{option}</button>
                  ))}
                </div>
                {techTreeOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenTechTreePicker}>More</button>}
              </div>

              <div className="aams-sidebar-section">
                <h5 className="aams-sidebar-title">AGM</h5>
                <div className="aams-sidebar-options">
                  <button type="button" className={`aams-sidebar-option ${draftFilters.agm === 'All' ? 'is-active' : ''}`} onClick={() => handleAgmSelect('All')}>All</button>
                  {quickAgmOptions.map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.agm === option ? 'is-active' : ''}`} onClick={() => handleAgmSelect(option)}>{getAgmFilterLabel(option)}</button>
                  ))}
                </div>
                {agmOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenAgmPicker}>More</button>}
              </div>
            </div>

            <div className="aams-sidebar-actions">
              <Button variant="outline-primary" onClick={handleResetDraftFilters} className="border-2">Reset</Button>
              {hasDraftChanges && (
                <Button variant="primary" onClick={handleApplyFilters} className="aams-filter-button">
                  <FiSliders className="fs-5 me-1" />
                  <span className="fw-semibold">Filter {previewFilteredAgmsCount} AGM{previewFilteredAgmsCount !== 1 ? 's' : ''}</span>
                </Button>
              )}
            </div>
          </aside>

          <div className="aams-desktop-results">
            <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
              <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
              <p className="my-auto">Back to Home</p>
            </Button>

            <h1>Air-to-Ground Missiles</h1>

            <Form.Check
              type="switch"
              id="nato-names-toggle-desktop"
              label="Show NATO reporting names"
              checked={showNatoNames}
              onChange={(event) => setShowNatoNames(event.target.checked)}
              className="mb-3"
            />

            <Form.Control
              type="search"
              placeholder="Search AGMs..."
              value={agmListSearch}
              onChange={(event) => setAgmListSearch(event.target.value)}
              className="aams-modal-search bg-transparent text-light border-2 shadow-none mb-3"
            />

            {(draftFilters.agm === 'All' && draftFilters.br === 'All' && draftFilters.category === 'All' && draftFilters.family === 'All' && draftFilters.operator === 'All' && draftFilters.rank === 'All' && draftFilters.techTree === 'All' && draftFilters.variant === 'All' && draftFilters.vehicle === 'All') ? (
              <p className="text-muted mb-3">{displayedAgms.length} result{displayedAgms.length > 1 ? 's' : ''}</p>
            ) : (
              <>
                {draftFilters.agm !== 'All' ? (
                  <p className="text-muted mb-3">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for: {getAgmDesignation(draftFilters.agm)}</p>
                ) : draftFilters.br !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Battle Rating: {draftFilters.br}</p>
                ) : draftFilters.category !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Category: {draftFilters.category}</p>
                ) : draftFilters.family !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Family: {draftFilters.family}</p>
                ) : draftFilters.operator !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Operator: {draftFilters.operator}</p>
                ) : draftFilters.rank !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Rank: {draftFilters.rank}</p>
                ) : draftFilters.techTree !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for TechTree: {draftFilters.techTree}</p>
                ) : draftFilters.variant !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Variant: {draftFilters.variant}</p>
                ) : draftFilters.vehicle !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredAgmsCount} result{previewFilteredAgmsCount > 1 ? 's' : ''} for Vehicle: {draftFilters.vehicle}</p>
                ) : agmListSearch !== '' ? (
                  <p className="text-muted mb-3">{displayedAgms.length} result{displayedAgms.length > 1 ? 's' : ''} for: {agmListSearch}</p>
                ) : null}
              </>
            )}

            <div className="d-flex flex-column row-gap-4 plane-aams-row">
              {displayedAgms.map((agm) => (
                <OverlayTrigger key={agm.id} trigger="click" placement={activeAgmPlacement} show={activeAgmId === agm.id} overlay={popover(agm)} rootClose onToggle={(nextShow) => {
                  if (!nextShow && activeAgmId === agm.id) {
                    setActiveAgmId(null);
                    setVehicle(null);
                    setShow(false);
                  }
                }}>
                  <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleAgmClick(agm.id, event.currentTarget)}>
                    <div className="shell-icon position-relative overflow-hidden">
                      <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                        <Image src={getRowVehicleIconSrc(agm)} alt="Air-to-Ground Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                      </div>
                    </div>
                    <span>{agm.designation}</span>
                  </Button>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobile ? (
        <>
          <Offcanvas show={showVehiclePicker} onHide={() => setShowVehiclePicker(false)} placement="start" className="w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Vehicle</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column row-gap-2">
              <Form.Control type="search" placeholder="Search vehicle..." value={vehicleSearch} onChange={(event) => setVehicleSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />

              <span className="text-muted">{searchableVehicleOptions.length} vehicles</span>

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button key={option.vehicleId} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleVehicleSelect(option.name)}>
                    <Image src={`https://static.encyclopedia.warthunder.com/icons/${option?.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : option?.vehicleId}_ico.svg`} height={20} />

                    {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                    <span className="font-wt">{formatVehicleName(option.name, option.vehicleId)}</span>
                  </Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas show={showOperatorPicker} onHide={() => setShowOperatorPicker(false)} placement="start" className="w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Operator</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search operator..." value={operatorSearch} onChange={(event) => setOperatorSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
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
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Tech Tree</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search tech tree..." value={techTreeSearch} onChange={(event) => setTechTreeSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
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

          <Offcanvas show={showVariantPicker} onHide={() => setShowVariantPicker(false)} placement="start" className="w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Variant</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search variant..." value={variantSearch} onChange={(event) => setVariantSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVariantOptions.map((option) => (
                  <Button key={option} variant={draftFilters.variant === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleVariantSelect(option)}>{option}</Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas show={showBrPicker} onHide={() => setShowBrPicker(false)} placement="start" className="w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select BR</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search BR..." value={brSearch} onChange={(event) => setBrSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableBrOptions.map((option) => (
                  <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleBrSelect(option)}>{option}</Button>
                ))}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas show={showAgmPicker} onHide={() => setShowAgmPicker(false)} placement="start" className="w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select AGM</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search AGM..." value={agmSearch} onChange={(event) => setAgmSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableAgmOptions.map((option) => (
                  <Button key={option} variant={draftFilters.agm === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleAgmSelect(option)}>{getAgmFilterLabel(option)}</Button>
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
              <Form.Control type="search" placeholder="Search vehicle..." value={vehicleSearch} onChange={(event) => setVehicleSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />

              <span className="text-muted">{searchableVehicleOptions.length} vehicles</span>

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button key={option.vehicleId} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} className="text-start d-flex align-items-center column-gap-2" onClick={() => handleVehicleSelect(option.name)}>
                    <Image src={`https://static.encyclopedia.warthunder.com/icons/${option?.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : option?.vehicleId}_ico.svg`} height={20} />

                    {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                    <span className="font-wt">{formatVehicleName(option.name, option.vehicleId)}</span>
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
              <Form.Control type="search" placeholder="Search operator..." value={operatorSearch} onChange={(event) => setOperatorSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />
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
              <Form.Control type="search" placeholder="Search tech tree..." value={techTreeSearch} onChange={(event) => setTechTreeSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />
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
              <Form.Control type="search" placeholder="Search variant..." value={variantSearch} onChange={(event) => setVariantSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVariantOptions.map((option) => (
                  <Button key={option} variant={draftFilters.variant === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleVariantSelect(option)}>{option}</Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showBrPicker} onHide={() => setShowBrPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select BR</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search BR..." value={brSearch} onChange={(event) => setBrSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableBrOptions.map((option) => (
                  <Button key={option} variant={draftFilters.br === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleBrSelect(option)}>{option}</Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showAgmPicker} onHide={() => setShowAgmPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select AGM</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search AGM..." value={agmSearch} onChange={(event) => setAgmSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableAgmOptions.map((option) => (
                  <Button key={option} variant={draftFilters.agm === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleAgmSelect(option)}>{getAgmFilterLabel(option)}</Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  )
}
