import api from "./api";

export interface OptimizationChange {
  stationId: number;
  additionalWorkers: number;
}

export interface OptimizationRequest {
  changes: OptimizationChange[];
}

export const simulateOptimization = async (
  lineId: number,
  data: OptimizationRequest
) => {
  const response = await api.post(
    `/api/v1/lines/${lineId}/optimization/simulate`,
    data
  );

  return response.data;
};