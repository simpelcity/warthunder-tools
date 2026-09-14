import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip, Offcanvas, Form, Modal } from 'react-bootstrap'
import { useState, useEffect, useRef, useMemo } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { FiSliders } from 'react-icons/fi'
import { tankBelts } from '@/data/TankBelts'
import { getBulletIconPath } from '@/constants/BeltBulletIcons'
import { getCountryIcons } from '@/constants/CountryIcons'
import type { BeltDefinition, BaseBeltVehicle, BeltBulletNames, Rank, BR } from '@/types/TankBelts'
import '@/styles/pages/Aams.scss'
import { getBulletVariantName } from '@/constants/TankBeltBulletVariants'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

type BulletFilter = 'All' | BeltBulletNames;
type RankFilter = 'All' | Rank;
type BRFilter = 'All' | BR;
type VehicleFilter = 'All' | string;
type OperatorFilter = 'All' | string;
type TechTreeFilter = 'All' | string;

type BeltFilters = {
  bullet: BulletFilter;
  rank: RankFilter;
  br: BRFilter;
  vehicle: VehicleFilter;
  operator: OperatorFilter;
  techTree: TechTreeFilter;
};

const DEFAULT_FILTERS: BeltFilters = {
  bullet: 'All',
  rank: 'All',
  br: 'All',
  vehicle: 'All',
  operator: 'All',
  techTree: 'All',
};

type SortBy = 'name' | 'vehicleCount';
type SortDirection = 'asc' | 'desc';

function BeltIcon({ belt }: Pick<BeltDefinition, 'belt'>) {
  return (
    <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
      {belt.map((bullet, index) => (
        <Image
          key={`${bullet}-${index}`}
          src={getBulletIconPath({ icon: bullet })}
          alt={bullet}
          className="h-100 flex-grow-0 flex-shrink-1"
        />
      ))}
    </div>
  )
}

export default function TankBelts() {
  const [activeBeltId, setActiveBeltId] = useState<string | null>(null);
  const [activeBeltPlacement, setActiveBeltPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<BaseBeltVehicle | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [showBrs, setShowBrs] = useState(false);
  const targetBrs = useRef(null);

  const [showFilters, setShowFilters] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [operatorSearch, setOperatorSearch] = useState('');
  const [techTreeSearch, setTechTreeSearch] = useState('');
  const [brSearch, setBrSearch] = useState('');
  const [beltListSearch, setBeltListSearch] = useState('');

  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [showOperatorPicker, setShowOperatorPicker] = useState(false);
  const [showTechTreePicker, setShowTechTreePicker] = useState(false);
  const [showBrPicker, setShowBrPicker] = useState(false);
  const [showMoreBulletDesktop, setShowMoreBulletDesktop] = useState(false);
  const [showMoreRankDesktop, setShowMoreRankDesktop] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<BeltFilters>(DEFAULT_FILTERS);
  const [draftFilters, setDraftFilters] = useState<BeltFilters>(DEFAULT_FILTERS);

  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const getVehicleBrByMode = (beltVehicle: BaseBeltVehicle, mode: 'AB' | 'RB' | 'SB') => {
    if (mode === 'AB') return beltVehicle.vehicleBr?.AB ?? beltVehicle.vehicleBr?.RB;
    if (mode === 'SB') return beltVehicle.vehicleBr?.SB ?? beltVehicle.vehicleBr?.RB;
    return beltVehicle.vehicleBr?.RB;
  };

  const matchesBrFilter = (beltVehicle: BaseBeltVehicle, brFilter: BRFilter) => {
    if (brFilter === 'All') return true;
    return beltVehicle.vehicleBr?.RB === brFilter;
  };

  const beltMatchesFilters = (belt: BeltDefinition, filters: BeltFilters) => {
    if (filters.bullet !== 'All' && !belt.belt.includes(filters.bullet)) return false;

    return belt.vehicles.some((beltVehicle) => {
      if (filters.rank !== 'All' && beltVehicle.vehicleRank !== filters.rank) return false;
      if (!matchesBrFilter(beltVehicle, filters.br)) return false;
      if (filters.vehicle !== 'All' && beltVehicle.vehicleName !== filters.vehicle) return false;
      if (filters.operator !== 'All' && beltVehicle.vehicleOperator !== filters.operator) return false;
      if (filters.techTree !== 'All' && beltVehicle.vehicleTechTree !== filters.techTree) return false;
      return true;
    });
  };

  const bulletOptions = useMemo(() => {
    const values = Array.from(new Set(tankBelts.flatMap((belt) => belt.belt))).sort((a, b) => a.localeCompare(b));
    return ['All', ...values] as BulletFilter[];
  }, []);

  const rankOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        tankBelts.flatMap((belt) => belt.vehicles.map((beltVehicle) => beltVehicle.vehicleRank).filter(Boolean))
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, []);

  const brOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        tankBelts.flatMap((belt) =>
          belt.vehicles
            .filter((beltVehicle) => draftFilters.rank === 'All' || beltVehicle.vehicleRank === draftFilters.rank)
            .map((beltVehicle) => beltVehicle.vehicleBr?.RB)
            .filter((br): br is BR => Boolean(br))
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));

    return ['All', ...values] as BRFilter[];
  }, [draftFilters.rank]);

  const vehicleOptions = useMemo(() => {
    const values = Array.from(
      new Map(
        tankBelts.flatMap((belt) =>
          belt.vehicles
            .filter((beltVehicle) => draftFilters.rank === 'All' || beltVehicle.vehicleRank === draftFilters.rank)
            .filter((beltVehicle) => draftFilters.techTree === 'All' || beltVehicle.vehicleTechTree === draftFilters.techTree)
            .map((beltVehicle) => ({
              name: beltVehicle?.vehicleName,
              vehicleId: beltVehicle?.vehicleId
            }))
        )
          .filter((beltVehicle) => beltVehicle.name)
          .map((beltVehicle) => [beltVehicle.name, beltVehicle])
      ).values()
    ).sort((a, b) => a.name.localeCompare(b.name));

    return [{ name: "All", vehicleId: "All" }, ...values];
  }, [draftFilters.rank, draftFilters.techTree]);

  const techTreeOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        tankBelts.flatMap((belt) =>
          belt.vehicles
            .filter((beltVehicle) => draftFilters.rank === 'All' || beltVehicle.vehicleRank === draftFilters.rank)
            .filter((beltVehicle) => matchesBrFilter(beltVehicle, draftFilters.br))
            .filter((beltVehicle) => draftFilters.vehicle === 'All' || beltVehicle.vehicleName === draftFilters.vehicle)
            .filter((beltVehicle) => draftFilters.operator === 'All' || beltVehicle.vehicleOperator === draftFilters.operator)
            .map((beltVehicle) => beltVehicle.vehicleTechTree)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.operator]);

  const operatorOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        tankBelts.flatMap((belt) =>
          belt.vehicles
            .filter((beltVehicle) => draftFilters.rank === 'All' || beltVehicle.vehicleRank === draftFilters.rank)
            .filter((beltVehicle) => matchesBrFilter(beltVehicle, draftFilters.br))
            .filter((beltVehicle) => draftFilters.vehicle === 'All' || beltVehicle.vehicleName === draftFilters.vehicle)
            .filter((beltVehicle) => draftFilters.techTree === 'All' || beltVehicle.vehicleTechTree === draftFilters.techTree)
            .map((beltVehicle) => beltVehicle.vehicleOperator)
            .filter(Boolean)
        )
      )
    ).sort((a, b) => String(a).localeCompare(String(b)));

    return ['All', ...values] as string[];
  }, [draftFilters.rank, draftFilters.br, draftFilters.vehicle, draftFilters.techTree]);

  // const quickBulletOptions = useMemo(() => bulletOptions.filter((option) => option !== 'All').slice(0, 3), [bulletOptions]);
  const quickVehicleOptions = useMemo(() => vehicleOptions.filter((option) => option.name !== 'All').slice(0, 3), [vehicleOptions]);
  const quickOperatorOptions = useMemo(() => operatorOptions.filter((option) => option !== 'All').slice(0, 3), [operatorOptions]);
  const quickTechTreeOptions = useMemo(() => techTreeOptions.filter((option) => option !== 'All').slice(0, 3), [techTreeOptions]);
  const quickBrOptions = useMemo(() => brOptions.filter((option) => option !== 'All').slice(0, 3), [brOptions]);

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

  const searchableBrOptions = useMemo(() => {
    const query = brSearch.trim().toLowerCase();
    return brOptions.filter((option) => option !== 'All' && (!query || String(option).toLowerCase().includes(query)));
  }, [brOptions, brSearch]);

  const filteredBelts = useMemo(() => tankBelts.filter((belt) => beltMatchesFilters(belt, appliedFilters)), [appliedFilters]);

  const displayedBelts = useMemo(() => {
    const query = beltListSearch.trim().toLowerCase();
    if (!query) return filteredBelts;

    return filteredBelts.filter((belt) => {
      const designation = belt.designation.toLowerCase();
      const id = belt.id.toLowerCase();
      return designation.includes(query) || id.includes(query);
    });
  }, [filteredBelts, beltListSearch]);

  const sortedBelts = useMemo(() => {
    const direction = sortDirection === 'asc' ? 1 : -1;

    return [...displayedBelts].sort((firstBelt, secondBelt) => {
      if (sortBy === 'name') {
        return firstBelt.designation.localeCompare(secondBelt.designation) * direction;
      }

      return (firstBelt.vehicles.length - secondBelt.vehicles.length) * direction;
    });
  }, [displayedBelts, sortBy, sortDirection]);

  const previewFilteredBeltsCount = useMemo(
    () => tankBelts.filter((belt) => beltMatchesFilters(belt, draftFilters)).length,
    [draftFilters]
  );

  const hasDraftChanges =
    draftFilters.bullet !== appliedFilters.bullet ||
    draftFilters.rank !== appliedFilters.rank ||
    draftFilters.br !== appliedFilters.br ||
    draftFilters.vehicle !== appliedFilters.vehicle ||
    draftFilters.operator !== appliedFilters.operator ||
    draftFilters.techTree !== appliedFilters.techTree;

  const vehicleIconByName = useMemo(() => {
    const matches = tankBelts.flatMap((belt) =>
      belt.vehicles
        .filter((beltVehicle) => draftFilters.rank === 'All' || beltVehicle.vehicleRank === draftFilters.rank)
        .filter((beltVehicle) => draftFilters.techTree === 'All' || beltVehicle.vehicleTechTree === draftFilters.techTree)
    );

    const icons = new Map<string, string>();
    for (const beltVehicle of matches) {
      if (!beltVehicle.vehicleName || !beltVehicle.vehicleTechTree || icons.has(beltVehicle.vehicleName)) continue;
      icons.set(
        beltVehicle.vehicleName,
        getCountryIcons({
          vehicleTechTree: beltVehicle.vehicleTechTree,
          vehicleOperator: beltVehicle.vehicleOperator,
        })
      );
    }

    return icons;
  }, [draftFilters.rank, draftFilters.techTree]);

  const operatorIconByName = useMemo(() => {
    const matches = tankBelts.flatMap((belt) =>
      belt.vehicles
        .filter((beltVehicle) => draftFilters.rank === 'All' || beltVehicle.vehicleRank === draftFilters.rank)
        .filter((beltVehicle) => matchesBrFilter(beltVehicle, draftFilters.br))
        .filter((beltVehicle) => draftFilters.vehicle === 'All' || beltVehicle.vehicleName === draftFilters.vehicle)
        .filter((beltVehicle) => draftFilters.techTree === 'All' || beltVehicle.vehicleTechTree === draftFilters.techTree)
        .filter((beltVehicle) => Boolean(beltVehicle.vehicleOperator))
    );

    const icons = new Map<string, string>();
    for (const beltVehicle of matches) {
      if (!beltVehicle.vehicleOperator || !beltVehicle.vehicleTechTree || icons.has(beltVehicle.vehicleOperator)) continue;
      icons.set(
        beltVehicle.vehicleOperator,
        getCountryIcons({
          vehicleTechTree: beltVehicle.vehicleTechTree,
          vehicleOperator: beltVehicle.vehicleOperator,
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
    return getCountryIcons({ vehicleTechTree: option as NonNullable<BaseBeltVehicle['vehicleTechTree']> });
  };

  const getVisibleOptions = (options: string[], showAll: boolean) => {
    return showAll ? options : options.slice(0, 3);
  };

  const getBeltBrLabel = (beltVehicle: BaseBeltVehicle, mode: 'AB' | 'RB' | 'SB') => getVehicleBrByMode(beltVehicle, mode) ?? 'N/A';

  const getPopoverVehicles = (belt: BeltDefinition) => {
    let vehicles = [...belt.vehicles];
    if (appliedFilters.rank !== 'All') vehicles = vehicles.filter((beltVehicle) => beltVehicle.vehicleRank === appliedFilters.rank);
    if (appliedFilters.br !== 'All') vehicles = vehicles.filter((beltVehicle) => matchesBrFilter(beltVehicle, appliedFilters.br));
    if (appliedFilters.vehicle !== 'All') vehicles = vehicles.filter((beltVehicle) => beltVehicle.vehicleName === appliedFilters.vehicle);
    if (appliedFilters.operator !== 'All') vehicles = vehicles.filter((beltVehicle) => beltVehicle.vehicleOperator === appliedFilters.operator);
    if (appliedFilters.techTree !== 'All') vehicles = vehicles.filter((beltVehicle) => beltVehicle.vehicleTechTree === appliedFilters.techTree);
    return vehicles;
  };

  const getBulletComposition = (belt: BeltDefinition): [BeltBulletNames, number][] => {
    const counts = new Map<BeltBulletNames, number>();
    for (const bullet of belt.belt) {
      counts.set(bullet, (counts.get(bullet) ?? 0) + 1);
    }
    return Array.from(counts.entries());
  };

  const handleBulletSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    setDraftFilters((current) => ({ ...current, bullet: eventKey as BulletFilter }));
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

  function handleBeltClick(beltId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveBeltPlacement(openUpwards ? 'top-start' : 'bottom-start');
    } else {
      setActiveBeltPlacement('auto');
    }

    if (activeBeltId === beltId) {
      setActiveBeltId(null);
      setVehicle(null);
      return;
    }

    const belt = tankBelts.find((row) => row.id === beltId);
    if (!belt) {
      setVehicle(null);
      setActiveBeltId(beltId);
      setShowBrs(false);
      return;
    }

    const popoverVehicles = getPopoverVehicles(belt);
    setVehicle(popoverVehicles[0] ?? belt.vehicles[0] ?? null);
    setActiveBeltId(beltId);
    setShowBrs(false);
  }

  const popover = (belt: BeltDefinition) => (
    <Popover id="belt-popover" className={`${vehicle?.id}_popover`}>
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <BeltIcon belt={belt.belt} />
        </div>

        <span className="fs-5 fw-bold">{belt.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center gap-1">
              <Image src={`https://static.encyclopedia.warthunder.com/icons/${vehicle?.vehicleId.toLowerCase()}_ico.svg`} height={36} />

              {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleOperator: vehicle.vehicleOperator })} height={24} />}
              <span className="font-wt text-wrap text-start">{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? 'is-open' : ''}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-1 overflow-y-auto pt-0">
              <Dropdown.Item className="text-center border-bottom position-sticky top-0 bg-body pt-2" disabled>
                {getPopoverVehicles(belt).length > 1 ? (
                  <>
                    {getPopoverVehicles(belt).length} vehicles
                  </>
                ) : (
                  <>
                    {getPopoverVehicles(belt).length} vehicle
                  </>
                )}
              </Dropdown.Item>
              {getPopoverVehicles(belt).map((beltVehicle) => (
                <Dropdown.Item key={beltVehicle.id} className="d-flex align-items-center gap-1" onClick={() => setVehicle(beltVehicle)}>
                  <Image src={`https://static.encyclopedia.warthunder.com/icons/${beltVehicle.vehicleId.toLowerCase()}_ico.svg`} height={26} />

                  {beltVehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: beltVehicle.vehicleTechTree, vehicleOperator: beltVehicle.vehicleOperator })} width={27} />}
                  <span className="font-wt">{beltVehicle.vehicleName}</span>
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
                  <span>{vehicle ? getBeltBrLabel(vehicle, 'RB') : 'N/A'}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle ? getBeltBrLabel(vehicle, 'AB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle ? getBeltBrLabel(vehicle, 'RB') : ''}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle ? getBeltBrLabel(vehicle, 'SB') : ''}</span>
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
                        <span className="fw-bold fs-6">{vehicle ? getBeltBrLabel(vehicle, 'AB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle ? getBeltBrLabel(vehicle, 'RB') : ''}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle ? getBeltBrLabel(vehicle, 'SB') : ''}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{' '}
                    <span>{vehicle ? getBeltBrLabel(vehicle, 'RB') : 'N/A'}</span>
                  </div>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>

        <div className="d-flex flex-column pb-1 mb-1 border-bottom column-gap-2">
          <span className="text-muted">Armor penetration (max.)</span>
          <span className="fw-bold">{belt?.penetrationMm} mm</span>
        </div>

        <div className="mb-2">
          <span className="">Belt filling: {belt.belt.join("/")}</span>
        </div>

        <ul className="belts-performance-list mb-0">
          {getBulletComposition(belt).map(([bullet]) => (
            <li key={bullet}>
              <span className="fw-bold">{bullet}: </span>
              <span className="text-muted">{getBulletVariantName(bullet)} shell</span>
            </li>
          ))}
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

          <h1>Tank Belts</h1>

          <div className="aams-mobile-filter-bar position-sticky z-1 mb-2">
            <Button variant="primary" onClick={handleShowFiltersMobile} className="aams-mobile-filter-button w-100 d-flex align-items-center justify-content-center column-gap-2">
              <FiSliders className="fs-5" />
              <span className="fw-semibold">Filter {previewFilteredBeltsCount} Belt{previewFilteredBeltsCount !== 1 ? 's' : ''}</span>
            </Button>
          </div>

          <Offcanvas show={showFilters} onHide={handleCloseFiltersMobile} placement="bottom" className="aams-mobile-filters h-100 w-100">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter Belts</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="d-flex flex-column row-gap-3">
                <Dropdown onSelect={handleBulletSelect}>
                  <Dropdown.Toggle variant={draftFilters.bullet === 'All' ? 'outline-primary' : 'primary'} className="w-100 text-start">
                    Bullet: {draftFilters.bullet}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {bulletOptions.map((option) => (
                      <Dropdown.Item key={option} eventKey={option} active={option === draftFilters.bullet}>{option}</Dropdown.Item>
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
                      <Button key={option.vehicleId} variant={draftFilters.vehicle === option.name ? 'primary' : 'outline-secondary'} onClick={() => handleVehicleSelect(option.name)} className="font-wt">{option.name}</Button>
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

                {hasDraftChanges && (
                  <Button variant="primary" onClick={handleApplyFilters}>Apply {previewFilteredBeltsCount} Result{previewFilteredBeltsCount !== 1 ? 's' : ''}</Button>
                )}
                <Button variant="outline-primary" onClick={handleResetDraftFilters}>Reset Filters</Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <Form.Control
            type="search"
            placeholder="Search Belts..."
            value={beltListSearch}
            onChange={(event) => setBeltListSearch(event.target.value)}
            className="aams-offcanvas-search bg-transparent text-light border-2 shadow-none mb-2"
          />

          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <Form.Select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortBy)}
              aria-label="Sort Belts by"
              style={{ maxWidth: '220px' }}
            >
              <option value="name">Name</option>
              <option value="vehicleCount">Vehicles</option>
            </Form.Select>

            <Button
              variant="outline-primary"
              onClick={() =>
                setSortDirection((current) =>
                  current === 'asc' ? 'desc' : 'asc'
                )
              }
            >
              {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </Button>
          </div>

          {(draftFilters.bullet === "All" && draftFilters.br === "All" && draftFilters.operator === "All" && draftFilters.rank === "All" && draftFilters.techTree === "All" && draftFilters.vehicle === "All") ? (
            <p className="text-muted mb-3">{displayedBelts.length} result{displayedBelts.length > 1 ? "s" : ""}</p>
          ) : (
            <>
              {(draftFilters.bullet !== "All") ? (
                <>
                  <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Bullet: {draftFilters.bullet}</p>
                </>
              ) : (draftFilters.br !== "All") ? (
                <>
                  <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Battle Rating: {draftFilters.br}</p>
                </>
              ) : (draftFilters.operator !== "All") ? (
                <>
                  <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Operator: {draftFilters.operator}</p>
                </>
              ) : (draftFilters.rank !== "All") ? (
                <>
                  <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Rank: {draftFilters.rank}</p>
                </>
              ) : (draftFilters.techTree !== "All") ? (
                <>
                  <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for TechTree: {draftFilters.techTree}</p>
                </>
              ) : (draftFilters.vehicle !== "All") ? (
                <>
                  <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Vehicle: {draftFilters.vehicle}</p>
                </>
              ) : (beltListSearch !== "") && (
                <>
                  <p className="text-muted mb-3">{displayedBelts.length} result{displayedBelts.length > 1 ? "s" : ""} for: {beltListSearch}</p>
                </>
              )}
            </>
          )}

          <div className="d-flex flex-column row-gap-4 plane-aams-row">
            {sortedBelts.map((belt) => (
              <OverlayTrigger key={belt.id} trigger="click" placement={activeBeltPlacement} show={activeBeltId === belt.id} overlay={popover(belt)} rootClose onToggle={(nextShow) => {
                if (!nextShow && activeBeltId === belt.id) {
                  setActiveBeltId(null);
                  setVehicle(null);
                }
              }}>
                <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleBeltClick(belt.id, event.currentTarget)}>
                  <div className="shell-icon position-relative overflow-hidden">
                    <BeltIcon belt={belt.belt} />
                  </div>

                  <span>{belt.designation}</span>
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
                <h5 className="aams-sidebar-title">Bullet</h5>
                <div className="aams-sidebar-options">
                  {getVisibleOptions(bulletOptions as string[], showMoreBulletDesktop).map((option) => (
                    <button key={option} type="button" className={`aams-sidebar-option ${draftFilters.bullet === option ? 'is-active' : ''}`} onClick={() => handleBulletSelect(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {(bulletOptions as string[]).length > 4 && (
                  <button type="button" className="aams-sidebar-more" onClick={() => setShowMoreBulletDesktop((current) => !current)}>
                    {showMoreBulletDesktop ? 'Less' : 'More'}
                  </button>
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
                    <button key={option.vehicleId} type="button" className={`aams-sidebar-option font-wt ${draftFilters.vehicle === option.name ? 'is-active' : ''}`} onClick={() => handleVehicleSelect(option.name)}>{option.name}</button>
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
            </div>

            <div className="aams-sidebar-actions">
              <Button variant="outline-primary" onClick={handleResetDraftFilters} className="border-2">Reset</Button>
              {hasDraftChanges && (
                <Button variant="primary" onClick={handleApplyFilters} className="aams-filter-button">
                  <FiSliders className="fs-5 me-1" />
                  <span className="fw-semibold">Filter {previewFilteredBeltsCount} Belt{previewFilteredBeltsCount !== 1 ? 's' : ''}</span>
                </Button>
              )}
            </div>
          </aside>

          <div className="aams-desktop-results">
            <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
              <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
              <p className="my-auto">Back to Home</p>
            </Button>

            <h1>Tank Belts</h1>

            <Form.Control
              type="search"
              placeholder="Search Belts..."
              value={beltListSearch}
              onChange={(event) => setBeltListSearch(event.target.value)}
              className="aams-modal-search bg-transparent text-light border-2 shadow-none mb-3"
            />

            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
              <Form.Select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortBy)}
                aria-label="Sort Belts by"
                style={{ maxWidth: '220px' }}
              >
                <option value="name">Name</option>
                <option value="vehicleCount">Vehicles</option>
              </Form.Select>

              <Button
                variant="outline-primary"
                onClick={() =>
                  setSortDirection((current) =>
                    current === 'asc' ? 'desc' : 'asc'
                  )
                }
              >
                {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
              </Button>
            </div>

            {(draftFilters.bullet === "All" && draftFilters.br === "All" && draftFilters.operator === "All" && draftFilters.rank === "All" && draftFilters.techTree === "All" && draftFilters.vehicle === "All") ? (
              <p className="text-muted mb-3">{displayedBelts.length} result{displayedBelts.length > 1 ? "s" : ""}</p>
            ) : (
              <>
                {(draftFilters.bullet !== "All") ? (
                  <>
                    <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Bullet: {draftFilters.bullet}</p>
                  </>
                ) : (draftFilters.br !== "All") ? (
                  <>
                    <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Battle Rating: {draftFilters.br}</p>
                  </>
                ) : (draftFilters.operator !== "All") ? (
                  <>
                    <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Operator: {draftFilters.operator}</p>
                  </>
                ) : (draftFilters.rank !== "All") ? (
                  <>
                    <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Rank: {draftFilters.rank}</p>
                  </>
                ) : (draftFilters.techTree !== "All") ? (
                  <>
                    <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for TechTree: {draftFilters.techTree}</p>
                  </>
                ) : (draftFilters.vehicle !== "All") ? (
                  <>
                    <p className="text-muted mb-3 font-wt">{previewFilteredBeltsCount} result{previewFilteredBeltsCount > 1 ? "s" : ""} for Vehicle: {draftFilters.vehicle}</p>
                  </>
                ) : (beltListSearch !== "") && (
                  <>
                    <p className="text-muted mb-3">{displayedBelts.length} result{displayedBelts.length > 1 ? "s" : ""} for: {beltListSearch}</p>
                  </>
                )}
              </>
            )}

            <div className="d-flex flex-column row-gap-4 plane-aams-row">
              {sortedBelts.map((belt) => (
                <OverlayTrigger key={belt.id} trigger="click" placement={activeBeltPlacement} show={activeBeltId === belt.id} overlay={popover(belt)} rootClose onToggle={(nextShow) => {
                  if (!nextShow && activeBeltId === belt.id) {
                    setActiveBeltId(null);
                    setVehicle(null);
                  }
                }}>
                  <Button variant="transparent" className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1" onClick={(event) => handleBeltClick(belt.id, event.currentTarget)}>
                    <div className="shell-icon position-relative overflow-hidden">
                      <BeltIcon belt={belt.belt} />
                    </div>
                    <span>{belt.designation}</span>
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
                    <Image src={`https://static.encyclopedia.warthunder.com/icons/${option?.vehicleId}_ico.svg`} height={20} />

                    {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} height={20} alt="Vehicle operator" />}
                    <span className="font-wt">{option.name}</span>
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
                    <Image src={`https://static.encyclopedia.warthunder.com/icons/${option?.vehicleId}_ico.svg`} height={20} />

                    {getVehicleFilterIcon(option.name) && <Image src={getVehicleFilterIcon(option.name) ?? ''} width={20} height={20} alt="Vehicle operator" />}
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
        </>
      )}
    </Container>
  )
}
