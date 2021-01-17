import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import LabelIcon from "@material-ui/icons/Label";

import useStyles from "./Styles";

interface Props {
  isDisplayed: boolean;
  isSubnested: boolean;
  list: string[];
}

export default function ExtendedMenuItem({
  isDisplayed,
  list,
  isSubnested,
}: Props): ReactElement {
  const classes = useStyles();
  return (
    <>
      <Collapse in={isDisplayed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.map((item) => (
            <ListItem
              button
              className={isSubnested ? classes.subNested : classes.nested}
            >
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
