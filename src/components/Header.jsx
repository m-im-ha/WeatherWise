function Header({
  inputVal,
  setInputVal,
  setLocation,
  suggestions,
  setSuggestions,
}) {
  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSuggestionClick(city) {
    // console.log(city);
    setInputVal(city.name);
    setLocation({
      lat: city.latitude,
      lng: city.longitude,
      countryName: city.country,
      cityName: city.name,
      countryCode: city.country_code,
    });
    setTimeout(() => {
      setSuggestions([]);
    }, 1000);
    setInputVal("");
  }

  return (
    <header>
      <div className="mx-auto">
        <div className="flex justify-center items-center">
          <div>
            <img className="w-20" src="../src/assets/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl font-bold">WeatherWise</h1>
        </div>
        <div className="flex flex-col w-full justify-center items-center pb-10">
          <div className="flex justify-center w-full">
            <div className="flex items-center justify-between px-1 w-full">
              <div className="w-full flex justify-center items-center">
                <input
                  value={inputVal}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  className="rounded-lg bg-gray-200 px-6 py-2 placeholder:text-black/100 w-1/2 border-2 border-orange-300"
                  placeholder="Enter your city name ☃️"
                />
              </div>
            </div>
          </div>
          {/* City suggestions dropdown while typing city name */}
          {suggestions.length > 0 && (
            <ul className="bg-white/10 border border-gray-300 rounded-lg w-1/2 max-h-48 overflow-y-auto z-10 shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex gap-1 p-4 hover:bg-gray-100 cursor-pointer border-t border-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span className="font-bold">{suggestion.name},</span>
                  <span className="text-gray-600">
                    {suggestion.state ? `${suggestion.state}, ` : ""}
                    {suggestion.country}
                  </span>
                  <span className="ml-4">
                    <img
                      className="w-12"
                      src={`https://flagcdn.com/w320/${suggestion.country_code.toLowerCase()}.png`}
                      alt=""
                    />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
