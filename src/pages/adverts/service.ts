import { client } from "../../api/client";
import type { Adverts } from "./types";

const ADVERTS_URL = "/api/v1/adverts";

export const getLatestAdverts = async () => {
  const adverts = await client.get(ADVERTS_URL);
  return adverts;
};
