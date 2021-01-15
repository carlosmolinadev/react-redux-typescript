import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { ReactElement, useState } from "react";
import CarIcon from "@material-ui/icons/DriveEta";
import PetsIcon from "@material-ui/icons/Pets";
import HomesteadIcon from "@material-ui/icons/HomeWork";
import WorkIcon from "@material-ui/icons/Work";
import PhoneIcon from "@material-ui/icons/PhoneAndroid";
import FurnitureIcon from "@material-ui/icons/Weekend";
import PlayIcon from "@material-ui/icons/Games";
import BuildIcon from "@material-ui/icons/Build";
import EducationIcon from "@material-ui/icons/CastForEducation";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import ServicesIcon from "@material-ui/icons/MonetizationOnRounded";
import BoatIcon from "@material-ui/icons/DirectionsBoat";
import ModeIcon from "@material-ui/icons/Loyalty";
import PlusIcon from "@material-ui/icons/Add";

import useStyles from "./Styles";
import { OptionMenu, OpenMenu } from "./InterfacesHeader";
import ExtendedMenuItem from "./ExtendedMenuItem";

enum SubMenu {
  PropertySell,
  PropertyRent,
  Computer,
  Electrodomestic,
}

interface Props {
  onClick: (index: number) => void;
  open: OpenMenu;
}

export default function HeaderCategories({
  open,
  onClick,
}: Props): ReactElement {
  const classes = useStyles();
  const cars = [
    "Autos usados",
    "Autos nuevos",
    "Motocicletas",
    "Camiones",
    "Buses",
    "Renta de autos",
    "Piezas y Accesorios",
  ];
  const sellSubHomeProperties = [
    "Casas",
    "Apartamentos",
    "Terrenos",
    "Ranchos",
    "Fincas",
    "Negocios",
    "Locales",
    "Bodegas",
    "Oficinas",
    "Edificios",
  ];
  const computers = [
    "Computadoras y Laptos",
    "Impresoras, Fax, Scanners",
    "Accesorios",
    "Ipads y Tablets",
    "Monitores",
    "Partes de computadora",
    "Internet",
  ];
  const electrodomestic = [
    "Pantallas",
    "Refrigeradoras",
    "Cocinas",
    "Aire Acondicionado",
    "Otros Electrodomésticos",
  ];
  const jobs = ["Tiempo Completo", "Part-Time", "Por Proyecto"];
  const pets = [
    "Perros",
    "Gatos",
    "Pareja",
    "Caballos",
    "Ganado",
    "Reptiles",
    "Peces",
    "Pájaros",
    "Adoptar",
    "Dar en Adopción",
    "Servicios para mascotas",
    "Se Busca",
    "Alimento",
  ];
  const home = [
    "Muebles",
    "Muebles de oficina",
    "Ventanas",
    "Pisos y Alfombras",
    "Articulos de cocina",
    "Articulos de jardín",
    "Decoración y Lamparas",
  ];
  const style = [
    "Ropa",
    "Zapatos",
    "Antigüedades",
    "Arte",
    "Grupo Musical",
    "Discos",
    "Colecciones",
  ];
  const construction = [
    "Servicios y Tiendas",
    "Ferretería",
    "Plomería",
    "Reparación y Mantenimiento",
    "Herramientas",
    "Equipo Pesado",
    "Reciclaje",
    "Materiales",
    "Contrucciones",
    "Carpinteria",
  ];
  const services = [
    "Abogados",
    "Medicina",
    "Diseñador Web",
    "Programador",
    "Consultorio",
    "Turismo",
    "Inversiones",
    "Emprendedores",
    "Mayoristas",
    "Venta de negocio",
    "Otros",
  ];
  const toys = [
    "Juguetes",
    "Artículos para bebes",
    "Muebles para bebe",
    "Coches",
  ];
  const sports = [
    "Bicicletas",
    "Juegos",
    "Surf",
    "Maquinas de entrenamiento",
    "Pelotas",
  ];
  const education = [
    "Idiomas",
    "Técnicos",
    "Informático",
    "Licenciaturas",
    "Postgrado Maestrias",
    "Seminarios",
    "Libros",
  ];
  const boats = ["Botes", "Partes maritimas", "Yates", "Alquiler"];
  const [openPropertySell, setOpenPropertySell] = useState(false);
  const [openPropertyRent, setOpenPropertyRent] = useState(false);
  const [openComputer, setOpenComputer] = useState(false);
  const [openElectrodomestic, setOpenElectrodomestic] = useState(false);

  const handleOpenProperty = (option: SubMenu) => {
    switch (option) {
      case SubMenu.PropertySell:
        return setOpenPropertySell(!openPropertySell);
      case SubMenu.PropertyRent:
        return setOpenPropertyRent(!openPropertyRent);
      case SubMenu.Computer:
        return setOpenComputer(!openComputer);
      case SubMenu.Electrodomestic:
        return setOpenElectrodomestic(!openElectrodomestic);
    }
  };
  return (
    <div className={classes.listMenu}>
      <List component="nav">
        <div>
          <ListItem button onClick={() => onClick(OptionMenu.Car)}>
            <ListItemIcon>
              <CarIcon />
            </ListItemIcon>
            <ListItemText primary="Vehículos" />
            {open.cars ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <ExtendedMenuItem
            list={cars}
            isDisplayed={open.cars}
            isSubnested={false}
          />
        </div>

        <ListItem button onClick={() => onClick(OptionMenu.HomeProperty)}>
          <ListItemIcon>
            <HomesteadIcon />
          </ListItemIcon>
          <ListItemText primary="Bienes Raíces" />
          {open.properties ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open.properties} timeout="auto" unmountOnExit>
          <ListItem
            button
            className={classes.nested}
            onClick={() => handleOpenProperty(SubMenu.PropertySell)}
          >
            <ListItemIcon>
              <PlusIcon />
            </ListItemIcon>
            <ListItemText primary="Venta" />
            {openPropertySell ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <ExtendedMenuItem
            list={sellSubHomeProperties}
            isDisplayed={openPropertySell}
            isSubnested={true}
          />

          <div>
            <ListItem
              button
              className={classes.nested}
              onClick={() => handleOpenProperty(SubMenu.PropertyRent)}
            >
              <ListItemIcon>
                <PlusIcon />
              </ListItemIcon>
              <ListItemText primary="Alquiler" />
              {openPropertyRent ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <ExtendedMenuItem
              list={sellSubHomeProperties}
              isDisplayed={openPropertyRent}
              isSubnested={true}
            />
          </div>

          <ExtendedMenuItem
            list={["Nuevos proyectos", "Renta vacacional"]}
            isDisplayed={true}
            isSubnested={false}
          />
        </Collapse>

        {/* Starts Electronica */}
        <div>
          <ListItem button onClick={() => onClick(OptionMenu.Electronic)}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Electrónica" />
            {open.electronics ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.electronics} timeout="auto" unmountOnExit>
            {/* Starts Computers */}
            <ListItem
              button
              className={classes.nested}
              onClick={() => handleOpenProperty(SubMenu.Computer)}
            >
              <ListItemIcon>
                <PlusIcon />
              </ListItemIcon>
              <ListItemText primary={"Computadoras"} />
              {openComputer ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <ExtendedMenuItem
              list={computers}
              isSubnested
              isDisplayed={openComputer}
            />

            {/* Starts Electrodomestic */}

            <ListItem
              button
              className={classes.nested}
              onClick={() => handleOpenProperty(SubMenu.Electrodomestic)}
            >
              <ListItemIcon>
                <PlusIcon />
              </ListItemIcon>
              <ListItemText primary={"Electrodomésticos"} />
              {openElectrodomestic ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <ExtendedMenuItem
              list={electrodomestic}
              isSubnested
              isDisplayed={openElectrodomestic}
            />

            <ExtendedMenuItem
              list={["Celulares", "Audio y Video", "Accesorios"]}
              isSubnested={false}
              isDisplayed={true}
            />
          </Collapse>

          {/* Trabajos */}
          <ListItem button onClick={() => onClick(OptionMenu.Jobs)}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Trabajos" />
            {open.jobs ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={jobs}
            isSubnested={false}
            isDisplayed={open.jobs}
          />

          {/* Mascotas y Animales */}
          <ListItem button onClick={() => onClick(OptionMenu.Pets)}>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Mascotas y Animales" />
            {open.pets ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={pets}
            isSubnested={false}
            isDisplayed={open.pets}
          />

          {/* Muebles Hogar Jardin */}
          <ListItem button onClick={() => onClick(OptionMenu.Home)}>
            <ListItemIcon>
              <FurnitureIcon />
            </ListItemIcon>
            <ListItemText primary="Hogar Muebles Jardín" />
            {open.home ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={home}
            isSubnested={false}
            isDisplayed={open.home}
          />

          {/* Ropa Estilo */}
          <ListItem button onClick={() => onClick(OptionMenu.Styles)}>
            <ListItemIcon>
              <ModeIcon />
            </ListItemIcon>
            <ListItemText primary="Moda Prendas Arte" />
            {open.style ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={style}
            isSubnested={false}
            isDisplayed={open.style}
          />

          {/* Construccion */}
          <ListItem button onClick={() => onClick(OptionMenu.Construction)}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Construcción" />
            {open.construction ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={construction}
            isSubnested={false}
            isDisplayed={open.construction}
          />

          {/* Servicios */}
          <ListItem button onClick={() => onClick(OptionMenu.Services)}>
            <ListItemIcon>
              <ServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Servicios" />
            {open.services ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={services}
            isSubnested={false}
            isDisplayed={open.services}
          />

          {/* Educacion */}
          <ListItem button onClick={() => onClick(OptionMenu.Education)}>
            <ListItemIcon>
              <EducationIcon />
            </ListItemIcon>
            <ListItemText primary="Educación" />
            {open.education ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={education}
            isSubnested={false}
            isDisplayed={open.education}
          />

          {/* Juguetes */}
          <ListItem button onClick={() => onClick(OptionMenu.Toys)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Juguetes" />
            {open.toys ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={toys}
            isSubnested={false}
            isDisplayed={open.toys}
          />

          {/* Deportes */}
          <ListItem button onClick={() => onClick(OptionMenu.Sports)}>
            <ListItemIcon>
              <SportsSoccerIcon />
            </ListItemIcon>
            <ListItemText primary="Deportes" />
            {open.sports ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={sports}
            isSubnested={false}
            isDisplayed={open.sports}
          />

          {/* Barcos */}
          <ListItem button onClick={() => onClick(OptionMenu.Boats)}>
            <ListItemIcon>
              <BoatIcon />
            </ListItemIcon>
            <ListItemText primary="Maritimo" />
            {open.boats ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ExtendedMenuItem
            list={boats}
            isSubnested={false}
            isDisplayed={open.boats}
          />
        </div>
      </List>
    </div>
  );
}
