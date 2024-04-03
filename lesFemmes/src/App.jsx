import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";

function App() {
  const womenList = [
    {
      firstName: "Margot",
      lastName: "Robbie",
      job: "actrice",
      image: "../../assets/images/Margot.jpeg",
      birthDate: "02/07/1990",
      age: 33,
      nationality: "australienne",
      maritalStatus: "mariée",
      hobbies: "yoga, dancing, boxe, pilates",
      resume: "Le loup de Wall street, Barbie, Suicide Squad, Babylon...",
      trailer: "https://www.youtube.com/embed/4ZCGpepWUlE?si=RpBsUpH7tJDTE9Vl",
    },

    {
      firstName: "Dua (Doua)",
      lastName: "Lipa",
      job: "chanteuse",
      birthDate: "22/08/1995",
      image: "../../assets/images/DuaLipa.jpeg",
      age: 28,
      nationality: "britanique, albanaise",
      maritalStatus: "Couple",
      hobbies: "boxe, shopping, voyage",
      resume: "New Rule, Levitating, Don't Start Now, IDGAF...",
      music:
        "https://open.spotify.com/embed/track/2ekn2ttSfGqwhhate0LSR0?utm_source=generator&theme=0",
    },
    {
      firstName: "Stefanie",
      lastName: "Joosten",
      job: "actrice",
      birthDate: "05/08/1988",
      image: "../../assets/images/Stefanie.jpeg",
      age: "35",
      nationality: "allemande",
      maritalStatus: "célibataire",
      hobbies: "Jeux vidéo, musique, voyage",
      resume: "Metal Gear Solid V, Transit 17, Hostage X ",
      trailer: "https://www.youtube.com/embed/JZDBfmD-ckg?si=EfdoyQ575r40oNIZ",
    },

    {
      firstName: "Taylor",
      lastName: "Swift",
      job: "chanteuse",
      birthDate: "13/12/1989",
      image: "../../assets/images/taylor.jpeg",
      age: 34,
      nationality: "américaine",
      maritalStatus: "couple",
      hobbies: "cuisiner, pêcher",
      resume: "1989, Speak now, Midnights...",
      music:
        "https://open.spotify.com/embed/track/1u8c2t2Cy7UBoG4ArRcF5g?utm_source=generator&theme=0",
    },
  ];

  const actrice = womenList.filter((woman) => woman.job === "actrice");
  const chanteuse = womenList.filter((woman) => woman.job === "chanteuse");
  const [womenListFiltered, setWomenListFiltered] = useState(womenList);

  return (
    <>
      <NavBar
        womenList={womenList}
        womenListFiltered={womenListFiltered}
        setWomenListFiltered={setWomenListFiltered}
      />
      {womenListFiltered &&
        womenListFiltered.map((femme) => <Cards women={femme} />)}
      {/* <>
        <h2 id="actrices">Les actrices</h2>
      </>
       {actrice.map((person) => (
        <>
          <Cards women={person} key={person.lastName + "--"} />
        </>
      ))}
      <>
        <h2 id="chanteuses">Les chanteuses</h2>
      </>
      {chanteuse.map((person) => (
        <>
          <Cards women={person} key={person.lastName} />
        </>
      ))}  */}
    </>
  );
}
export default App;
