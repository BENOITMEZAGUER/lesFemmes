import { useState } from "react";

function Search({ arrayOfPeople, setWomenListFiltered }) {
  const handleChange = (value) => {
    // à chaque changement de valeur dans mon input text, je veux faire un filter depuis arrayOfPeople,
    //

    setWomenListFiltered(
      arrayOfPeople.filter((woman) => woman.firstName.includes(value))
    );
  };

  return (
    <form className="form">
      <input
        name="query"
        type="text"
        placeholder="Rechercher"
        onChange={(e) => handleChange(e.target.value)}
        onClick={(e) => e.preventDefault()}
      />
    </form>
  );
}

export default Search;
