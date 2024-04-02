import { useState } from "react";


import CardsList from "./components/CardsList";
import "./App.css";
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
      firstName: "Elizabeth",
      lastName: "Olsen",
      job: "actrice",
      image: "../../assets/images/Elizabeth.jpeg",
      birthDate: "16/02/1989",
      age: "35",
      nationality: "américaine",
      maritalStatus: "mariée",
      hobbies: "Cuisine, ménage",
      resume: "Wanda Vision, Love and Death, Godzilla...",
      trailer: "https://www.youtube.com/embed/sj9J2ecsSpo?si=1ltvUnNu2Km5ebk6",
    },
    {
      firstName: "Dua (Doua)",
      lastName: "Lipa",
      job: "chanteuse",
      birthDate: "22/08/1995",
      image: "../../assets/images/DuaLipa.jpeg",
      age: "28",
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
  ];
  return (
    <>
      <CardsList womenList={womenList} />
    </>
  );
}
export default App;
