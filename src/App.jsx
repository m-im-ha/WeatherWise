import { useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import DailyWeather from "./components/DailyWeather";
import Footer from "./components/Footer";

import useWeather from "./hooks/useWeather";
import useCitySuggestions from "./hooks/useCitySuggestions";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
    countryName: "",
    cityName: "",
    countryCode: "",
  });

  const { weatherData, isLoading } = useWeather(location);
  const { suggestions, setSuggestions } = useCitySuggestions(inputVal);

  return (
    <div className="bodyBg min-h-screen">
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
      {weatherData?.daily && <DailyWeather weatherData={weatherData} />}
      <Footer />
    </div>
  );
}

export default App;
