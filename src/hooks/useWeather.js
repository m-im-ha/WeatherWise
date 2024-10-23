import { useEffect, useState } from "react";
import axios from "axios";

function useWeather(location) {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  // Fetch weather data when the user selects a city
  useEffect(() => {
    async function fetchWeather() {
      if (!location.lat || !location.lng) return;
      try {
        setIsLoading(true);
        // Fetch weather data using the coordinates of the selected city
        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current=temperature_2m,relative_humidity_2m,surface_pressure,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,wind_speed_10m_max,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT`
        );
        setWeatherData(weatherResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, [location]);

  return { weatherData, isLoading };
}

export default useWeather;
