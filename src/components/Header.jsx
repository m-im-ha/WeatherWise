import CitySuggestions from "./CitySuggestions";

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
          <CitySuggestions
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
