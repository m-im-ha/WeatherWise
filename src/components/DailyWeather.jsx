import { formatDay } from "../utils/helper";

function DailyWeather({ weatherData }) {
  // console.log(weatherData)
  const dailyMaxTemp = weatherData.daily.temperature_2m_max;
  const dailyMinTemp = weatherData.daily.temperature_2m_min;

  //   return (
  //     <div className="flex justify-center items-center gap-8 mt-8">
  //       {weatherData.daily.time.map((day, i) => (
  //         <div key={day}>
  //           <p>{i === 0 ? "Today" : formatDay( day)}</p>
  //           <p>{dailyMaxTemp[i]}℃</p>
  //           <p>{dailyMinTemp[i]}℃</p>
  //         </div>
  //       ))}
  //     </div>
  //   );

  return (
    <div className="flex justify-center items-center gap-8 pt-8 pb-20">
      {weatherData.daily.time.map((day, i) => (
        <div
          key={day}
          className="group relative transition-all duration-300 ease-in-out transform hover:scale-105" // Hover effect
        >
          <div className="p-4 w-24 text-center bg-white rounded-md shadow-lg transition-all duration-300 ease-in-out hover:w-40">
            {" "}
            {/* Smoothly increase width */}
            <p className="font-bold">{i === 0 ? "Today" : formatDay(day)}</p>
            <p className="mt-2 text-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {" "}
              {/* Hidden initially, shown on hover */}
              Max: {dailyMaxTemp[i]}℃
            </p>
            <p className="text-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Min: {dailyMinTemp[i]}℃
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;
