import "./style.scss";

function Cards({ women }) {
  return (
    <div className="card">
      <h2>
        {women.firstName} {women.lastName}
      </h2>

      <section className="infoCard">
        <img src={women.image}></img>
        <div className="info">
          <p>Date de naissance: {women.birthDate}</p>
          <p>Âge: {women.age} ans</p>
          <p>Nationalité: {women.nationality}</p>
          <p>Situation: {women.maritalStatus}</p>
          <p>Passions: {women.hobbies}</p>
          <p>Succès: {women.resume}</p>
        </div>
      </section>
      <div className="youtube">
        <iframe
          width="580"
          height="360"
          src={women.trailer}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Cards;
