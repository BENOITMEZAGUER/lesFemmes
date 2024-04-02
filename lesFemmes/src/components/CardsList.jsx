import Cards from "./Cards";
function CardsList({ womenList }) {
  return (
    <>
      {womenList.map((person) => (
        <Cards women={person} />
      ))}
    </>
  );
}
export default CardsList;
