import { createClient } from "next-sanity";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityToken,
} from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
  token: sanityToken,
  perspective: "published",
});

type SanityFetchOptions = {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number;
};

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
}: SanityFetchOptions): Promise<QueryResponse | null> {
  if (!isSanityConfigured) {
    return null;
  }

  return sanityClient.fetch<QueryResponse>(query, params, {
    next: { revalidate },
  });
}
