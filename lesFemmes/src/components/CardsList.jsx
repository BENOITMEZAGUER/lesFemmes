import Cards from "./Cards";

function CardsList({ womenList }) {
  return (
    <>
      {womenList.map((person) => (
        <Cards women={person} key={`${person.lastName}-bis`} />
      ))}
    </>
  );
}

export default CardsList;
