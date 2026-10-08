import type { ProductionLineAnalysis } from "../types/api";

export const mockAnalysis: ProductionLineAnalysis = {
  lineId: 1,

  taktTimeSeconds: 63,

  bottleneck: {
    stationId: 3,
    stationName: "S3",
    operation: "Welding",
    cycleTimeSeconds: 85,
  },

  productionCapacity: {
    unitsPerHour: 42.35,
    unitsPerDay: 296,
  },

  lineEfficiencyPercent: 62.35,

  totalIdleTimeSeconds: 115,

  stations: [
    {
      stationId: 1,
      name: "S1",
      operation: "Cutting",
      cycleTimeSeconds: 40,
      workers: 1,
      utilizationPercent: 63.49,
      idleTimeSeconds: 23,
    },
    {
      stationId: 2,
      name: "S2",
      operation: "Drilling",
      cycleTimeSeconds: 55,
      workers: 1,
      utilizationPercent: 87.30,
      idleTimeSeconds: 8,
    },
    {
      stationId: 3,
      name: "S3",
      operation: "Welding",
      cycleTimeSeconds: 85,
      workers: 1,
      utilizationPercent: 100,
      idleTimeSeconds: 0,
    },
    {
      stationId: 4,
      name: "S4",
      operation: "Grinding",
      cycleTimeSeconds: 50,
      workers: 1,
      utilizationPercent: 78.74,
      idleTimeSeconds: 13,
    },
    {
      stationId: 5,
      name: "S5",
      operation: "Inspection",
      cycleTimeSeconds: 35,
      workers: 1,
      utilizationPercent: 55.56,
      idleTimeSeconds: 28,
    },
  ],
};