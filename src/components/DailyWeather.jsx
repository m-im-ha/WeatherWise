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
          <div className="p-4 w-24 h-24 text-center bg-white/10 rounded-md shadow-xl transition-all duration-500 ease-in-out hover:w-[11rem] hover:h-32 cursor-pointer">
            <p className="font-bold group-hover:hidden">
              {i === 0 ? "Today" : formatDay(day)}
            </p>
            <div className="text-2xl group-hover:hidden">
              {getWeatherIcon(dailyWeatherCode[i])}
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
              <div className="flex gap-2">
                <img
                  className="w-3 h-4"
                  src="./src/assets/arrow-up.png"
                  alt=""
                />
                <p className="text-md font-semibold ml-2">Max</p>
                <p className="text-md font-semibold ml-[7px]">{dailyMaxTemp[i]}℃</p>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-3 h-4 mt-1"
                  src="./src/assets/arrow-down.png"
                  alt=""
                />
                <p className="text-md font-semibold ml-2">Min</p>
                <p className="text-md font-semibold ml-[10px]">{dailyMinTemp[i]}℃</p>
              </div>
              <div className="flex gap-2">
                <div className="-ml-1">☔</div>
                <p className="text-md font-semibold ml-[3px]">Rain</p>
                <p className="text-md font-semibold ml-1">{dailyRain[i]}%</p>
              </div>
              <div className="flex gap-2">
                <img className="w-4 h-4 mt-1" src="./src/assets/wind.png" alt="" />
                <p className="text-md font-semibold ml-1">Wind</p>
                <p className="text-md font-semibold">{dailyWindSpeed[i]}km/h</p>
              </div>
              {/* <p className="text-md">Min: {dailyMinTemp[i]}℃</p> */}
              {/* <p className="text-md">Rain: {dailyRain[i]}%</p> */}
              {/* <p className="text-md">Wind: {dailyWindSpeed[i]}km/h</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;
