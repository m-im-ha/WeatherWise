import { formatDay, getWeatherIcon } from "../utils/helper";

function DailyWeather({ weatherData }) {
  // console.log(weatherData)
  const dailyRain = weatherData.daily.precipitation_probability_max;
  const dailyMaxTemp = weatherData.daily.temperature_2m_max;
  const dailyMinTemp = weatherData.daily.temperature_2m_min;
  const dailyWindSpeed = weatherData.daily.wind_speed_10m_max;
  const dailyWeatherCode = weatherData.daily.weather_code;

  return (
    <div className="flex justify-center items-center gap-5 mt-8 pb-12">
      {weatherData.daily.time.map((day, i) => (
        <div
          key={day}
          className="group relative transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          <div className="p-4 w-24 h-24 text-center bg-white rounded-md shadow-lg transition-all duration-500 ease-in-out hover:w-40 hover:h-32">
            <p className="font-bold group-hover:hidden">
              {i === 0 ? "Today" : formatDay(day)}
            </p>
            <div className="text-2xl group-hover:hidden">
              {getWeatherIcon(dailyWeatherCode[i])}
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-lg">Max: {dailyMaxTemp[i]}℃</p>
              <p className="text-lg">Min: {dailyMinTemp[i]}℃</p>
              <p className="text-lg">Rain: {dailyRain[i]}%</p>
              <p className="text-lg">Wind: {dailyWindSpeed[i]}km/h</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;
