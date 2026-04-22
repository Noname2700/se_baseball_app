import { API_KEY } from "./constants";
import { API_BASE_URL } from "./constants";

const url = `${API_BASE_URL}`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "baseballapi.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

export async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
