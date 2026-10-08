import api from "./api";

export interface AIAnalysisRequest {
  lineName: string;

  analysis: {
    taktTimeSeconds: number;
    capacityUnitsPerHour: number;
    efficiencyPercent: number;

    bottleneck: {
      operation: string;
      cycleTimeSeconds: number;
    };
  };

  question: string;
}

export const askAIEngineer = async (
  data: AIAnalysisRequest
) => {
  const response = await api.post(
    "/api/v1/ai/analyze",
    data
  );

  return response.data;
};