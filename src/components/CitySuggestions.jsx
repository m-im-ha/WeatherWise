function CitySuggestions({ suggestions, handleSuggestionClick }) {
  return (
    <div className="w-full flex justify-center">
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
  );
}

export default CitySuggestions;
