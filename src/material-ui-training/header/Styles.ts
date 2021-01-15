import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customColor: {
      backgroundColor: "#7960fd",
    },
    root: {
      display: "flex",
    },
    logo: {
      color: "white",
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    search: {
      flex: 1,
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 2),
      flex: 1,
    },
    inputRoot: {
      color: "inherit",
    },
    list: {
      width: 300,
    },
    nested: {
      paddingLeft: theme.spacing(6),
    },
    subNested: {
      paddingLeft: theme.spacing(9),
    },
    listMenu: {
      width: 400,
      maxWidth: "60vw",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default useStyles;
