import { read } from "fs";
import { groq } from "next-sanity";
import { readClient } from "./lib/client";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResourcesParams) => {
    const {query, category, page } = params;
    

    try {
        const resources = await readClient.fetch(
            groq``
        )
        
    } catch (error) {
        
    }
};
