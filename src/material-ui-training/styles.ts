import { blue, green, orange, red } from "@material-ui/core/colors";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      height: 100,
      width: 100,
    },
    control: {
      padding: theme.spacing(1),
    },
  })
);

export const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#000",
    },
    type: "dark",
  },
  typography: {
    fontSize: 15,
    h1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "5rem",
      },
    },
  },
});

// const theme = createMuiTheme();

// theme.typography

// export const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: green[500],
//     },
//   },
// });
