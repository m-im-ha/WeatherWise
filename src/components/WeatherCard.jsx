function WeatherCard({ weatherData }) {
  return (
    <div className="flex justify-center items-center">
      {weatherData?.current_weather && <h1>{weatherData.current_weather.temperature}</h1>}
    </div>
  );
}

export default WeatherCard;
