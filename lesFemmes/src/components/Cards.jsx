import "./style.scss";
function Cards({ women }) {
  return (
    <div className="card">
      <h2>
        {women.firstName} {women.lastName}
      </h2>
      <div className="parts">
        <img src={women.image} />
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
        ({women.trailer} &&{" "}
        <iframe
          width="560"
          height="315"
          src={women.trailer}
          allowFullScreen
        ></iframe>
        )
      </div>
    </div>
  );
}
export default Cards;