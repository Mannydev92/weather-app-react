import SearchBar from "../SearchBar/SearchBar";
const NavBar = ({ searchCity }) => {
  return (
    <>
      <div className="navbar">
        <SearchBar searchCity={searchCity}></SearchBar>
      </div>
    </>
  );
};

export default NavBar;
