import React, { ReactElement } from "react";
import PlusIcon from "@material-ui/icons/Add";

interface Props {}

export default function SubHeaderItem({}: Props): ReactElement {
  return (
    <div>
      <PlusIcon />
    </div>
  );
}
