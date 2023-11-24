import React from "react";
import { Card } from "semantic-ui-react";

const CardExampleLinkCardProp = () => (
  <div>
    <Card
      link
      header="O'clock DWWM"
      meta="Scientist"
      description={[
        "Rick is a genius scientist whose alcoholism and reckless,",
        " nihilistic behavior are a source of concern for his family.",
      ].join("")}
    />
  </div>
);

export default CardExampleLinkCardProp;
