import { getWeatherIcon } from "../utils/helper";

function WeatherCard({ weatherData, location }) {
  console.log(weatherData);
  // console.log(location);

  if (!weatherData?.current) {
    return;
  }
  const {
    temperature_2m: temp,
    apparent_temperature: feelsLike,
    weather_code: wmoCode,
    relative_humidity_2m: humidity,
    surface_pressure: pressure,
    wind_speed_10m: wind,
  } = weatherData.current;
  const { countryName, cityName } = location;
  const dailyMaxTemp = weatherData.daily.temperature_2m_max[0];
  const dailyMinTemp = weatherData.daily.temperature_2m_min[0];
  const dailyPrecipitationProbability =
    weatherData.daily.precipitation_probability_max[0];

  return (
    <div className="flex justify-between border-2 w-1/2 mx-auto rounded-lg p-8 shadow-xl">
      {/* left side of the weather card */}
      <div>
        <div className="text-7xl mb-16">{getWeatherIcon(wmoCode)}</div>
        <div>
          <span className="flex gap-3 items-center">
            <img className="w-6" src="./src/assets/humidity.png" alt="" />
            <h5 className="text-lg font-semibold">Humidity</h5>
            <h5 className="text-lg font-semibold">{humidity}%</h5>
          </span>
          <hr className="w-40 border border-t-slate-300 my-1" />
          <span className="flex gap-3 items-center">
            <img className="w-6" src="./src/assets/wind.png" alt="" />
            <h5 className="text-lg font-semibold">Wind</h5>
            <h5 className="text-lg font-semibold ml-8">{wind}km/h</h5>
          </span>
          <hr className="w-48 border border-t-slate-300 my-1" />
          <span className="flex gap-3 items-center">
            <img className="w-6" src="./src/assets/pressure.png" alt="" />
            <h5 className="text-lg font-semibold">Pressure</h5>
            <h5 className="text-lg font-semibold ml-2">{pressure}hPa</h5>
          </span>
        </div>
      </div>
      {/* right side of the weather card */}
      <div className="flex flex-col justify-end gap-8">
        {/* right 1st */}
        <div className="flex justify-end">
          <div>
            <span className="font-bold text-2xl">{cityName},</span>
            <span className="ml-2 text-xl font-semibold">{countryName}</span>
          </div>
          <div className="ml-2">
            <img
              className="w-12"
              src={`https://flagcdn.com/w320/${location.countryCode.toLowerCase()}.png`}
              alt=""
            />
          </div>
        </div>
        {/* right 2nd */}
        <div>
          {/* current temp */}
          <h2 className="text-4xl font-bold text-right">{temp} ℃</h2>
          <div className="flex justify-end my-2">
            <hr className="w-40 border border-t-slate-300" />
          </div>
          {/* max & min temp */}
          <div className="flex justify-end gap-1">
            <div className="flex">
              <img className="w-4 h-6" src="./src/assets/arrow-up.png" alt="" />
              <h5 className="text-lg font-bold">{dailyMaxTemp}℃</h5>
            </div>
            <div className="mx-2">|</div>
            <div className="flex">
              <img
                className="w-4 h-6"
                src="./src/assets/arrow-down.png"
                alt=""
              />
              <h5 className="text-lg font-bold">{dailyMinTemp}℃</h5>
            </div>
          </div>
        </div>
        {/* right 3rd */}
        <div className="flex flex-col">
          <h3 className="text-right font-semibold">Feels like {feelsLike}℃</h3>
          <div className="flex justify-end my-2">
            <hr className="w-40 border border-t-slate-300" />
          </div>
          <h3 className="text-right font-semibold">
            Chances of rain {dailyPrecipitationProbability}% ☔
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
