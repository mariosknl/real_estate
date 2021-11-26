import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "cdf5408c2bmsh6985b0bf01716dcp17298ajsneb928ee37dc7",
    },
  });

  return data;
};
