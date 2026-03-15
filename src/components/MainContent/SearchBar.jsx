import { useState } from "react";
const SearchBar = ({ searchCity }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCity(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
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
        <button>Search</button>
      </form>
    </>
  );
};
export default SearchBar;
