import React, { ReactElement, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import AccountIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "./Styles";
import HeaderCategories from "./HeaderCategories";

import { OpenMenu, OptionMenu } from "./InterfacesHeader";

interface Props {}

export default function Header({}: Props): ReactElement {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState<OpenMenu>({
    cars: false,
    properties: false,
    electronics: false,
    jobs: false,
    pets: false,
    home: false,
    toys: false,
    sports: false,
    services: false,
    education: false,
    style: false,
    boats: false,
    construction: false,
  });

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleOpen = (option: OptionMenu) => {
    switch (option) {
      case OptionMenu.Car:
        const car = !open.cars;
        return setOpen({ ...open, cars: car });

      case OptionMenu.HomeProperty:
        const homeProperty = !open.properties;
        return setOpen({ ...open, properties: homeProperty });

      case OptionMenu.Electronic:
        const electronics = !open.electronics;
        return setOpen({ ...open, electronics: electronics });

      case OptionMenu.Jobs:
        const jobs = !open.jobs;
        return setOpen({ ...open, jobs: jobs });

      case OptionMenu.Pets:
        const pets = !open.pets;
        return setOpen({ ...open, pets: pets });

      case OptionMenu.Home:
        const home = !open.home;
        return setOpen({ ...open, home: home });

      case OptionMenu.Toys:
        const toys = !open.toys;
        return setOpen({ ...open, toys: toys });

      case OptionMenu.Sports:
        const sports = !open.sports;
        return setOpen({ ...open, sports: sports });

      case OptionMenu.Services:
        const services = !open.services;
        return setOpen({ ...open, services: services });

      case OptionMenu.Styles:
        const style = !open.style;
        return setOpen({ ...open, style: style });

      case OptionMenu.Construction:
        const construction = !open.construction;
        return setOpen({ ...open, construction: construction });

      case OptionMenu.Education:
        const education = !open.education;
        return setOpen({ ...open, education: education });

      case OptionMenu.Boats:
        const boats = !open.boats;
        return setOpen({ ...open, boats: boats });
    }
  };

  const categories = [
    "Vehículos",
    "Bienes Raíces",
    "Electrónica",
    "Empleos",
    "Mascotas",
    "Hogar",
    "Juguetes",
    "Deportes",
    "Servicios",
    "Educación",
  ];

  const listMenu = () => <HeaderCategories onClick={handleOpen} open={open} />;

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.customColor}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={toggleDrawer} />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              {listMenu()}
            </Drawer>
            <IconButton className={classes.logo}>LOGO</IconButton>
            <div className={classes.search}>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <Button color="inherit">Publica</Button>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <AccountIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
