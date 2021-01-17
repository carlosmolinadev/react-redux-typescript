import React, { ReactElement } from "react";
import SellCard from "../Card/BasicCard/SellCard";
import "./Container.css";

interface Props {}

export default function Container({}: Props): ReactElement {
  const numberOfAdds = [1, 2, 3, 6, 4, 5, 6, 9, 7];
  return (
    <div className="row">
      <SellCard />
      <SellCard />
      <SellCard />
      <SellCard />
      <SellCard />
      <SellCard />
      <div className="row__file"></div>
    </div>
  );
}
