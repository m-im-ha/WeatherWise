import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [location, setLocation] = useState("");
  // console.log(inputVal)

  useEffect(() => {
    async function fetchWeather() {
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const { country, country_code, id, latitude:lat, longitude:lng, name:cityName } =
        geoResponse.data.results[0];
        console.log(country, country_code, id, lat, lng, cityName)
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
