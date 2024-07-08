import graphglDataProvider, {GraphQLClient, liveProvider as graphglLiveProvider} from "@refinedev/nestjs-query";
import {fetchWrapper} from "./fetch-wrapper";
import {createClient} from "graphql-ws";

export const API_BASE_URL = "https://api.crm.refine.dev";
export const API_URL = "https://api.crm.refine.dev";
export const WS_URL = "wss://api.crm.refine.dev/graphql";
export const client = new GraphQLClient(API_URL, {
    fetch: async (url: string, options: RequestInit) => {
        try {
            return fetchWrapper(url, options);
        } catch (error) {
            return Promise.reject(error as Error);
        }
    }
});

export const wsClient = typeof window !== "undefined" ? createClient({
    url: WS_URL,
    connectionParams: () => {
        const accessToken = localStorage.getItem("accessToken");

        return {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
    }
}) : undefined;

export const dataProvider = graphglDataProvider(client);
export const liveProvider = wsClient ?  graphglLiveProvider(wsClient) : undefined;