import { client } from "../../api/client";
import type { Adverts } from "./types";

const ADVERTS_URL = "/api/v1/adverts";

export const getLatestAdverts = async () => {
  const response = await client.get<Adverts[]>(ADVERTS_URL);
  return response.data;
};

export const createAdvert = async (advertData: FormData) => {
  const response = await client.post(ADVERTS_URL, advertData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
