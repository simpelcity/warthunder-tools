import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useMemo } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { FiSliders } from 'react-icons/fi'
import { armMissiles } from '@/data/ArmMissiles'
import type { ArmDefinition, BaseArmVehicle, Arm, ArmMissileVariant, Rank, BR } from '@/types/ArmMissiles'
import '@/styles/pages/Aams.scss'
import { getArmIconPath } from '@/constants/ArmMissileIcons'
import { getCountryIcons } from '@/constants/CountryIcons'
import { formatVehicleNameWithNato } from '@/constants/NatoReportingNames'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

type CategoryFilter = 'All' | Arm;
type FamilyFilter = 'All' | ArmDefinition['family'];
type VariantFilter = 'All' | ArmMissileVariant;
type RankFilter = 'All' | Rank;
type BRFilter = 'All' | BR;
type VehicleFilter = 'All' | string;
type OperatorFilter = 'All' | string;
type TechTreeFilter = 'All' | string;
type ArmFilter = 'All' | string;

type ArmFilters = {
  category: CategoryFilter;
  family: FamilyFilter;
  variant: VariantFilter;
  rank: RankFilter;
  br: BRFilter;
  vehicle: VehicleFilter;
  operator: OperatorFilter;
  techTree: TechTreeFilter;
  arm: ArmFilter;
};

const DEFAULT_FILTERS: ArmFilters = {
  category: 'All',
  family: 'All',
  variant: 'All',
  rank: 'All',
  br: 'All',
  vehicle: 'All',
  operator: 'All',
  techTree: 'All',
  arm: 'All',
};

export default function Arms() {
  const [activeArmId, setActiveArmId] = useState<string | null>(null);
  const [activeArmPlacement, setActiveArmPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<BaseArmVehicle | null>(null);
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
  const [armSearch, setArmSearch] = useState('');
  const [variantSearch, setVariantSearch] = useState('');
  const [brSearch, setBrSearch] = useState('');
  const [armListSearch, setArmListSearch] = useState('');

  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [showOperatorPicker, setShowOperatorPicker] = useState(false);
  const [showTechTreePicker, setShowTechTreePicker] = useState(false);
  const [showArmPicker, setShowArmPicker] = useState(false);
  const [showVariantPicker, setShowVariantPicker] = useState(false);
  const [showBrPicker, setShowBrPicker] = useState(false);
  const [showMoreCategoryDesktop, setShowMoreCategoryDesktop] = useState(false);
  const [showMoreFamilyDesktop, setShowMoreFamilyDesktop] = useState(false);
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<ArmFilters>(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState<ArmFilters>(DEFAULT_FILTERS);

  const formatVehicleName = (name?: string | null, vehicleId?: string | null) => {
    if (!name) return name;
    return showNatoNames ? formatVehicleNameWithNato(name, vehicleId) : name;
  };

  const getVehicleBrByMode = (armVehicle: BaseArmVehicle, mode: 'AB' | 'RB' | 'SB') => {
    if (mode === 'AB') return armVehicle.vehicleBr?.AB ?? armVehicle.vehicleBr?.RB;
    if (mode === 'SB') return armVehicle.vehicleBr?.SB ?? armVehicle.vehicleBr?.RB;
    return armVehicle.vehicleBr?.RB;
  };

  const matchesBrFilter = (armVehicle: BaseArmVehicle, brFilter: BRFilter) => {
    if (brFilter === 'All') return true;
    return armVehicle.vehicleBr?.RB === brFilter;
  };

  const armMatchesFilters = (arm: ArmDefinition, filters: ArmFilters) => {
    if (filters.category !== 'All' && arm.category !== filters.category) return false;
    if (filters.family !== 'All' && arm.family !== filters.family) return false;
    if (filters.variant !== 'All' && arm.family !== filters.variant) return false;
    if (filters.arm !== 'All' && arm.id !== filters.arm) return false;

    return arm.vehicles.some((armVehicle) => {
      if (filters.rank !== 'All' && armVehicle.vehicleRank !== filters.rank) return false;
      if (!matchesBrFilter(armVehicle, filters.br)) return false;
      if (filters.vehicle !== 'All' && armVehicle.vehicleName !== filters.vehicle) return false;
      if (filters.operator !== 'All' && armVehicle.vehicleOperator !== filters.operator) return false;
      if (filters.techTree !== 'All' && armVehicle.vehicleTechTree !== filters.techTree) return false;
      return true;
    });
  };

  const categoryOptions = useMemo(() => {
    const values = Array.from(new Set(armMissiles.map((arm) => arm.category))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values];
  }, []);

  const familyOptions = useMemo(() => {
    const base = draftFilters.category === 'All' ? armMissiles : armMissiles.filter((arm) => arm.category === draftFilters.category);
    const values = Array.from(new Set(base.map((arm) => arm.family))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values];
  }, [draftFilters.category]);

  const variantOptions = useMemo(() => {
    const base = armMissiles.filter((arm) => {
      if (draftFilters.category !== 'All' && arm.category !== draftFilters.category) return false;
      if (draftFilters.family !== 'All' && arm.family !== draftFilters.family) return false;
      return true;
    });

    const values = Array.from(new Set(base.map((arm) => arm.family))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values];
  }, [draftFilters.category, draftFilters.family]);

  const rankOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        armMissiles.flatMap((arm) => arm.vehicles.map((armVehicle) => armVehicle.vehicleRank).filter(Boolean))
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, []);

  const brOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        armMissiles.flatMap((arm) =>
          arm.vehicles
            .filter((armVehicle) => draftFilters.rank === 'All' || armVehicle.vehicleRank === draftFilters.rank)
            .map((armVehicle) => armVehicle.vehicleBr?.RB)
            .filter((br): br is BR => Boolean(br))
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));

    return ['All', ...values] as BRFilter[];
  }, [draftFilters.rank]);

  const vehicleOptions = useMemo(() => {
    const values = Array.from(
      new Map(
        armMissiles.flatMap((arm) =>
          arm.vehicles
            .filter((armVehicle) => draftFilters.rank === 'All' || armVehicle.vehicleRank === draftFilters.rank)
            .filter((armVehicle) => draftFilters.techTree === 'All' || armVehicle.vehicleTechTree === draftFilters.techTree)
            .map((armVehicle) => ({
              name: armVehicle?.vehicleName,
              vehicleId: armVehicle?.vehicleId
            }))
        )
        .filter((armVehicle) => armVehicle.name)
        .map((armVehicle) => [armVehicle.name, armVehicle])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));

    return [{ name: 'All', vehicleId: 'All' }, ...values];
  }, [draftFilters.rank, draftFilters.techTree]);

  const techTreeOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        armMissiles.flatMap((arm) =>
          arm.vehicles
            .filter((armVehicle) => draftFilters.rank === 'All' || armVehicle.vehicleRank === draftFilters.rank)
            .filter((armVehicle) => matchesBrFilter(armVehicle, draftFilters.br))
            .filter((armVehicle) => draftFilters.vehicle === 'All' || armVehicle.vehicleName === draftFilters.vehicle)
            .filter((armVehicle) => draftFilters.operator === 'All' || armVehicle.vehicleOperator === draftFilters.operator)
            .map((armVehicle) => armVehicle.vehicleTechTree)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator]);

  const operatorOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        armMissiles.flatMap((arm) =>
          arm.vehicles
            .filter((armVehicle) => draftFilters.rank === 'All' || armVehicle.vehicleRank === draftFilters.rank)
            .filter((armVehicle) => matchesBrFilter(armVehicle, draftFilters.br))
            .filter((armVehicle) => draftFilters.vehicle === 'All' || armVehicle.vehicleName === draftFilters.vehicle)
            .filter((armVehicle) => draftFilters.techTree === 'All' || armVehicle.vehicleTechTree === draftFilters.techTree)
            .map((armVehicle) => armVehicle.vehicleOperator)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  const armLabels = useMemo(() => new Map(armMissiles.map((arm) => [arm.id, arm.designation])), []);

  const armOptions = useMemo(() => {
    const baseFilters: ArmFilters = { ...draftFilters, arm: 'All' };
    const values = armMissiles
      .filter((arm) => armMatchesFilters(arm, baseFilters))
      .map((arm) => arm.id)
      .sort((a, b) => (armLabels.get(a) ?? a).localeCompare(armLabels.get(b) ?? b));

    return ['All', ...values];
  }, [draftFilters, armLabels]);

  const quickVehicleOptions = useMemo(() => vehicleOptions.filter((option) => option.name !== 'All').slice(0, 3), [vehicleOptions]);
  const quickOperatorOptions = useMemo(() => operatorOptions.filter((option) => option !== 'All').slice(0, 3), [operatorOptions]);
  const quickTechTreeOptions = useMemo(() => techTreeOptions.filter((option) => option !== 'All').slice(0, 3), [techTreeOptions]);
  const quickVariantOptions = useMemo(() => variantOptions.filter((option) => option !== 'All').slice(0, 3), [variantOptions]);
  const quickBrOptions = useMemo(() => brOptions.filter((option) => option !== 'All').slice(0, 3), [brOptions]);
  const quickArmOptions = useMemo(() => armOptions.filter((option) => option !== 'All').slice(0, 3), [armOptions]);

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

  const searchableArmOptions = useMemo(() => {
    const query = armSearch.trim().toLowerCase();
    return armOptions.filter((option) => {
      if (option === 'All') return false;
      const label = (armLabels.get(option) ?? option).toLowerCase();
      return !query || label.includes(query);
    });
  }, [armOptions, armSearch, armLabels]);

  const filteredArms = useMemo(() => armMissiles.filter((arm) => armMatchesFilters(arm, appliedFilters)), [appliedFilters]);

  const displayedArms = useMemo(() => {
    const query = armListSearch.trim().toLowerCase();
    if (!query) return filteredArms;

    return filteredArms.filter((arm) => {
      const designation = arm.designation.toLowerCase();
      const id = arm.id.toLowerCase();
      return designation.includes(query) || id.includes(query);
    });
  }, [filteredArms, armListSearch]);

  const previewFilteredArmsCount = useMemo(
    () => armMissiles.filter((arm) => armMatchesFilters(arm, draftFilters)).length,
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
    draftFilters.arm !== appliedFilters.arm;

  const vehicleIconByName = useMemo(() => {
    const matches = armMissiles.flatMap((arm) =>
      arm.vehicles
        .filter((armVehicle) => draftFilters.rank === 'All' || armVehicle.vehicleRank === draftFilters.rank)
        .filter((armVehicle) => draftFilters.techTree === 'All' || armVehicle.vehicleTechTree === draftFilters.techTree)
    );

    const icons = new Map<string, string>();
    for (const armVehicle of matches) {
      if (!armVehicle.vehicleName || !armVehicle.vehicleTechTree || icons.has(armVehicle.vehicleName)) continue;
      icons.set(
        armVehicle.vehicleName,
        getCountryIcons({
          vehicleTechTree: armVehicle.vehicleTechTree,
          vehicleOperator: armVehicle.vehicleOperator,
        })
      );
    }

    return icons;
  }, [draftFilters.rank, draftFilters.techTree]);

  const operatorIconByName = useMemo(() => {
    const matches = armMissiles.flatMap((arm) =>
      arm.vehicles
        .filter((armVehicle) => draftFilters.rank === 'All' || armVehicle.vehicleRank === draftFilters.rank)
        .filter((armVehicle) => matchesBrFilter(armVehicle, draftFilters.br))
        .filter((armVehicle) => draftFilters.vehicle === 'All' || armVehicle.vehicleName === draftFilters.vehicle)
        .filter((armVehicle) => draftFilters.techTree === 'All' || armVehicle.vehicleTechTree === draftFilters.techTree)
        .filter((armVehicle) => Boolean(armVehicle.vehicleOperator))
    );

    const icons = new Map<string, string>();
    for (const armVehicle of matches) {
      if (!armVehicle.vehicleOperator || !armVehicle.vehicleTechTree || icons.has(armVehicle.vehicleOperator)) continue;
      icons.set(
        armVehicle.vehicleOperator,
        getCountryIcons({
          vehicleTechTree: armVehicle.vehicleTechTree,
          vehicleOperator: armVehicle.vehicleOperator,
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
    return getCountryIcons({ vehicleTechTree: option as NonNullable<BaseArmVehicle['vehicleTechTree']> });
  };

  const getArmFilterLabel = (option: ArmFilter) => {
    if (option === 'All') return 'All';
    return armLabels.get(option) ?? option;
  };

  const getVisibleOptions = (options: string[], showAll: boolean) => {
    return showAll ? options : options.slice(0, 3);
  };

  const getArmBrLabel = (armVehicle: BaseArmVehicle, mode: 'AB' | 'RB' | 'SB') => getVehicleBrByMode(armVehicle, mode) ?? 'N/A';

  const getPopoverVehicles = (arm: ArmDefinition) => {
    let vehicles = [...arm.vehicles];
    if (appliedFilters.rank !== 'All') vehicles = vehicles.filter((armVehicle) => armVehicle.vehicleRank === appliedFilters.rank);
    if (appliedFilters.br !== 'All') vehicles = vehicles.filter((armVehicle) => matchesBrFilter(armVehicle, appliedFilters.br));
    if (appliedFilters.vehicle !== 'All') vehicles = vehicles.filter((armVehicle) => armVehicle.vehicleName === appliedFilters.vehicle);
    if (appliedFilters.operator !== 'All') vehicles = vehicles.filter((armVehicle) => armVehicle.vehicleOperator === appliedFilters.operator);
    if (appliedFilters.techTree !== 'All') vehicles = vehicles.filter((armVehicle) => armVehicle.vehicleTechTree === appliedFilters.techTree);
    return vehicles;
  };

  const getRowVehicleIconSrc = (arm: ArmDefinition) => {
    const activeVehicle = activeArmId === arm.id ? vehicle : appliedFilters.vehicle !== 'All' ? getVehicleForRow(arm) : null;
    if (!activeVehicle) return getArmIconPath(arm);
    return activeVehicle.icon ? getArmIconPath({ ...activeVehicle, icon: activeVehicle.icon }) : getArmIconPath(arm);
  };

  const getVehicleForRow = (arm: ArmDefinition): BaseArmVehicle | null => {
    if (appliedFilters.vehicle === 'All') return null;
    const vehicles = getPopoverVehicles(arm);
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
      arm: 'All',
    }));
  };

  const handleFamilySelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      family: eventKey as FamilyFilter,
      variant: 'All',
      arm: 'All',
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

  const handleArmSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, arm: eventKey as ArmFilter }));
    setShowArmPicker(false);
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

  const handleOpenArmPicker = () => {
    setArmSearch('');
    setShowArmPicker(true);
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

  function handleArmClick(armId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveArmPlacement(openUpwards ? 'top-start' : 'bottom-start');
    } else {
      setActiveArmPlacement('auto');
    }

    if (activeArmId === armId) {
      setActiveArmId(null);
      setVehicle(null);
      return;
    }

    const arm = armMissiles.find((row) => row.id === armId);
    if (!arm) {
      setVehicle(null);
      setActiveArmId(armId);
      setShow(false);
      setShowBrs(false);
      return;
    }

    const popoverVehicles = getPopoverVehicles(arm);
    setVehicle(popoverVehicles[0] ?? arm.vehicles[0] ?? null);
    setActiveArmId(armId);
    setShow(false);
    setShowBrs(false);
  }

  function getArmDesignation(armId: string): string | undefined {
    if (!armId) return undefined;

    const arm = armMissiles.find((row) => row.id === armId);
    return arm?.designation;
  }

  const popover = (arm: ArmDefinition) => (
    <Popover id="aam-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src={vehicle?.icon ? getArmIconPath({ ...vehicle, icon: vehicle.icon }) : getArmIconPath(arm)} alt="Anti-radiation Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-5 fw-bold">{arm.designation} anti-radiation missile</span>
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
                {getPopoverVehicles(arm).length > 1 ? `${getPopoverVehicles(arm).length} vehicles` : `${getPopoverVehicles(arm).length} vehicle`}
              </Dropdown.Item>
              {getPopoverVehicles(arm).map((armVehicle) => (
                <Dropdown.Item key={armVehicle.id} className="d-flex align-items-center gap-1" onClick={() => setVehicle(armVehicle)}>
                  <Image src={`https://static.encyclopedia.warthunder.com/icons/${armVehicle.vehicleId === 'md_460_yt_cup_2019' ? 'md_460' : armVehicle.vehicleId}_ico.svg`} height={26} />

                  {armVehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: armVehicle.vehicleTechTree, vehicleOperator: armVehicle.vehicleOperator })} width={27} />}
                  <span className="font-wt">{formatVehicleName(armVehicle.vehicleName, armVehicle.vehicleId)}</span>
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
                  <span>{vehicle ? getArmBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle ? getArmBrLabel(vehicle, 'AB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle ? getArmBrLabel(vehicle, 'RB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle ? getArmBrLabel(vehicle, 'SB') : ''}</span>
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
                        <span className="fw-bold fs-6">{vehicle ? getArmBrLabel(vehicle, 'AB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle ? getArmBrLabel(vehicle, 'RB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle ? getArmBrLabel(vehicle, 'SB') : ''}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{' '}
                    <span>{vehicle ? getArmBrLabel(vehicle, 'RB') : 'N/A'}</span>
                  </div>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>

        <ul className="list-unstyled aams-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{arm.projectileMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Guidance</span>
            {isMobile ? (
              <>
                <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{arm.guidance}</span>
                <Overlay target={target} show={show} placement="top">
                  <Tooltip id="overlay-name">{arm.guidance.split(/([+\s]+)/).map((part, index) =>
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
                <OverlayTrigger overlay={<Tooltip id={arm.id}>{arm.guidance.split(/([+\s]+)/).map((part, index) =>
                  /[+\s]+/.test(part) ? (
                    <span key={index} className="fw-normal text-muted">{part}</span>
                  ) : (
                    <span key={index} className="fw-bold">{part}</span>
                  )
                )}</Tooltip>}>
                  <span className="text-muted">{arm.guidance}</span>
                </OverlayTrigger>
              </>
            )}
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Band</span>
            <span className="text-muted">{arm.band.join(' / ')}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Lock range</span>
            <span className="text-muted">{arm.lockRangeKm} km</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Launch range</span>
            <span className="text-muted">{arm.launchRangeKm} km</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Maximum speed</span>
            <span className="text-muted">{arm.maximumSpeedMach} M</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Missile guidance time</span>
            <span className="text-muted">{arm.missileGuidanceTimeS} s</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{arm.explosiveType}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{arm.explosiveMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">TNT equivalent</span>
            <span className="text-muted">{arm.tntEquivalentKg} kg</span>
          </li>

          {arm.warhead && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Warhead</span>
              <span className="text-muted">{arm.warhead}</span>
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

          <h1>Anti-Radiation Missiles</h1>

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
              <span className="fw-semibold">Filter {previewFilteredArmsCount} ARM{previewFilteredArmsCount !== 1 ? 's' : ''}</span>
            </Button>
          </div>

          <Offcanvas show={showFilters} onHide={handleCloseFiltersMobile} placement="bottom" className="aams-mobile-filters h-100 w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter ARMs</Offcanvas.Title>
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
                  <span className="fw-semibold">ARM: {getArmFilterLabel(draftFilters.arm)}</span>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant={draftFilters.arm === 'All' ? 'primary' : 'outline-secondary'} onClick={() => handleArmSelect('All')}>All</Button>
                    {quickArmOptions.map((option) => (
                      <Button key={option} variant={draftFilters.arm === option ? 'primary' : 'outline-secondary'} onClick={() => handleArmSelect(option)}>{getArmFilterLabel(option)}</Button>
                    ))}
                    {armOptions.length > 4 && <Button variant="secondary" onClick={handleOpenArmPicker}>More</Button>}
                  </div>
                </div>

                {hasDraftChanges && (
                  <Button variant="primary" onClick={handleApplyFilters}>Apply {previewFilteredArmsCount} Result{previewFilteredArmsCount !== 1 ? 's' : ''}</Button>
                )}
                <Button variant="outline-primary" onClick={handleResetDraftFilters}>Reset Filters</Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Form.Control
            type="search"
            placeholder="Search ARMs..."
            value={armListSearch}
            onChange={(event) => setArmListSearch(event.target.value)}
            className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2"
          />

          {(draftFilters.arm === 'All' && draftFilters.br === 'All' && draftFilters.category === 'All' && draftFilters.family === 'All' && draftFilters.operator === 'All' && draftFilters.rank === 'All' && draftFilters.techTree === 'All' && draftFilters.variant === 'All' && draftFilters.vehicle === 'All') ? (
            <p className="text-muted mb-3">{displayedArms.length} result{displayedArms.length > 1 ? 's' : ''}</p>
          ) : (
            <>
              {draftFilters.arm !== 'All' ? (
                <p className="text-muted mb-3">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for: {getArmDesignation(draftFilters.arm)}</p>
              ) : draftFilters.br !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Battle Rating: {draftFilters.br}</p>
              ) : draftFilters.category !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Category: {draftFilters.category}</p>
              ) : draftFilters.family !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Family: {draftFilters.family}</p>
              ) : draftFilters.operator !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Operator: {draftFilters.operator}</p>
              ) : draftFilters.rank !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Rank: {draftFilters.rank}</p>
              ) : draftFilters.techTree !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for TechTree: {draftFilters.techTree}</p>
              ) : draftFilters.variant !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Variant: {draftFilters.variant}</p>
              ) : draftFilters.vehicle !== 'All' ? (
                <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Vehicle: {draftFilters.vehicle}</p>
              ) : armListSearch !== '' ? (
                <p className="text-muted mb-3">{displayedArms.length} result{displayedArms.length > 1 ? 's' : ''} for: {armListSearch}</p>
              ) : null}
            </>
          )}

          <div className="d-flex flex-column row-gap-4 plane-aams-row">
            {displayedArms.map((arm) => (
              <OverlayTrigger key={arm.id} trigger="click" placement={activeArmPlacement} show={activeArmId === arm.id} overlay={popover(arm)} rootClose onToggle={(nextShow) => {
                if (!nextShow && activeArmId === arm.id) {
                  setActiveArmId(null);
                  setVehicle(null);
                  setShow(false);
                }
              }}>
                <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleArmClick(arm.id, event.currentTarget)}>
                  <div className="shell-icon position-relative overflow-hidden">
                    <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                      <Image src={getRowVehicleIconSrc(arm)} alt="Anti-radiation Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                    </div>
                  </div>

                  <span>{arm.designation}</span>
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
                <h5 className="aams-sidebar-title">ARM</h5>
                <div className="aams-sidebar-options">
                  <button type="button" className={`aams-sidebar-option ${draftFilters.arm === 'All' ? 'is-active' : ''}`} onClick={() => handleArmSelect('All')}>All</button>
                  {quickArmOptions.map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.arm === option ? 'is-active' : ''}`} onClick={() => handleArmSelect(option)}>{getArmFilterLabel(option)}</button>
                  ))}
                </div>
                {armOptions.length > 4 && <button type="button" className="aams-sidebar-more" onClick={handleOpenArmPicker}>More</button>}
              </div>
            </div>

            <div className="aams-sidebar-actions">
              <Button variant="outline-primary" onClick={handleResetDraftFilters} className="border-2">Reset</Button>
              {hasDraftChanges && (
                <Button variant="primary" onClick={handleApplyFilters} className="aams-filter-button">
                  <FiSliders className="fs-5 me-1" />
                  <span className="fw-semibold">Filter {previewFilteredArmsCount} ARM{previewFilteredArmsCount !== 1 ? 's' : ''}</span>
                </Button>
              )}
            </div>
          </aside>

          <div className="aams-desktop-results">
            <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
              <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
              <p className="my-auto">Back to Home</p>
            </Button>

            <h1>Anti-Radiation Missiles</h1>

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
              placeholder="Search ARMs..."
              value={armListSearch}
              onChange={(event) => setArmListSearch(event.target.value)}
              className="aams-modal-search bg-transparent text-light border-2 shadow-none mb-3"
            />

            {(draftFilters.arm === 'All' && draftFilters.br === 'All' && draftFilters.category === 'All' && draftFilters.family === 'All' && draftFilters.operator === 'All' && draftFilters.rank === 'All' && draftFilters.techTree === 'All' && draftFilters.variant === 'All' && draftFilters.vehicle === 'All') ? (
              <p className="text-muted mb-3">{displayedArms.length} result{displayedArms.length > 1 ? 's' : ''}</p>
            ) : (
              <>
                {draftFilters.arm !== 'All' ? (
                  <p className="text-muted mb-3">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for: {getArmDesignation(draftFilters.arm)}</p>
                ) : draftFilters.br !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Battle Rating: {draftFilters.br}</p>
                ) : draftFilters.category !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Category: {draftFilters.category}</p>
                ) : draftFilters.family !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Family: {draftFilters.family}</p>
                ) : draftFilters.operator !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Operator: {draftFilters.operator}</p>
                ) : draftFilters.rank !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Rank: {draftFilters.rank}</p>
                ) : draftFilters.techTree !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for TechTree: {draftFilters.techTree}</p>
                ) : draftFilters.variant !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Variant: {draftFilters.variant}</p>
                ) : draftFilters.vehicle !== 'All' ? (
                  <p className="text-muted mb-3 font-wt">{previewFilteredArmsCount} result{previewFilteredArmsCount > 1 ? 's' : ''} for Vehicle: {draftFilters.vehicle}</p>
                ) : armListSearch !== '' ? (
                  <p className="text-muted mb-3">{displayedArms.length} result{displayedArms.length > 1 ? 's' : ''} for: {armListSearch}</p>
                ) : null}
              </>
            )}


            <div className="d-flex flex-column row-gap-4 plane-aams-row">
              {displayedArms.map((arm) => (
                <OverlayTrigger key={arm.id} trigger="click" placement={activeArmPlacement} show={activeArmId === arm.id} overlay={popover(arm)} rootClose onToggle={(nextShow) => {
                  if (!nextShow && activeArmId === arm.id) {
                    setActiveArmId(null);
                    setVehicle(null);
                    setShow(false);
                  }
                }}>
                  <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleArmClick(arm.id, event.currentTarget)}>
                    <div className="shell-icon position-relative overflow-hidden">
                      <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                        <Image src={getRowVehicleIconSrc(arm)} alt="Anti-radiation Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                      </div>
                    </div>
                    <span>{arm.designation}</span>
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

          <Offcanvas show={showArmPicker} onHide={() => setShowArmPicker(false)} placement="start" className="w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select ARM</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search ARM..." value={armSearch} onChange={(event) => setArmSearch(event.target.value)} className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableArmOptions.map((option) => (
                  <Button key={option} variant={draftFilters.arm === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleArmSelect(option)}>{getArmFilterLabel(option)}</Button>
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

          <Modal show={showArmPicker} onHide={() => setShowArmPicker(false)} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>Select ARM</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control type="search" placeholder="Search ARM..." value={armSearch} onChange={(event) => setArmSearch(event.target.value)} className="aams-modal-search bg-transparent text-light border-2 shadow-none" />
              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableArmOptions.map((option) => (
                  <Button key={option} variant={draftFilters.arm === option ? 'primary' : 'outline-secondary'} className="text-start" onClick={() => handleArmSelect(option)}>{getArmFilterLabel(option)}</Button>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  )
}