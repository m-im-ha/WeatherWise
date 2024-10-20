function Header({ inputVal, setInputVal,setLocation }) {
  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSearch(){
    // console.log(inputVal);
    setInputVal("");
    setLocation(inputVal);
  }

  return (
    <header>
      <div className="flex gap-5 justify-center items-center">
        <div>
          <img className="w-20" src="../src/assets/logo.png" alt="logo" />
        </div>
        <h1 className="text-4xl font-bold">WeatherWise</h1>
      </div>

      <div className="flex gap-5 justify-center items-center pt-5 pb-14">
        <input
          value={inputVal}
          onChange={(e) => handleInputChange(e)}
          className="rounded-lg bg-gray-200 px-6 py-2 placeholder:text-black/100 w-96 border-2 border-orange-300"
          type="text"
          placeholder="Enter your city"
        />
        <button className="rounded-lg bg-orange-200 px-6 py-[10px] text-black" onClick={handleSearch}>
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
