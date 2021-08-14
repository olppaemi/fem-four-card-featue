import React from "react";
import { CardContainer, Column, Row } from "./Cards.elements.";
import { Card } from "../../components";
import { calculator, karma, supervisor, teambuilder } from "../../pages/Data";

const Cards = () => {
  return (
    <CardContainer>
      <Row>
        <Column>
          <Card color="cyan" {...supervisor} />
        </Column>
        <Column>
          <Card color="red" {...teambuilder} />
          <Card color="orange" {...karma} />
        </Column>
        <Column>
          <Card color="blue" {...calculator} />
        </Column>
      </Row>
    </CardContainer>
  );
};

export default Cards;
