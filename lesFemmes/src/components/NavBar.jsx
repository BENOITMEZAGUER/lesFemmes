import Search from "./Search";
import Cards from "./Cards";

function NavBar({ womenList, womenListFiltered, setWomenListFiltered }) {
  return (
    <div className="navBar">
      <Search
        arrayOfPeople={womenList}
        womenListFiltered={womenListFiltered}
        setWomenListFiltered={setWomenListFiltered}
      />
    </div>
  );
}

export default NavBar;
