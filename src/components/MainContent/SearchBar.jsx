import { useState } from "react";
const SearchBar = ({ searchCity }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCity(inputValue);
          setInputValue("");
        }}
      >
        <input
          type="text"
          placeholder="Search a city... "
          value={inputValue}
          required
          name="search"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="search-btn">Search</button>
      </form>
    </>
  );
};
export default SearchBar;
