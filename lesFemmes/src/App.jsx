import { useState } from "react";
import CardsList from "./components/CardsList";
import "./App.css";

function App() {
  const womenList = [
    {
      firstName: "Margot",
      lastName: "Robbie",
      image: "../../assets/images/Margot.jpeg",
      birthDate: "02/07/1990",
      age: 33,
      nationality: "australienne",
      maritalStatus: "mariée",
      hobbies: "yoga, dance, boxe, pilates",
      resume: "Le loup de Wall street, Barbie, Suicide Squad, Babylon...",
      trailer: "https://www.youtube.com/embed/4ZCGpepWUlE?si=RpBsUpH7tJDTE9Vl",
    },

    {
      firstName: "Elizabeth",
      lastName: "Olsen",
      image: "../../assets/images/Elizabeth.jpeg",
      birthDate: "16/02/1989",
      age: 35,
      nationality: "américaine",
      maritalStatus: "mariée",
      hobbies: "Cuisine, ménage",
      resume: "Wanda Vision, Love and death, Godzilla...",
      trailer: "https://www.youtube.com/embed/sj9J2ecsSpo?si=1ltvUnNu2Km5ebk6",
    },

    {
      firstName: "Dua",
      lastName: "Lipa",
      image: "../../assets/images/DuaLipa.jpeg",
      birthDate: "22/08/1995",
      age: 28,
      nationality: "albano-britannique",
      maritalStatus: "couple",
      hobbies: "boxe, shopping, voyages",
      resume: "New Rule, Levitating, Don't start now...",
    },

    {
      firstName: "Stefanie",
      lastName: "Joosten",
      image: "../../assets/images/Stefanie.jpeg",
      birthDate: "05/08/1988",
      age: 36,
      nationality: "hollandaise",
      maritalStatus: "célibataire",
      hobbies: "jeux-vidéos, musqiue, voyages",
      resume: "Metal Gear Solid V, Transit 17, Hostage X...",
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
