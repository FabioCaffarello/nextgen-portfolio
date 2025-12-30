import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // TODO: Change to SANITY_SERVER_API_TOKEN when available
  token: process.env.SANITY_API_TOKEN,
});