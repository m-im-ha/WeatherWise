function WeatherCard({ weatherData, location }) {
  console.log(weatherData);
  // console.log(location);

  if (!weatherData?.current) {
    return;
  }
  const { temperature_2m: temp } = weatherData.current;
  const { countryName, cityName } = location;
  // console.log(temperature);
  return (
    <div className="border-2 border-t-white text-center w-1/2 mx-auto rounded-lg p-2">
      <div className="flex flex-col gap-8">
        <div className="flex justify-end">
          <div>
            <span className="font-bold text-2xl">{cityName},</span>
            <span className="ml-2 text-2xl">{countryName}</span>
          </div>
          <div className="ml-2">
            <img
              className="w-12"
              src={`https://flagcdn.com/w20/${location.countryCode.toLowerCase()}.png`}
              alt=""
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-right">{temp} ℃</h2>
      </div>
    </div>
  );
}

export default WeatherCard;
