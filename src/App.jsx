import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
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
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current_weather=true&timezone=auto`
        );
        setWeatherData(weatherResponse.data);

        // const temperature = weatherResponse.data.current_weather.temperature;
        // console.log(temperature+"°C");
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
      {isLoading ? <Loader /> : <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
