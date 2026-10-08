import api from "./api";
import type {
  ProductionLine,
  Station,
} from "../types/api";

export const createLine = async (
  line: ProductionLine
) => {
  const response = await api.post(
    "/api/v1/lines",
    line
  );

  return response.data;
};

export const getLines = async () => {
  const response = await api.get(
    "/api/v1/lines"
  );

  return response.data;
};

export const getLine = async (id: number) => {
  const response = await api.get(
    `/api/v1/lines/${id}`
  );

  return response.data;
};

export const updateLine = async (
  id: number,
  line: ProductionLine
) => {
  const response = await api.put(
    `/api/v1/lines/${id}`,
    line
  );

  return response.data;
};

export const deleteLine = async (
  id: number
) => {
  await api.delete(
    `/api/v1/lines/${id}`
  );
};

export const addStation = async (
  lineId: number,
  station: Station
) => {
  const response = await api.post(
    `/api/v1/lines/${lineId}/stations`,
    station
  );

  return response.data;
};

export const getStations = async (
  lineId: number
) => {
  const response = await api.get(
    `/api/v1/lines/${lineId}/stations`
  );

  return response.data;
};