import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
    countryName: "",
    cityName: "",
    countryCode: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  // console.log(weatherData)

  // Fetch weather data when the user selects a city
  useEffect(() => {
    async function fetchWeather() {
      if (!location.lat || !location.lng) return;
      try {
        setIsLoading(true);
        // Fetch weather data using the coordinates of the selected city
        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT`
        );
        setWeatherData(weatherResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, [location]);

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
        // console.log(response.data.results)
        setSuggestions(response.data.results || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSuggestions();
  }, [inputVal]);

  return (
    <div>
      <Header
        inputVal={inputVal}
        setInputVal={setInputVal}
        setLocation={setLocation}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <WeatherCard weatherData={weatherData} location={location} />
      )}
    </div>
  );
}

export default App;
