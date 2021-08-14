import React from "react";
import { CardImage, CardItem, CardText, CardTitle } from "./Card.elements";

const Card = ({ title, text, img, color }) => {
  return (
    <CardItem color={color}>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardImage>
        <img src={img} alt="" />
      </CardImage>
    </CardItem>
  );
};

export default Card;
