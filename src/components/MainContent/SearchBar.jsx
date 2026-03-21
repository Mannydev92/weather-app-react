import { useState } from "react";
const SearchBar = ({ searchCity }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="relative w-full mb-8 group"
      onSubmit={(e) => {
        e.preventDefault();
        searchCity(inputValue);
        setInputValue("");
      }}
    >
      {/* El Input: Fondo oscuro, bordes muy redondeados y padding extra a la izquierda */}
      <input
        type="text"
        placeholder="Search for cities"
        value={inputValue}
        required
        name="search"
        className="w-full bg-[#1a1f26] text-slate-200 placeholder-slate-500 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      {/* El Botón: En lugar de un botón tosco al lado, lo ponemos como un icono/label sutil a la derecha */}
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-1.5 px-4 rounded-lg transition-colors opacity-0 group-focus-within:opacity-100"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
