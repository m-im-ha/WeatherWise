import { getWeatherIcon } from "../utils/helper";

function WeatherCardLeft({ humidity, pressure, wind, dailyWeatherCode }) {
  return (
    <div>
      <div className="w-full">
        <div className="text-8xl mb-16">{getWeatherIcon(dailyWeatherCode)}</div>
      </div>
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
          <h5 className="text-lg font-semibold ml-9">{wind}km/h</h5>
        </span>
        <hr className="w-56 border border-t-slate-300 my-1" />
        <span className="flex gap-3 items-center">
          <img className="w-6" src="./src/assets/pressure.png" alt="" />
          <h5 className="text-lg font-semibold">Pressure</h5>
          <h5 className="text-lg font-semibold ml-1">{pressure}hPa</h5>
        </span>
      </div>
    </div>
  );
}

export default WeatherCardLeft;
