import "./style.scss";

function Cards({ women }) {
  return (
    <div>
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
            <p>Job: {women.job}</p>
            <p>Situation : {women.maritalStatus}</p>
            <p>Passions : {women.hobbies}</p>
            <p>Succès : {women.resume}</p>
          </section>
        </div>
        <div>
          {women.music ? (
            <iframe
              style={{ borderRadius: "12px" }}
              src={women.music}
              width="80%"
              height="152"
            ></iframe>
          ) : (
            <iframe
              width="75%"
              height="315"
              src={women.trailer}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cards;
