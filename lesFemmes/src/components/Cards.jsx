import "./style.scss";

function Cards({ women, womenIndex, setWomenIndex }) {
  console.log("women -->", women);
  console.log("women index dans card -->", womenIndex);
  const handleSClick = () => {
    setWomenIndex(womenIndex + 1);
  };
  const handlePClick = () => {
    setWomenIndex(womenIndex - 1);
  };

  return (
    <div className="card">
      <h2>
        {women.firstName} {women.lastName}
      </h2>
      <div className="parts">
        <img className="image" src={women.image} />
        <section className="info">
          <p>Date de naissance : {women.birthDate}</p>
          <p>Âge : {women.age} ans</p>
          <p>Nationalité : {women.nationality}</p>
          <p>Situation : {women.maritalStatus}</p>
          <p>Passions : {women.hobbies}</p>
          <p>Succès : {women.resume}</p>
        </section>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src={women.trailer}
          allowFullScreen
        ></iframe>
        <>
          <button onClick={handlePClick}>Précédent</button>
          <button onClick={handleSClick}>Suivant</button>
        </>
      </div>
    </div>
  );
}
export default Cards;
