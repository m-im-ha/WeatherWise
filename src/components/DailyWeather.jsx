import { formatDay } from "../utils/helper";

function DailyWeather({ weatherData }) {
  // console.log(weatherData)
  const dailyMaxTemp = weatherData.daily.temperature_2m_max;
  const dailyMinTemp = weatherData.daily.temperature_2m_min;

  return (
    <div className="flex justify-center items-center gap-8 mt-8">
      {weatherData.daily.time.map((day, i) => (
        <div key={day}>
          <p>{i === 0 ? "Today" : formatDay( day)}</p>
          <p>{dailyMaxTemp[i]}℃</p>
          <p>{dailyMinTemp[i]}℃</p>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;
