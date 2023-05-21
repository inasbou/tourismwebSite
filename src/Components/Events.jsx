import React from "react";
import Event from "../Components/Event";
import pic1 from "../events_assets/event1.jpg";
import pic2 from "../events_assets/event2.jpg";
import pic3 from "../events_assets/event3.jpg";
import pic4 from "../events_assets/event4.jpg";
import pic5 from "../events_assets/event5.jpg";
import pic6 from "../events_assets/event6.jpg";
import pic7 from "../events_assets/event7.jpg"

const Events = () => {
  const events = [
    {
      id: 1,
      titre: "FESTIVAL CULTUREL",
      date: "12 fév",
      lieu: "OPera d Alger ",
      src: pic3,
      dispo: true,
    },
    {
      id: 2,
      titre: "FESTIVAL GNAWI",
      date: "15 fév",
      lieu: "Jardin d essai ",
      src: pic1,
      dispo: true,
    },
    {
      id: 3,
      titre: "FETE DES FEMMES",
      date: "21 mars",
      lieu: "Alger centre",
      src: pic6,
      dispo: false,
    },
    {
      id: 4,
      titre: "SALON DU LIVRE",
      date: "05 avr",
      lieu: "Pins Maritimes",
      src: pic7,
      dispo: true,
    },
    {
      id: 5,
      titre: "SEMI MARATHON INTERNATIONAL",
      date: "18 avr",
      lieu: "Audin ",
      src: pic4,
      dispo: false,
    },
    {
      id: 6,
      titre: "FOIRE  D'ALGER",
      date: "20 avr",
      lieu: "Pins Maritimes",
      src: pic2,
      dispo: true,
    },
  ];
  return (
    <div>
      <h1 className=" ml-6 mt-4   font-bold text-3xl text-green-app">Events collection </h1>
    <div className=" flex flex-wrap  justify-center">
      {events.map((event) => (
        <Event
          titre={event.titre}
          date={event.date}
          lieu={event.lieu}
          src={event.src}
          dispo={event.dispo}
        />
      ))}
    </div></div>
  );
};

export default Events;
