import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [location, setLocation] = useState("");
  // console.log(inputVal)

  useEffect(() => {
    async function fetchWeather() {
      if (!location) return;
      try {
        const geoResponse = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const {
          country,
          country_code,
          id,
          latitude: lat,
          longitude: lng,
          name: cityName,
          timezone,
        } = geoResponse.data.results[0];
        console.log(country, country_code, id, lat, lng, cityName);
        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min&timezone=${timezone}`
        );
        console.log(weatherResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, [location]);

  return (
    <div>
      <Header
        inputVal={inputVal}
        setInputVal={setInputVal}
        setLocation={setLocation}
      />
    </div>
  );
}

export default App;
