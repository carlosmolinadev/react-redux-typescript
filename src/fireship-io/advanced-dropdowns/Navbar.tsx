import "./Navbar.css";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import Car from "@material-ui/icons/DriveEta";
import PetsIcon from "@material-ui/icons/Pets";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import WorkIcon from "@material-ui/icons/Work";
import Phone from "@material-ui/icons/PhoneAndroid";
import Furniture from "@material-ui/icons/Weekend";
import BuildIcon from "@material-ui/icons/Build";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import Services from "@material-ui/icons/MonetizationOnRounded";
import { CSSTransition } from "react-transition-group";

interface Props {
  children?: React.ReactNode;
}

function App() {
  return (
    <Navbar>
      <NavItem icon={<Car />} />
      <NavItem icon={<Car />} />
      <NavItem icon={<Car />} />

      <NavItem icon={<Car />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props: any) {
  console.log(props);
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props: any) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuHeight(menuHeight);
  }, []);

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props: any) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Car />}
            rightIcon={<Car />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem leftIcon="🦧" rightIcon={<Car />} goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Car />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Car />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Car />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Car />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Car />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Car />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;

// interface Props {
//   children?: React.ReactNode;
// }

// export default function Bar({}: Props): ReactElement {
//   return (
//     <Navbar>
//       <NavItem icon={<Car />} />
//       <NavItem icon={<PetsIcon />} />
//       <NavItem icon={<HomeWorkIcon />} />

//       <NavItem icon={<WorkIcon />}>
//         <DropdownMenu></DropdownMenu>
//       </NavItem>
//     </Navbar>
//   );
// }

// function Navbar(props: any) {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">{props.children}</ul>
//     </nav>
//   );
// }

// function NavItem(props: any) {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className="nav-item">
//       <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
//         {props.icon}
//       </a>

//       {open && props.children}
//     </li>
//   );
// }

// function DropdownMenu() {
//     const [activeMenu, setActiveMenu] = useState('main');
//     const [menuHeight, setMenuHeight] = useState(null);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//       setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//     }, [])

//     function calcHeight(el) {
//       const height = el.offsetHeight;
//       setMenuHeight(height);
//     }
