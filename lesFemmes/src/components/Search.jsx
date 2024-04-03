function Search({ arrayOfPeople, womenListFiltered, setWomenListFiltered }) {
  const handleChange = (value) => {
    // à chaque changement de valeur dans mon input text, je veux faire un filter depuis arrayOfPeople,
    //
    setWomenListFiltered(
      arrayOfPeople.filter((woman) => woman.firstName.includes(value))
    );
  };
  return (
    <form>
      <input
        name="query"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default Search;
