import { useState, useEffect, useRef, useMemo } from 'react'
import { tankShells } from "@/data/TankShells"
import { getTankShellVariantName } from "@/constants/TankShellVariantNames"
import { getTankShellIconPath, getTankShellDecorIcons } from "@/constants/TankShellIcons"
import { getTechTreeIcons } from '@/constants/TechTreeIcons'
import type { TankShellDefinition, TankShellPerformance, Shell, KineticShell, ChemicalShell, TankShellVariant, Rank } from '@/types/TankShells'
import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { FiSliders } from "react-icons/fi";
// import { IoSearch } from "react-icons/io5";
import '@/styles/pages/Shells.scss'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

type CategoryFilter = "All" | Shell;
type FamilyFilter = "All" | KineticShell | ChemicalShell;
type VariantFilter = "All" | TankShellVariant;
type RankFilter = "All" | Rank;
type VehicleFilter = "All" | string;
type ShellFilter = "All" | string;

type ShellFilters = {
  category: CategoryFilter;
  family: FamilyFilter;
  variant: VariantFilter;
  rank: RankFilter;
  vehicle: VehicleFilter;
  shell: ShellFilter;
};

const DEFAULT_FILTERS: ShellFilters = {
  category: "All",
  family: "All",
  variant: "All",
  rank: "All",
  vehicle: "All",
  shell: "All",
};

export default function Shells() {
  const [activeShellId, setActiveShellId] = useState<string | null>(null);
  const [activeShellPlacement, setActiveShellPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<TankShellPerformance | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [showBrs, setShowBrs] = useState(false);
  const targetBrs = useRef(null);
  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [showShellPicker, setShowShellPicker] = useState(false);
  const [shellSearch, setShellSearch] = useState("");
  const [desktopFamilySearch, setDesktopFamilySearch] = useState("");
  const [desktopVariantSearch, setDesktopVariantSearch] = useState("");
  const [desktopVehicleSearch, setDesktopVehicleSearch] = useState("");
  const [desktopShellSearch, setDesktopShellSearch] = useState("");
  const [showMoreFamilyDesktop, setShowMoreFamilyDesktop] = useState(false);
  const [showMoreVariantDesktop, setShowMoreVariantDesktop] = useState(false);
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false);
  const [showMoreVehicleDesktop, setShowMoreVehicleDesktop] = useState(false);
  const [showMoreShellDesktop, setShowMoreShellDesktop] = useState(false);

  const [showFilters, setShowFilters] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<ShellFilters>(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState<ShellFilters>(DEFAULT_FILTERS);

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

  const vehicleOptions = useMemo(() => {
    const names = Array.from(
      new Set(
        tankShells.flatMap((shell) =>
          shell.performances
            .filter((perf) => draftFilters.rank === "All" || perf.vehicleRank === draftFilters.rank)
            .map((perf) => perf.vehicleName)
        )
      )
    ).sort((a, b) => a.localeCompare(b));

    return ["All", ...names];
  }, [draftFilters.rank]);

  const quickVehicleOptions = useMemo(
    () => vehicleOptions.filter((option) => option !== "All").slice(0, 3),
    [vehicleOptions]
  );

  const searchableVehicleOptions = useMemo(() => {
    const query = vehicleSearch.trim().toLowerCase();

    return vehicleOptions.filter((option) => {
      if (option === "All") return false;
      if (!query) return true;
      return option.toLowerCase().includes(query);
    });
  }, [vehicleOptions, vehicleSearch]);

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

  const desktopVehicleOptions = useMemo(
    () => filterOptionsWithAll(vehicleOptions as string[], desktopVehicleSearch),
    [vehicleOptions, desktopVehicleSearch]
  );

  const desktopShellOptions = useMemo(() => {
    if (!desktopShellSearch.trim()) return shellOptions as string[];

    const search = desktopShellSearch.trim().toLowerCase();
    const nonAll = (shellOptions as string[]).filter((option) => option !== "All");
    const filtered = nonAll.filter((option) =>
      getShellFilterLabel(option).toLowerCase().includes(search)
    );

    return (shellOptions as string[]).includes("All") ? ["All", ...filtered] : filtered;
  }, [shellOptions, desktopShellSearch]);

  const shellMatchesFilters = (shell: TankShellDefinition, filters: ShellFilters) => {
    if (filters.category !== "All" && shell.category !== filters.category) return false;
    if (filters.family !== "All" && shell.family !== filters.family) return false;
    if (filters.variant !== "All" && shell.variant !== filters.variant) return false;
    if (filters.shell !== "All" && shell.id !== filters.shell) return false;

    return shell.performances.some((perf) => {
      if (filters.rank !== "All" && perf.vehicleRank !== filters.rank) return false;
      if (filters.vehicle !== "All" && perf.vehicleName !== filters.vehicle) return false;
      return true;
    });
  };

  const filteredShells = useMemo(
    () => tankShells.filter((shell) => shellMatchesFilters(shell, appliedFilters)),
    [appliedFilters]
  );

  const previewFilteredShellsCount = useMemo(
    () => tankShells.filter((shell) => shellMatchesFilters(shell, draftFilters)).length,
    [draftFilters]
  );

  const hasDraftChanges =
    draftFilters.category !== appliedFilters.category ||
    draftFilters.family !== appliedFilters.family ||
    draftFilters.variant !== appliedFilters.variant ||
    draftFilters.rank !== appliedFilters.rank ||
    draftFilters.vehicle !== appliedFilters.vehicle ||
    draftFilters.shell !== appliedFilters.shell;

  const handleCategorySelect = (eventKey: string | null) => {
    if (!eventKey) return;

    setDraftFilters((current) => ({
      ...current,
      category: eventKey as CategoryFilter,
      family: "All",
      variant: "All",
      vehicle: "All",
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
  };

  const handleRankSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      rank: eventKey as RankFilter,
      vehicle: "All",
    }));
  };

  const handleVehicleSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({
      ...current,
      vehicle: eventKey as VehicleFilter,
    }));
    setShowVehiclePicker(false);
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
    setVehicle(shell?.performances[0] ?? null);
    setActiveShellId(shellId);
    setShowBrs(false);
  }

  const popover = (shell: TankShellDefinition) => (
    <Popover className="shell-popover" id={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
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
              {vehicle?.vehicleTechTree && <Image src={getTechTreeIcons({ vehicleTechTree: vehicle.vehicleTechTree })} height={24} className="me-1" />}
              <span className="font-wt">{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? "is-open" : ""}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="">
              {shell.performances.map((vehicle) => (
                <Dropdown.Item className="d-flex" onClick={() => setVehicle(vehicle)} id={vehicle.id}>
                  {vehicle?.vehicleTechTree && <Image src={getTechTreeIcons({ vehicleTechTree: vehicle.vehicleTechTree })} width={24} className="me-1" />}
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
                  <span>{vehicle?.vehicleBr}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBrAB ? vehicle.vehicleBrAB : vehicle?.vehicleBr}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBr}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBrSB ? vehicle.vehicleBrSB : vehicle?.vehicleBr}</span>
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
                        <span className="fw-bold fs-6">{vehicle?.vehicleBrAB ? vehicle.vehicleBrAB : vehicle?.vehicleBr}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle?.vehicleBr}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle?.vehicleBrSB ? vehicle.vehicleBrSB : vehicle?.vehicleBr}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{" "}
                    <span>{vehicle?.vehicleBr}</span>
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

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Muzzle Velocity</span>
            <span className="text-muted">{vehicle?.muzzleVelocityMs} m/s</span>
          </li>

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
                  {vehicle.tntEquivalentKg * 1000} g
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
              <div className="d-flex flex-column h-100 justify-content-between">
                <div className="d-flex flex-column row-gap-3">
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
                autoFocus
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.vehicle === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleVehicleSelect(option)}
                  >
                    {option}
                  </Button>
                ))}

                {searchableVehicleOptions.length === 0 && (
                  <span className="text-muted">No vehicles found.</span>
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
                autoFocus
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
                  <Form.Control
                    size="sm"
                    type="search"
                    placeholder="Search family..."
                    value={desktopFamilySearch}
                    onChange={(event) => setDesktopFamilySearch(event.target.value)}
                    className="shells-sidebar-search bg-transparent text-light border-2 shadow-none"
                  />
                  <div className="shells-sidebar-options">
                    {getVisibleOptions(desktopFamilyOptions, showMoreFamilyDesktop).map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`shells-sidebar-option ${draftFilters.family === option ? "is-active" : ""}`}
                        onClick={() => handleFamilySelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {desktopFamilyOptions.length > 3 && (
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
                  <Form.Control
                    size="sm"
                    type="search"
                    placeholder="Search variant..."
                    value={desktopVariantSearch}
                    onChange={(event) => setDesktopVariantSearch(event.target.value)}
                    className="shells-sidebar-search bg-transparent text-light border-2 shadow-none"
                  />
                  <div className="shells-sidebar-options">
                    {getVisibleOptions(desktopVariantOptions, showMoreVariantDesktop).map((option) => (
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
                  {desktopVariantOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={() => setShowMoreVariantDesktop((current) => !current)}
                    >
                      {showMoreVariantDesktop ? "Less" : "More"}
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
                  <h5 className="shells-sidebar-title">Vehicle</h5>
                  <Form.Control
                    size="sm"
                    type="search"
                    placeholder="Search vehicle..."
                    value={desktopVehicleSearch}
                    onChange={(event) => setDesktopVehicleSearch(event.target.value)}
                    className="shells-sidebar-search bg-transparent text-light border-2 shadow-none"
                  />
                  <div className="shells-sidebar-options">
                    {getVisibleOptions(desktopVehicleOptions, showMoreVehicleDesktop).map((option) => (
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
                  {desktopVehicleOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={() => setShowMoreVehicleDesktop((current) => !current)}
                    >
                      {showMoreVehicleDesktop ? "Less" : "More"}
                    </button>
                  )}
                </div>

                <div className="shells-sidebar-section">
                  <h5 className="shells-sidebar-title">Shell</h5>
                  <Form.Control
                    size="sm"
                    type="search"
                    placeholder="Search shell..."
                    value={desktopShellSearch}
                    onChange={(event) => setDesktopShellSearch(event.target.value)}
                    className="shells-sidebar-search bg-transparent text-light border-2 shadow-none"
                  />
                  <div className="shells-sidebar-options">
                    {getVisibleOptions(desktopShellOptions, showMoreShellDesktop).map((option) => (
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
                  {desktopShellOptions.length > 3 && (
                    <button
                      type="button"
                      className="shells-sidebar-more"
                      onClick={() => setShowMoreShellDesktop((current) => !current)}
                    >
                      {showMoreShellDesktop ? "Less" : "More"}
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

              <p className="text-muted mb-3">{filteredShells.length} results</p>

              <div className="d-flex flex-column row-gap-3 tank-shells-row">
                {filteredShells.map((shell: TankShellDefinition) => (
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
                autoFocus
              />

              <div className="d-flex flex-column row-gap-2 overflow-auto">
                {searchableVehicleOptions.map((option) => (
                  <Button
                    key={option}
                    variant={draftFilters.vehicle === option ? "primary" : "outline-secondary"}
                    className="text-start"
                    onClick={() => handleVehicleSelect(option)}
                  >
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
                autoFocus
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
        <div className="d-flex flex-column row-gap-3 tank-shells-row">
          {filteredShells.map((shell: TankShellDefinition) => (
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
      )}

    </Container>
  )
}
