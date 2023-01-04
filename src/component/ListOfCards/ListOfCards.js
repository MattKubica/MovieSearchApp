import React from "react";
import Card from "../Card/Card";
import "../ListOfCards/ListOfCards.css";

const ListOfCards = () => {
  return (
    <div className="ListOfCards">
      <Card
        movie={{
          title: "Shreck",
          image:
            "https://th.bing.com/th/id/OIP.PKm5cO-hIz8mxFHrJ3zIWwHaGj?pid=ImgDet&rs=1",
          stat1: "stat",
          stat2: "stat",
        }}
      />
    </div>
  );
};

export default ListOfCards;
