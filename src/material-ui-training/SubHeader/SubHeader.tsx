import React, { ReactElement } from "react";
import CarIcon from "@material-ui/icons/DriveEta";
import HomesteadIcon from "@material-ui/icons/HomeWork";
import WorkIcon from "@material-ui/icons/Work";
import PhoneIcon from "@material-ui/icons/PhoneAndroid";
import FurnitureIcon from "@material-ui/icons/Weekend";
import OtherClassified from "@material-ui/icons/Assistant";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "./SubHeader.css";
import {
  ButtonBase,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: "flex",
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      alignItems: "center",
    },
    icon: {
      marginRight: theme.spacing(2),
      color: "inherit",
    },
  })
);

export default function SubHeader({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <ButtonBase>
              <Paper className={classes.paper}>
                <CarIcon className={classes.icon} />
                <Typography variant="body1">Vehículos</Typography>
              </Paper>
            </ButtonBase>
            <ButtonBase>
              <Paper className={classes.paper}>
                <HomesteadIcon className={classes.icon} />
                <Typography variant="body1">Bienes Raíces</Typography>
              </Paper>
            </ButtonBase>
            <ButtonBase>
              <Paper className={classes.paper}>
                <WorkIcon className={classes.icon} />
                <Typography variant="body1">Empleos</Typography>
              </Paper>
            </ButtonBase>
            <ButtonBase>
              <Paper className={classes.paper}>
                <PhoneIcon className={classes.icon} />
                <Typography variant="body1">Electónica</Typography>
              </Paper>
            </ButtonBase>
            <ButtonBase>
              <Paper className={classes.paper}>
                <FurnitureIcon className={classes.icon} />
                <Typography variant="body1">Muebles</Typography>
              </Paper>
            </ButtonBase>
            <ButtonBase>
              <Paper className={classes.paper}>
                <OtherClassified className={classes.icon} />
                <Typography variant="body1">Clasificados</Typography>
              </Paper>
            </ButtonBase>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
