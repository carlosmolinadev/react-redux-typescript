import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import AccountIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(1),
    },
    control: {
      padding: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

interface Props {}

export default function ContainerEx({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className={classes.icon}>
            <AccountIcon color="primary" />
          </div>
          <div>
            <Typography variant="body1">Hello World</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className={classes.icon}>
            <AccountIcon color="primary" />
          </div>
          <div>
            <Typography variant="body1">Hello World</Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
