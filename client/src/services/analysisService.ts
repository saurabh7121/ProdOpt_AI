import api from "./api";
import type {
  ProductionLineAnalysis,
} from "../types/api";

export const analyzeLine = async (
  lineId: number
): Promise<ProductionLineAnalysis> => {
  const response = await api.get(
    `/api/v1/lines/${lineId}/analysis`
  );

  return response.data;
};