import React from "react";
import { Card } from "semantic-ui-react";
import "./Card.scss";

const CardExampleLinkCardProp = () => (
  <div className="Card">
    <Card
      link
      header="O'clock DWWM"
      meta="Etudes"
      description={[
        "Etudes pour passer le titre pro DWWM avec l'école O'clock.",
      ].join("")}
    />
  </div>
);

export default CardExampleLinkCardProp;
