import { useEffect, useState } from "react";
import axios from "axios";

function useCitySuggestions(inputVal) {
  const [suggestions, setSuggestions] = useState([]);

  // Fetch city suggestions as the user types
  useEffect(() => {
    async function fetchSuggestions() {
      if (!inputVal) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${inputVal}`
        );
        setSuggestions(response.data.results || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSuggestions();
  }, [inputVal]);
  return { suggestions, setSuggestions };
}

export default useCitySuggestions;
