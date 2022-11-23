import { apiconn, baseUrl } from "./base";

export const getSearchResult = (query: string) => {
  return apiconn.get(`${baseUrl}/search?q=${query}`);
};
