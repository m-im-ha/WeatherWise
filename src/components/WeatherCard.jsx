import WeatherCardLeft from "./WeatherCardLeft";
import WeatherCardRight from "./WeatherCardRight";

function WeatherCard({ weatherData, location }) {
  if (!weatherData?.current) {
    return;
  }
  const {
    temperature_2m: temp,
    apparent_temperature: feelsLike,
    relative_humidity_2m: humidity,
    surface_pressure: pressure,
    wind_speed_10m: wind,
  } = weatherData.current;
  const { countryName, cityName } = location;
  const dailyMaxTemp = weatherData.daily.temperature_2m_max[0];
  const dailyMinTemp = weatherData.daily.temperature_2m_min[0];
  const dailyPrecipitationProbability =
    weatherData.daily.precipitation_probability_max[0];
  const dailyWeatherCode = weatherData.daily.weather_code[0];

  return (
    <div className="flex justify-between border-2 w-1/2 mx-auto rounded-lg p-8 shadow-xl">
      {/* left side of the weather card */}
      <WeatherCardLeft
        humidity={humidity}
        pressure={pressure}
        wind={wind}
        dailyWeatherCode={dailyWeatherCode}
      />
      {/* right side of the weather card */}
      <WeatherCardRight
        temp={temp}
        feelsLike={feelsLike}
        location={location}
        countryName={countryName}
        cityName={cityName}
        dailyMaxTemp={dailyMaxTemp}
        dailyMinTemp={dailyMinTemp}
        dailyPrecipitationProbability={dailyPrecipitationProbability}
      />
    </div>
  );
}

export default WeatherCard;
