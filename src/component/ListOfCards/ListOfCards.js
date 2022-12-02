import React from "react";
import Card from "../Card/Card";
import "../ListOfCards/ListOfCards.css";

const ListOfCards = () => {
  return (
    <div className="ListOfCards">
      <Card
        movie={{
          title: "Pirates",
          image:
            "https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=",
          stat1: "stat",
          stat2: "picovina",
        }}
      />
    </div>
  );
};

export default ListOfCards;
