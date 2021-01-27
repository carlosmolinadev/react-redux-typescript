import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@material-ui/core";

export function Example() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://static.toiimg.com/photo/72975551.cms",
    },
  ];

  return (
    <Carousel animation="slide" interval={4000}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper className="paper">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.image} width="200 px" />
    </Paper>
  );
}
