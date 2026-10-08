export interface ProductionLine {
  id?: number;
  name: string;
  dailyDemand: number;
  availableTimeSeconds: number;
}

export interface Station {
  id?: number;
  lineId?: number;
  name: string;
  operation: string;
  cycleTimeSeconds: number;
  workers: number;
}

export interface Bottleneck {
  stationId: number;
  stationName: string;
  operation: string;
  cycleTimeSeconds: number;
}

export interface StationAnalysis {
  stationId: number;
  name: string;
  operation: string;
  cycleTimeSeconds: number;
  workers: number;
  utilizationPercent: number;
  idleTimeSeconds: number;
}

export interface ProductionLineAnalysis {
  lineId: number;
  taktTimeSeconds: number;

  bottleneck: Bottleneck;

  productionCapacity: {
    unitsPerHour: number;
    unitsPerDay: number;
  };

  lineEfficiencyPercent: number;

  totalIdleTimeSeconds: number;

  stations: StationAnalysis[];
}