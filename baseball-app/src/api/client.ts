import { API_BASE_URL } from "../../utils/constants";
import { API_KEY } from "../../utils/constants";

export async function fetchRequest(endpoint: string) {
  const url = `${API_BASE_URL}${endpoint}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "baseballapi.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
