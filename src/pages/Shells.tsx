import { useState, useEffect, useRef, useMemo } from 'react'
import { tankShells } from "@/data/TankShells"
import { getTankShellVariantName, getShellGuidanceName } from "@/constants/TankShellVariantNames"
import { getTankShellIconPath, getTankShellDecorIcons } from "@/constants/TankShellIcons"
import { getCountryIcons } from '@/constants/CountryIcons'
import type { TankShellDefinition, TankShellPerformance, Shell, KineticShell, ChemicalShell, TankShellVariant, Rank, BR } from '@/types/TankShells'
import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { FaArrowLeftLong, FaAngleDown, FaCircleCheck } from 'react-icons/fa6'
import { FiSliders } from "react-icons/fi";
import '@/styles/pages/Shells.scss'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

type CategoryFilter = "All" | Shell;
type FamilyFilter = "All" | KineticShell | ChemicalShell;
type VariantFilter = "All" | TankShellVariant;
type RankFilter = "All" | Rank;
type BRFilter = "All" | BR;
type VehicleFilter = "All" | string;
type OperatorFilter = "All" | string;
type TechTreeFilter = "All" | string;
type ShellFilter = "All" | string;

type ShellFilters = {
  category: CategoryFilter;
  family: FamilyFilter;
  variant: VariantFilter;
  rank: RankFilter;
  br: BRFilter;
  vehicle: VehicleFilter;
  operator: OperatorFilter;
  techTree: TechTreeFilter;
  shell: ShellFilter;
};

const DEFAULT_FILTERS: ShellFilters = {
  category: "All",
  family: "All",
  variant: "All",
  rank: "All",
  br: "All",
  vehicle: "All",
  operator: "All",
  techTree: "All",
  shell: "All",
};

export default function Shells() {
  const [activeShellId, setActiveShellId] = useState<string | null>(null);
  const [activeShellPlacement, setActiveShellPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<TankShellPerformance | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [showBrs, setShowBrs] = useState(false);
  const targetBrs = useRef(null);
  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [showOperatorPicker, setShowOperatorPicker] = useState(false);
  const [operatorSearch, setOperatorSearch] = useState("");
  const [showTechTreePicker, setShowTechTreePicker] = useState(false);
  const [techTreeSearch, setTechTreeSearch] = useState("");
  const [showShellPicker, setShowShellPicker] = useState(false);
  const [shellSearch, setShellSearch] = useState("");
  const [shellListSearch, setShellListSearch] = useState("");
  const [showFamilyPicker, setShowFamilyPicker] = useState(false);
  const [showVariantPicker, setShowVariantPicker] = useState(false);
  const [desktopFamilySearch, setDesktopFamilySearch] = useState("");
  const [desktopVariantSearch, setDesktopVariantSearch] = useState("");
  const [showMoreFamilyDesktop, setShowMoreFamilyDesktop] = useState(false);
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false);
  const [showBrPicker, setShowBrPicker] = useState(false);
  const [brSearch, setBrSearch] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<ShellFilters>(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState<ShellFilters>(DEFAULT_FILTERS);

  const getVehicleBrLabel = (br: TankShellPerformance["vehicleBr"], mode: keyof TankShellPerformance["vehicleBr"]) => {
    return br[mode] ?? br.RB;
  };

  const categoryOptions = useMemo(
    () => ["All", ...Array.from(new Set(tankShells.map((shell) => shell.category)))],
    []
  );

  const familyOptions = useMemo(() => {
    const base =
      draftFilters.category === "All"
        ? tankShells
        : tankShells.filter((shell) => shell.category === draftFilters.category);

    return ["All", ...Array.from(new Set(base.map((shell) => shell.family)))];
  }, [draftFilters.category]);

  const variantOptions = useMemo(() => {
    const base = tankShells.filter((shell) => {
      if (draftFilters.category !== "All" && shell.category !== draftFilters.category) return false;
      if (draftFilters.family !== "All" && shell.family !== draftFilters.family) return false;
      return true;
    });

    return ["All", ...Array.from(new Set(base.map((shell) => shell.variant)))];
  }, [draftFilters.category, draftFilters.family]);

  const rankOptions = useMemo(() => {
    const ranks = Array.from(
      new Set(tankShells.flatMap((shell) => shell.performances.map((perf) => perf.vehicleRank)))
    ).filter((rank): rank is Rank => Boolean(rank));
    return ["All", ...ranks];
  }, []);

  const brOptions = useMemo(() => {
    const brs = Array.from(
      new Set(tankShells.flatMap((shell) => shell.performances.map((perf) => perf.vehicleBr.RB)))
    ).filter((br): br is BR => Boolean(br));
    return ["All", ...brs];
  }, []);

  const vehicleOptions = useMemo(() => {
    const names = Array.from(
      new Set(
        tankShells.flatMap((shell) =>
          shell.performances
            .filter((perf) => draftFilters.rank === "All" || perf.vehicleRank === draftFilters.rank)
            .filter((perf) => draftFilters.techTree === "All" || perf.vehicleTechTree === draftFilters.techTree)
            .map((perf) => perf.vehicleName)
        )
      )
    ).sort((a, b) => a.localeCompare(b));

    return ["All", ...names];
  }, [draftFilters.rank, draftFilters.techTree]);

  const vehicleIconByName = useMemo(() => {
    const matchingPerformances = tankShells.flatMap((shell) =>
      shell.performances
        .filter((perf) => draftFilters.rank === "All" || perf.vehicleRank === draftFilters.rank)
        .filter((perf) => draftFilters.techTree === "All" || perf.vehicleTechTree === draftFilters.techTree)
    );

    const icons = new Map<string, string>();

    for (const perf of matchingPerformances) {
      if (!icons.has(perf.vehicleName)) {
        icons.set(
          perf.vehicleName,
          getCountryIcons({
            vehicleTechTree: perf.vehicleTechTree,
            vehicleOperator: perf.vehicleOperator,
          })
        );
      }
    }

    return icons;
  }, [draftFilters.rank, draftFilters.techTree, vehicleOptions]);

  const getVehicleFilterIcon = (option: VehicleFilter) => {
    if (option === "All") return null;
    return vehicleIconByName.get(option) ?? null;
  };

  const operatorIconByName = useMemo(() => {
    const matchingPerformances = tankShells.flatMap((shell) =>
      shell.performances
        .filter((perf) => draftFilters.rank === "All" || perf.vehicleRank === draftFilters.rank)
        .filter((perf) => draftFilters.br === "All" || perf.vehicleBr.RB === draftFilters.br)
        .filter((perf) => draftFilters.vehicle === "All" || perf.vehicleName === draftFilters.vehicle)
        .filter((perf) => draftFilters.techTree === "All" || perf.vehicleTechTree === draftFilters.techTree)
        .filter((perf) => Boolean(perf.vehicleOperator))
    );

    const icons = new Map<string, string>();

    for (const perf of matchingPerformances) {
      if (!perf.vehicleOperator || icons.has(perf.vehicleOperator)) continue;
      icons.set(
        perf.vehicleOperator,
        getCountryIcons({
          vehicleTechTree: perf.vehicleTechTree,
          vehicleOperator: perf.vehicleOperator,
        })
      );
    }

    return icons;
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  const getOperatorFilterIcon = (option: OperatorFilter) => {
    if (option === "All") return null;
    return operatorIconByName.get(option) ?? null;
  };

  const getTechTreeFilterIcon = (option: TechTreeFilter) => {
    if (option === "All") return null;
    return getCountryIcons({ vehicleTechTree: option as TankShellPerformance["vehicleTechTree"] });
  };

  const techTreeOptions = useMemo<string[]>(() => {
    const values = tankShells.flatMap((shell) =>
      shell.performances
        .filter((perf) => draftFilters.rank === "All" || perf.vehicleRank === draftFilters.rank)
        .filter((perf) => draftFilters.br === "All" || perf.vehicleBr.RB === draftFilters.br)
        .filter((perf) => draftFilters.vehicle === "All" || perf.vehicleName === draftFilters.vehicle)
        .filter((perf) => draftFilters.operator === "All" || perf.vehicleOperator === draftFilters.operator)
        .map((perf) => perf.vehicleTechTree)
        .filter(Boolean)
        .map((value) => String(value))
    );

    const trees = Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

    return ["All", ...trees];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator]);

  const operatorOptions = useMemo<string[]>(() => {
    const values = tankShells.flatMap((shell) =>
      shell.performances
        .filter((perf) => draftFilters.rank === "All" || perf.vehicleRank === draftFilters.rank)
        .filter((perf) => draftFilters.br === "All" || perf.vehicleBr.RB === draftFilters.br)
        .filter((perf) => draftFilters.vehicle === "All" || perf.vehicleName === draftFilters.vehicle)
        .filter((perf) => draftFilters.techTree === "All" || perf.vehicleTechTree === draftFilters.techTree)
        .flatMap((perf) => [perf.vehicleOperator])
        .filter(Boolean)
        .map((value) => String(value))
    );

    const operators = Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

    return ["All", ...operators];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  const quickVehicleOptions = useMemo(
    () => vehicleOptions.filter((option) => option !== "All").slice(0, 3),
    [vehicleOptions]
  );

  const quickOperatorOptions = useMemo(
    () => operatorOptions.filter((option) => option !== "All").slice(0, 3),
    [operatorOptions]
  );

  const quickTechTreeOptions = useMemo(
    () => techTreeOptions.filter((option) => option !== "All").slice(0, 3),
    [techTreeOptions]
  );

  const quickVariantOptions = useMemo(
    () => variantOptions.filter((option) => option !== "All").slice(0, 3),
    [variantOptions]
  );

  const quickBrOptions = useMemo(
    () => brOptions.filter((option) => option !== "All").slice(0, 3),
    [brOptions]
  );

  const searchableVehicleOptions = useMemo(() => {
    const query = vehicleSearch.trim().toLowerCase();

    return vehicleOptions.filter((option) => {
      if (option === "All") return false;
      if (!query) return true;
      return option.toLowerCase().includes(query);
    });
  }, [vehicleOptions, vehicleSearch]);

  const searchableOperatorOptions = useMemo(() => {
    const query = operatorSearch.trim().toLowerCase();

    return operatorOptions.filter((option) => {
      if (option === "All") return false;
      if (!query) return true;
      return option.toLowerCase().includes(query);
    });
  }, [operatorOptions, operatorSearch]);

  const searchableTechTreeOptions = useMemo(() => {
    const query = techTreeSearch.trim().toLowerCase();

    return techTreeOptions.filter((option) => {
      if (option === "All") return false;
      if (!query) return true;
      return option.toLowerCase().includes(query);
    });
  }, [techTreeOptions, techTreeSearch]);

  const searchableBrOptions = useMemo(() => {
    const query = brSearch.trim().toLowerCase();

    return brOptions.filter((option) => {
      if (option === "All") return false;
      if (!query) return true;
      return option.toLowerCase().includes(query);
    });
  }, [brOptions, brSearch]);

  const shellLabels = useMemo(
    () =>
      new Map(
        tankShells.map((shell) => [shell.id, shell.designation])
      ),
    []
  );

  const shellOptions = useMemo(
    () => ["All", ...tankShells.map((shell) => shell.id)],
    []
  );

  const quickShellOptions = useMemo(
    () => shellOptions.filter((option) => option !== "All").slice(0, 3),
    [shellOptions]
  );

  const searchableShellOptions = useMemo(() => {
    const query = shellSearch.trim().toLowerCase();

    return shellOptions.filter((option) => {
      if (option === "All") return false;

      const designation = (shellLabels.get(option) ?? option).toLowerCase();
      if (!query) return true;

      return designation.includes(query);
    });
  }, [shellOptions, shellLabels, shellSearch]);

  const getShellFilterLabel = (option: ShellFilter) => {
    if (option === "All") return "All";
    return shellLabels.get(option) ?? option;
  };

  const filterOptionsWithAll = (options: string[], query: string) => {
    if (!query.trim()) return options;

    const search = query.trim().toLowerCase();
    const nonAll = options.filter((option) => option !== "All");
    const filtered = nonAll.filter((option) => option.toLowerCase().includes(search));

    return options.includes("All") ? ["All", ...filtered] : filtered;
  };

  const getVisibleOptions = (options: string[], showAll: boolean) => {
    return showAll ? options : options.slice(0, 3);
  };

  const desktopFamilyOptions = useMemo(
    () => filterOptionsWithAll(familyOptions as string[], desktopFamilySearch),
    [familyOptions, desktopFamilySearch]
  );

  const desktopVariantOptions = useMemo(
    () => filterOptionsWithAll(variantOptions as string[], desktopVariantSearch),
    [variantOptions, desktopVariantSearch]
  );

  const shellMatchesFilters = (shell: TankShellDefinition, filters: ShellFilters) => {
    if (filters.category !== "All" && shell.category !== filters.category) return false;
    if (filters.family !== "All" && shell.family !== filters.family) return false;
    if (filters.variant !== "All" && shell.variant !== filters.variant) return false;
    if (filters.shell !== "All" && shell.id !== filters.shell) return false;

    return shell.performances.some((perf) => {
      if (filters.rank !== "All" && perf.vehicleRank !== filters.rank) return false;
      if (filters.br !== "All" && perf.vehicleBr.RB !== filters.br) return false;
      if (filters.vehicle !== "All" && perf.vehicleName !== filters.vehicle) return false;
      if (filters.operator !== "All" && perf.vehicleOperator !== filters.operator) return false;
      if (filters.techTree !== "All" && perf.vehicleTechTree !== filters.techTree) return false;
      return true;
    });
  };

  const filteredShells = useMemo(
    () => tankShells.filter((shell) => shellMatchesFilters(shell, appliedFilters)),
    [appliedFilters]
  );

  const displayedShells = useMemo(() => {
    const query = shellListSearch.trim().toLowerCase();

    if (!query) return filteredShells;

    return filteredShells.filter((shell) => {
      const designation = shell.designation.toLowerCase();
      const id = shell.id.toLowerCase();
      return designation.includes(query) || id.includes(query);
    });
  }, [filteredShells, shellListSearch]);

  const getPopoverPerformances = (shell: TankShellDefinition) => {
    let performances: TankShellPerformance[] = [...shell.performances];
    const selectedRank = appliedFilters.rank === "All" ? null : appliedFilters.rank;
    const selectedBr = appliedFilters.br === "All" ? null : appliedFilters.br;
    const selectedVehicle = appliedFilters.vehicle === "All" ? null : appliedFilters.vehicle;
    const selectedOperator = appliedFilters.operator === "All" ? null : appliedFilters.operator;
    const selectedTechTree = appliedFilters.techTree === "All" ? null : appliedFilters.techTree;

    if (selectedRank) {
      performances = performances.filter((perf) => perf.vehicleRank === selectedRank);
    }

    if (selectedBr) {
      performances = performances.filter((perf) => perf.vehicleBr.RB === selectedBr);
    }

    if (selectedVehicle) {
      performances = performances.filter((perf) => perf.vehicleName === selectedVehicle);
    }

    if (selectedOperator) {
      performances = performances.filter((perf) => perf.vehicleOperator === selectedOperator);
    }

    if (selectedTechTree) {
      performances = performances.filter((perf) => perf.vehicleTechTree === selectedTechTree);
    }

    return performances;
  };

  const previewFilteredShellsCount = useMemo(
    () => tankShells.filter((shell) => shellMatchesFilters(shell, draftFilters)).length,
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
    draftFilters.shell !== appliedFilters.shell;

  const handleCategorySelect = (eventKey: string | null) => {
    if (!eventKey) return;

    setDraftFilters((current) => ({
      ...current,
      category: eventKey as CategoryFilter,
      family: "All",
      variant: "All",
      vehicle: "All",
      operator: "All",
      techTree: "All",
    }));
  };

  const handleFamilySelect = (eventKey: string | null) => {
    if (!eventKey) return;

    setDraftFilters((current) => ({
      ...current,
      family: eventKey as FamilyFilter,
      variant: "All",
    }));
  };

  const handleVariantSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    setDraftFilters((current) => ({
      ...current,
      variant: eventKey as VariantFilter,
    }));
    setShowVariantPicker(false);
  };

  const handleOpenVariantPicker = () => {
    setDesktopVariantSearch("");
    setShowVariantPicker(true);
  };

  const handleRankSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      rank: eventKey as RankFilter,
      vehicle: "All",
      operator: "All",
      techTree: "All",
    }));
  };

  const handleBrSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      br: eventKey as BRFilter,
    }));
    setShowBrPicker(false);
  };

  const handleOpenBrPicker = () => {
    setBrSearch("");
    setShowBrPicker(true);
  };

  const handleVehicleSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      vehicle: eventKey as VehicleFilter,
    }));
    setShowVehiclePicker(false);
  };

  const handleOperatorSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      operator: eventKey as OperatorFilter,
    }));
    setShowOperatorPicker(false);
  };

  const handleTechTreeSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      techTree: eventKey as TechTreeFilter,
    }));
    setShowTechTreePicker(false);
  };

  const handleOpenOperatorPicker = () => {
    setOperatorSearch("");
    setShowOperatorPicker(true);
  };

  const handleOpenTechTreePicker = () => {
    setTechTreeSearch("");
    setShowTechTreePicker(true);
  };

  const handleOpenVehiclePicker = () => {
    setVehicleSearch("");
    setShowVehiclePicker(true);
  };

  const handleShellSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      shell: eventKey as ShellFilter,
    }));
    setShowShellPicker(false);
  };

  const handleOpenShellPicker = () => {
    setShellSearch("");
    setShowShellPicker(true);
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

  function handleShellClick(shellId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveShellPlacement(openUpwards ? 'top-start' : 'bottom-start');
    } else {
      setActiveShellPlacement('auto');
    }

    if (activeShellId === shellId) {
      setActiveShellId(null);
      setVehicle(null);
      return;
    }

    const shell = tankShells.find((shell) => shell.id === shellId);
    if (!shell) {
      setVehicle(null);
      setActiveShellId(shellId);
      setShowBrs(false);
      return;
    }

    const popoverPerformances = getPopoverPerformances(shell);
    setVehicle(popoverPerformances[0] ?? shell.performances[0] ?? null);
    setActiveShellId(shellId);
    setShowBrs(false);
  }

  const popover = (shell: TankShellDefinition) => (
    <Popover id="shell-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          {shell.armor && shell.damage && (
            <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
              <Image src={getTankShellDecorIcons(vehicle ? vehicle : shell).damage} alt="Damage" className="position-absolute w-100 start-0 top-0" />

              <Image src={getTankShellDecorIcons(vehicle ? vehicle : shell).armor} alt="Armor" className="position-absolute w-100 start-0 top-0" />
            </div>
          )}

          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src={getTankShellIconPath(shell)} alt={`${shell.variant} shell icon`} className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-5 fw-bold">{shell.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div>
          <span className="text-muted">{shell.variant}</span>
          <span className="text-muted"> - </span>
          <span className="text-muted">{getTankShellVariantName(shell.variant)}</span>
        </div>

        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center">
              {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} height={24} className="me-1" />}
              <span className="font-wt">{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? "is-open" : ""}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="">
              {getPopoverPerformances(shell).map((vehicle) => (
                <Dropdown.Item key={vehicle.id} className="d-flex" onClick={() => setVehicle(vehicle)} id={vehicle.id}>
                  {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} width={24} className="me-1" />}
                  <span className="font-wt">{vehicle.vehicleName}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex column-gap-2 align-items-center">
            <div>
              <span>Rank</span>{" "}
              <span className="font-sans fw-normal">{vehicle?.vehicleRank}</span>
            </div>

            <span className="text-muted">•</span>

            {isMobile ? (
              <>
                <div ref={targetBrs} onClick={() => setShowBrs(!showBrs)}>
                  <span>BR</span>{" "}
                  <span>{vehicle?.vehicleBr.RB}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle.vehicleBr, "AB") : ""}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBr.RB}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle.vehicleBr, "SB") : ""}</span>
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
                        <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle.vehicleBr, "AB") : ""}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle?.vehicleBr.RB}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle ? getVehicleBrLabel(vehicle.vehicleBr, "SB") : ""}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{" "}
                    <span>{vehicle?.vehicleBr.RB}</span>
                  </div>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>
        
        
        <ul className="list-unstyled shells-performance-list mb-0">
          <li className="d-flex flex-column pb-1 mb-1 border-bottom column-gap-2">
            <span className="text-muted">Armor penetration (max.)</span>
            <span className="fw-bold">{vehicle?.penetrationMm} mm</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Caliber</span>
            <span className="text-muted">{vehicle?.caliberMm} mm</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{vehicle?.projectileMassKg} kg</span>
          </li>

          {vehicle?.muzzleVelocityMs && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Muzzle Velocity</span>
              <span className="text-muted">{vehicle?.muzzleVelocityMs} m/s</span>
            </li>
          )}

          {vehicle?.fuzeDelayM && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Fuze Delay</span>
              <span className="text-muted">{vehicle.fuzeDelayM} m</span>
            </li>
          )}

          {vehicle?.fuzeSensitivityMm && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Fuze Sensitivity</span>
              <span className="text-muted">{vehicle.fuzeSensitivityMm} mm</span>
            </li>
          )}

          {shell.family === "Guided-Missiles" && (
            <>
              {vehicle?.guidance && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Guidance</span>
                  {isMobile ? (
                    <>
                      <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{vehicle.guidance}</span>
                      <Overlay target={target} show={show} placement="top">
                        <Tooltip id="overlay-name">{getShellGuidanceName(vehicle.guidance).split(/([-\s]+)/).map((part, index) =>
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
                      <OverlayTrigger overlay={<Tooltip id={shell.id}>{getShellGuidanceName(vehicle.guidance).split(/([-\s]+)/).map((part, index) =>
                        /[-+\s]+/.test(part) ? (
                          <span key={index} className="fw-normal text-muted">{part}</span>
                        ) : (
                          <span key={index} className="fw-bold">{part}</span>
                        )
                      )}</Tooltip>}>
                        <span className="text-muted">{vehicle.guidance}</span>
                      </OverlayTrigger>
                    </>
                  )}
                </li>
              )}

              {vehicle?.IRCCM && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">IRCCM</span>
                  <span className="text-muted"><FaCircleCheck className="text-success" /></span>
                </li>
              )}

              {vehicle?.launchRangeKm && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Launch range</span>
                  <span className="text-muted">{vehicle.launchRangeKm} km</span>
                </li>
              )}

              {vehicle?.maximumSpeedMs && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Maximum speed</span>
                  <span className="text-muted">{vehicle.maximumSpeedMs} m/s</span>
                </li>
              )}

              {vehicle?.missileGuidanceTimeS && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Missile guidance time</span>
                  <span className="text-muted">{vehicle.missileGuidanceTimeS} s</span>
                </li>
              )}
            </>
          )}

          {vehicle?.explosiveType && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Explosive Type</span>
              <span className="text-muted">{vehicle.explosiveType}</span>
            </li>
          )}

          {vehicle?.explosiveMassKg && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Explosive Mass</span>
              <span className="text-muted">{(vehicle.explosiveMassKg * 1000) >= 1000 ? (
                <>
                  {vehicle.explosiveMassKg} kg
                </>
              ) : (
                <>
                  {vehicle.explosiveMassKg * 1000} g
                </>
              )}</span>
            </li>
          )}

          {vehicle?.tntEquivalentKg && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">TNT equivalent</span>
              <span className="text-muted">{(vehicle.tntEquivalentKg * 1000) >= 1000 ? (
                <>
                  {vehicle.tntEquivalentKg} kg
                </>
              ) : (
                <>
                    {Math.round((vehicle.tntEquivalentKg * 1000) * 100) / 100} g
                </>
              )}</span>
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

          <h1>Shells</h1>

          <div className="shells-mobile-filter-bar position-sticky z-1 mb-2">
            <Button
              variant="primary"
              onClick={handleShowFiltersMobile}
              className="shells-mobile-filter-button w-100"
            >
              <FiSliders className="fs-4 me-1" />

              <span className="fw-semibold">
                {(previewFilteredShellsCount > 1) ? (
                  <>
                    Filter {previewFilteredShellsCount} Shells
                  </>
                ) : (
                  <>
                    Filter {previewFilteredShellsCount} Shell
                  </>
                )}
              </span>
            </Button>
          </div>

          <Offcanvas
            show={showFilters}
            onHide={handleCloseFiltersMobile}
            placement="bottom"
            className="shells-mobile-filters h-100 w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter Shells</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="d-flex flex-column">
                <div className="d-flex flex-column row-gap-3 mb-3">
                  <Dropdown onSelect={handleCategorySelect}>
                    <Dropdown.Toggle variant={draftFilters.category === "All" ? "outline-primary" : "primary"} className="w-100 text-center">
                      Category: {draftFilters.category}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {categoryOptions.map((option) => (
                        <Dropdown.Item
                          key={option}
                          eventKey={option}
                          active={option === draftFilters.category}
                        >
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown onSelect={handleFamilySelect}>
                    <Dropdown.Toggle variant={draftFilters.family === "All" ? "outline-primary" : "primary"} className="w-100 text-center">
                      Family: {draftFilters.family}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {familyOptions.map((option) => (
                        <Dropdown.Item
                          key={option}
                          eventKey={option}
                          active={option === draftFilters.family}
                        >
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown onSelect={handleVariantSelect}>
                    <Dropdown.Toggle variant={draftFilters.variant === "All" ? "outline-primary" : "primary"} className="w-100 text-center">
                      Variant: {draftFilters.variant}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {variantOptions.map((option) => (
                        <Dropdown.Item
                          key={option}
                          eventKey={option}
                          active={option === draftFilters.variant}
                        >
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown onSelect={handleRankSelect}>
                    <Dropdown.Toggle variant={draftFilters.rank === "All" ? "outline-primary" : "primary"} className="w-100 text-center">
                      <span>Rank:</span>{" "}
                      <span className={`${draftFilters.rank === "All" ? "" : "font-sans fw-normal"}`}>{draftFilters.rank}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {rankOptions.map((option) => (
                        <Dropdown.Item
                          key={option}
                          eventKey={option}
                          active={option === draftFilters.rank}
                          className={`${option === "All" ? "" : "font-sans fw-normal"}`}
                        >
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                    <div className="d-flex flex-column row-gap-2">
                      <span className="fw-semibold font-wt">BR: {draftFilters.br}</span>

                      <div className="d-flex flex-wrap gap-2">
                        <Button
                          variant={draftFilters.br === "All" ? "primary" : "outline-secondary"}
                          onClick={() => handleBrSelect("All")}
                        >
                          All
                        </Button>

                        {quickBrOptions.map((option) => (
                          <Button
                            key={option}
                            variant={draftFilters.br === option ? "primary" : "outline-secondary"}
                            onClick={() => handleBrSelect(option)}
                            className="font-sans fw-normal"
                          >
                            {option}
                          </Button>
                        ))}

                        <Button variant="secondary" onClick={handleOpenBrPicker}>
                          More
                        </Button>
                      </div>
                    </div>

                  <div className="d-flex flex-column row-gap-2">
                    <span className="fw-semibold font-wt">Vehicle: {draftFilters.vehicle}</span>

                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant={draftFilters.vehicle === "All" ? "primary" : "outline-secondary"}
                        onClick={() => handleVehicleSelect("All")}
                      >
                        All
                      </Button>

                      {quickVehicleOptions.map((option) => (
                        <Button
                          key={option}
                          variant={draftFilters.vehicle === option ? "primary" : "outline-secondary"}
                          onClick={() => handleVehicleSelect(option)}
                          className="font-wt"
                        >
                          {option}
                        </Button>
                      ))}

                      <Button variant="secondary" onClick={handleOpenVehiclePicker}>
                        More
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex flex-column row-gap-2">
                    <span className="fw-semibold font-wt">Operator: {draftFilters.operator}</span>

                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant={draftFilters.operator === "All" ? "primary" : "outline-secondary"}
                        onClick={() => handleOperatorSelect("All")}
                      >
                        All
                      </Button>

                      {quickOperatorOptions.map((option) => (
                        <Button
                          key={option}
                          variant={draftFilters.operator === option ? "primary" : "outline-secondary"}
                          onClick={() => handleOperatorSelect(option)}
                          className="font-wt"
                        >
                          {option}
                        </Button>
                      ))}

                      {operatorOptions.length > 3 && (
                        <Button variant="secondary" onClick={handleOpenOperatorPicker}>
                          More
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-column row-gap-2">
                    <span className="fw-semibold font-wt">Tech Tree: {draftFilters.techTree}</span>

                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant={draftFilters.techTree === "All" ? "primary" : "outline-secondary"}
                        onClick={() => handleTechTreeSelect("All")}
                      >
                        All
                      </Button>

                      {quickTechTreeOptions.map((option) => (
                        <Button
                          key={option}
                          variant={draftFilters.techTree === option ? "primary" : "outline-secondary"}
                          onClick={() => handleTechTreeSelect(option)}
                          className="font-wt"
                        >
                          {option}
                        </Button>
                      ))}

                      {techTreeOptions.length > 3 && (
                        <Button variant="secondary" onClick={handleOpenTechTreePicker}>
                          More
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-column row-gap-2">
                    <span className="fw-semibold">Shell: {getShellFilterLabel(draftFilters.shell)}</span>

                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant={draftFilters.shell === "All" ? "primary" : "outline-secondary"}
                        onClick={() => handleShellSelect("All")}
                      >
                        All
                      </Button>

                      {quickShellOptions.map((option) => (
                        <Button
                          key={option}
                          variant={draftFilters.shell === option ? "primary" : "outline-secondary"}
                          onClick={() => handleShellSelect(option)}
                        >
                          {getShellFilterLabel(option)}
                        </Button>
                      ))}

                      <Button variant="secondary" onClick={handleOpenShellPicker}>
                        More
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column row-gap-3">
                  <Button
                    variant="outline-primary"
                    onClick={handleResetDraftFilters}
                    className="border-2"
                  >
                    Reset Filters
                  </Button>

                  {hasDraftChanges && (
                    <Button
                      variant="primary"
                      onClick={handleApplyFilters}
                      className="fw-semibold"
                    >
                      {(previewFilteredShellsCount > 1) ? (
                        <span>Filter {previewFilteredShellsCount} Shells</span>
                      ) : (
                        <span>Filter {previewFilteredShellsCount} Shell</span>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas
            show={showVehiclePicker}
            onHide={() => setShowVehiclePicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Vehicle</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search vehicle..."
                value={vehicleSearch}
                onChange={(event) => setVehicleSearch(event.target.value)}
                className="shells-offcanvas-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.vehicle === option ? "primary" : "outline-secondary"}
                    className="text-start font-wt d-flex align-items-center column-gap-2"
                    onClick={() => handleVehicleSelect(option)}
                  >
                    {getVehicleFilterIcon(option) && (
                      <Image src={getVehicleFilterIcon(option) ?? ""} width={20} height={20} alt="Vehicle operator" />
                    )}
                    <span>{option}</span>
                  </Button>
                ))}

                {searchableVehicleOptions.length === 0 && (
                  <span className="text-muted">No vehicles found.</span>
                )}
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
              <Form.Control
                type="search"
                placeholder="Search operator..."
                value={operatorSearch}
                onChange={(event) => setOperatorSearch(event.target.value)}
                className="shells-offcanvas-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableOperatorOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.operator === option ? "primary" : "outline-secondary"}
                    className="text-start font-wt d-flex align-items-center column-gap-2"
                    onClick={() => handleOperatorSelect(option)}
                  >
                    {getOperatorFilterIcon(option) && (
                      <Image src={getOperatorFilterIcon(option) ?? ""} width={20} height={20} alt="Vehicle operator" />
                    )}
                    <span>{option}</span>
                  </Button>
                ))}

                {searchableOperatorOptions.length === 0 && (
                  <span className="text-muted">No operators found.</span>
                )}
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
              <Form.Control
                type="search"
                placeholder="Search tech tree..."
                value={techTreeSearch}
                onChange={(event) => setTechTreeSearch(event.target.value)}
                className="shells-offcanvas-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableTechTreeOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.techTree === option ? "primary" : "outline-secondary"}
                    className="text-start font-wt d-flex align-items-center column-gap-2"
                    onClick={() => handleTechTreeSelect(option)}
                  >
                    {getTechTreeFilterIcon(option) && (
                      <Image src={getTechTreeFilterIcon(option) ?? ""} width={20} height={20} alt="Tech tree" />
                    )}
                    <span>{option}</span>
                  </Button>
                ))}

                {searchableTechTreeOptions.length === 0 && (
                  <span className="text-muted">No tech trees found.</span>
                )}
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
              <Form.Control
                type="search"
                placeholder="Search BR..."
                value={brSearch}
                onChange={(event) => setBrSearch(event.target.value)}
                className="shells-offcanvas-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableBrOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.br === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleBrSelect(option)}
                  >
                    {option}
                  </Button>
                ))}

                {searchableBrOptions.length === 0 && (
                  <span className="text-muted">No BRs found.</span>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas
            show={showShellPicker}
            onHide={() => setShowShellPicker(false)}
            placement="start"
            className="w-100"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Shell</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search shell..."
                value={shellSearch}
                onChange={(event) => setShellSearch(event.target.value)}
                className="shells-offcanvas-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableShellOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.shell === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleShellSelect(option)}
                  >
                    {getShellFilterLabel(option)}
                  </Button>
                ))}

                {searchableShellOptions.length === 0 && (
                  <span className="text-muted">No shells found.</span>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <>
          <div className="shells-desktop-layout">
            <aside className="shells-desktop-sidebar">
              <div className="shells-sidebar-scroll">
                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Categories</h5>
                  <div className="shells-sidebar-options">
                    {categoryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option ${draftFilters.category === option ? "is-active" : ""}`}
                        onClick={() => handleCategorySelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Family</h5>
                    <div className="shells-sidebar-options">
                      {getVisibleOptions(familyOptions as string[], showMoreFamilyDesktop).map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`shells-sidebar-option ${option === "All" ? "" : "font-sans"} ${draftFilters.family === option ? "is-active" : ""}`}
                          onClick={() => handleFamilySelect(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {(familyOptions as string[]).length > 3 && (
                      <button
                        type="button"
                        className="shells-sidebar-more"
                        onClick={() => setShowMoreFamilyDesktop((current) => !current)}
                      >
                        {showMoreFamilyDesktop ? "Less" : "More"}
                      </button>
                    )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Variant</h5>
                  <div className="shells-sidebar-options">
                    {quickVariantOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option ${draftFilters.variant === option ? "is-active" : ""}`}
                        onClick={() => handleVariantSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {variantOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={handleOpenVariantPicker}
                    >
                      More
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Rank</h5>
                  <div className="shells-sidebar-options">
                    {getVisibleOptions(rankOptions as string[], showMoreRankDesktop).map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option ${option === "All" ? "" : "font-sans"} ${draftFilters.rank === option ? "is-active" : ""}`}
                        onClick={() => handleRankSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {(rankOptions as string[]).length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={() => setShowMoreRankDesktop((current) => !current)}
                    >
                      {showMoreRankDesktop ? "Less" : "More"}
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">BR</h5>
                  <div className="shells-sidebar-options">
                    <button
                      type="button"
                      className={`shells-sidebar-option font-wt ${draftFilters.br === "All" ? "is-active" : ""}`}
                      onClick={() => handleBrSelect("All")}
                    >
                      All
                    </button>
                    {quickBrOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option font-sans ${draftFilters.br === option ? "is-active" : ""}`}
                        onClick={() => handleBrSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {brOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={handleOpenBrPicker}
                    >
                      More
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Vehicle</h5>
                  <div className="shells-sidebar-options">
                    <button
                      type="button"
                      className={`shells-sidebar-option font-wt ${draftFilters.vehicle === "All" ? "is-active" : ""}`}
                      onClick={() => handleVehicleSelect("All")}
                    >
                      All
                    </button>
                    {quickVehicleOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option font-wt ${draftFilters.vehicle === option ? "is-active" : ""}`}
                        onClick={() => handleVehicleSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {vehicleOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={handleOpenVehiclePicker}
                    >
                      More
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Operator</h5>
                  <div className="shells-sidebar-options">
                    <button
                      type="button"
                      className={`shells-sidebar-option font-wt ${draftFilters.operator === "All" ? "is-active" : ""}`}
                      onClick={() => handleOperatorSelect("All")}
                    >
                      All
                    </button>
                    {quickOperatorOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option font-wt ${draftFilters.operator === option ? "is-active" : ""}`}
                        onClick={() => handleOperatorSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {operatorOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={handleOpenOperatorPicker}
                    >
                      More
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Tech Tree</h5>
                  <div className="shells-sidebar-options">
                    <button
                      type="button"
                      className={`shells-sidebar-option font-wt ${draftFilters.techTree === "All" ? "is-active" : ""}`}
                      onClick={() => handleTechTreeSelect("All")}
                    >
                      All
                    </button>
                    {quickTechTreeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option font-wt ${draftFilters.techTree === option ? "is-active" : ""}`}
                        onClick={() => handleTechTreeSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {techTreeOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={handleOpenTechTreePicker}
                    >
                      More
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Shell</h5>
                  <div className="shells-sidebar-options">
                    {quickShellOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option ${draftFilters.shell === option ? "is-active" : ""}`}
                        onClick={() => handleShellSelect(option)}
                      >
                        {getShellFilterLabel(option)}
                      </button>
                    ))}
                  </div>
                  {shellOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={handleOpenShellPicker}
                    >
                      More
                    </button>
                  )}
                </div>
              </div>

              <div className="shells-sidebar-actions">
                <Button
                  variant="outline-primary"
                  onClick={handleResetDraftFilters}
                  className="border-2"
                >
                  Reset
                </Button>

                {hasDraftChanges && (
                  <Button
                    variant="primary"
                    onClick={handleApplyFilters}
                    className="shells-filter-button"
                  >
                    <FiSliders className="fs-4 me-1" />
                    <span className="fw-semibold">{(previewFilteredShellsCount > 1) ? (
                      <>
                        Filter {previewFilteredShellsCount} Shells
                      </>
                    ) : (
                      <>
                        Filter {previewFilteredShellsCount} Shell
                      </>
                    )}</span>
                  </Button>
                )}
              </div>
            </aside>

            <div className="shells-desktop-results">
              <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
                <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
                <p className="my-auto">Back to Home</p>
              </Button>

              <h1>Shells</h1>

              <Form.Control
                type="search"
                placeholder="Search shells..."
                value={shellListSearch}
                onChange={(event) => setShellListSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none mb-3"
              />

              <p className="text-muted mb-3">{displayedShells.length} results</p>

              <div className="d-flex flex-column row-gap-3 tank-shells-row">
                {displayedShells.map((shell: TankShellDefinition) => (
                  <OverlayTrigger key={shell.id} trigger="click" placement={activeShellPlacement} show={activeShellId === shell.id} overlay={popover(shell)} rootClose onToggle={(nextShow) => {
                    if (!nextShow && activeShellId === shell.id) {
                      setActiveShellId(null)
                      setVehicle(null)
                    }
                  }}>
                    <Button
                      variant="transparent"
                      className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-2 px-0"
                      id={shell.id}
                      onClick={(event) => handleShellClick(shell.id, event.currentTarget)}
                    >
                      <div className="shell-icon position-relative overflow-hidden">
                        {shell.armor && shell.damage && (
                          <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                            <Image src={getTankShellDecorIcons(shell).damage} alt="Damage" className="position-absolute w-100 start-0 top-0" />

                            <Image src={getTankShellDecorIcons(shell).armor} alt="Armor" className="position-absolute w-100 start-0 top-0" />
                          </div>
                        )}

                        <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                          <Image src={getTankShellIconPath(shell)} alt={`${shell.variant} shell icon`} className="h-100 flex-grow-0 flex-shrink-1" />
                        </div>
                      </div>

                      <span>{shell.designation}</span>
                    </Button>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          </div>

          <Modal
            show={showFamilyPicker}
            onHide={() => setShowFamilyPicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Family</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search family..."
                value={desktopFamilySearch}
                onChange={(event) => setDesktopFamilySearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {desktopFamilyOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.family === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleFamilySelect(option)}
                  >
                    {option}
                  </Button>
                ))}

                {desktopFamilyOptions.length === 0 && (
                  <span className="text-muted">No families found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={showVariantPicker}
            onHide={() => setShowVariantPicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Variant</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search variant..."
                value={desktopVariantSearch}
                onChange={(event) => setDesktopVariantSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {desktopVariantOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.variant === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleVariantSelect(option)}
                  >
                    {option}
                  </Button>
                ))}

                {desktopVariantOptions.length === 0 && (
                  <span className="text-muted">No variants found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={showVehiclePicker}
            onHide={() => setShowVehiclePicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Vehicle</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search vehicle..."
                value={vehicleSearch}
                onChange={(event) => setVehicleSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.vehicle === option ? "primary" : "outline-secondary"}
                    className="text-start font-wt d-flex align-items-center column-gap-2"
                    onClick={() => handleVehicleSelect(option)}
                  >
                    {getVehicleFilterIcon(option) && (
                      <Image src={getVehicleFilterIcon(option) ?? ""} width={20} height={20} alt="Vehicle operator" />
                    )}
                    {option}
                  </Button>
                ))}

                {searchableVehicleOptions.length === 0 && (
                  <span className="text-muted">No vehicles found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={showOperatorPicker}
            onHide={() => setShowOperatorPicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Operator</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search operator..."
                value={operatorSearch}
                onChange={(event) => setOperatorSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableOperatorOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.operator === option ? "primary" : "outline-secondary"}
                    className="text-start font-wt d-flex align-items-center column-gap-2"
                    onClick={() => handleOperatorSelect(option)}
                  >
                    {getOperatorFilterIcon(option) && (
                      <Image src={getOperatorFilterIcon(option) ?? ""} width={20} height={20} alt="Vehicle operator" />
                    )}
                    <span>{option}</span>
                  </Button>
                ))}

                {searchableOperatorOptions.length === 0 && (
                  <span className="text-muted">No operators found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={showTechTreePicker}
            onHide={() => setShowTechTreePicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Tech Tree</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search tech tree..."
                value={techTreeSearch}
                onChange={(event) => setTechTreeSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableTechTreeOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.techTree === option ? "primary" : "outline-secondary"}
                    className="text-start font-wt d-flex align-items-center column-gap-2"
                    onClick={() => handleTechTreeSelect(option)}
                  >
                    {getTechTreeFilterIcon(option) && (
                      <Image src={getTechTreeFilterIcon(option) ?? ""} width={20} height={20} alt="Tech tree" />
                    )}
                    <span>{option}</span>
                  </Button>
                ))}

                {searchableTechTreeOptions.length === 0 && (
                  <span className="text-muted">No tech trees found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={showBrPicker}
            onHide={() => setShowBrPicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select BR</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search BR..."
                value={brSearch}
                onChange={(event) => setBrSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableBrOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.br === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleBrSelect(option)}
                  >
                    {option}
                  </Button>
                ))}

                {searchableBrOptions.length === 0 && (
                  <span className="text-muted">No BRs found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={showShellPicker}
            onHide={() => setShowShellPicker(false)}
            centered
            scrollable
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Shell</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-column row-gap-3">
              <Form.Control
                type="search"
                placeholder="Search shell..."
                value={shellSearch}
                onChange={(event) => setShellSearch(event.target.value)}
                className="shells-modal-search bg-transparent text-light border-2 shadow-none"
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableShellOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.shell === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleShellSelect(option)}
                  >
                    {getShellFilterLabel(option)}
                  </Button>
                ))}

                {searchableShellOptions.length === 0 && (
                  <span className="text-muted">No shells found.</span>
                )}
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}

      {isMobile && (
        <>
          <Form.Control
            type="search"
            placeholder="Search shells..."
            value={shellListSearch}
            onChange={(event) => setShellListSearch(event.target.value)}
            className="shells-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2"
          />

          <div className="d-flex flex-column row-gap-3 tank-shells-row">
          {displayedShells.map((shell: TankShellDefinition) => (
            <OverlayTrigger key={shell.id} trigger="click" placement={activeShellPlacement} show={activeShellId === shell.id} overlay={popover(shell)} rootClose onToggle={(nextShow) => {
              if (!nextShow && activeShellId === shell.id) {
                setActiveShellId(null)
                setVehicle(null)
              }
            }}>
              <Button
                variant="transparent"
                className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-2 px-0"
                onClick={(event) => handleShellClick(shell.id, event.currentTarget)}
                id={shell.id}
              >
                <div className="shell-icon position-relative overflow-hidden">
                  {shell.armor && shell.damage && (
                    <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                      <Image src={getTankShellDecorIcons(shell).damage} alt="Damage" className="position-absolute w-100 start-0 top-0" />

                      <Image src={getTankShellDecorIcons(shell).armor} alt="Armor" className="position-absolute w-100 start-0 top-0" />
                    </div>
                  )}

                  <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                    <Image src={getTankShellIconPath(shell)} alt={`${shell.variant} shell icon`} className="h-100 flex-grow-0 flex-shrink-1" />
                  </div>
                </div>

                <span>{shell.designation}</span>
              </Button>
            </OverlayTrigger>
          ))}
          </div>
        </>
      )}

    </Container>
  )
}
