import React, { ReactElement } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useStyles, outerTheme } from "./styles";
import Button from "@material-ui/core/Button";
import {
  Checkbox,
  Grid,
  GridSpacing,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

interface Props {}

export default function Styles({}: Props): ReactElement {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState<GridSpacing>(3);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item md={6} xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid container item xs={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              tempore porro necessitatibus quas. Similique vitae ad recusandae
              veritatis ab corporis excepturi aliquam animi officia quisquam
              repellat minima non, inventore id.
            </p>
          </Grid>
          <Grid container item xs={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              tempore porro necessitatibus quas. Similique vitae ad recusandae
              veritatis ab corporis excepturi aliquam animi officia quisquam
              repellat minima non, inventore id.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// return (
//     <div>
//       <Button className={classes.sizeSmall}>Hook</Button>
//       <Button classes={{ root: classes.root, label: classes.label }}>
//         Hook
//       </Button>

//       <ThemeProvider theme={outerTheme}>
//         <Button color="secondary" variant="contained">
//           Hello
//         </Button>
//         <IconButton color="primary" aria-label="upload picture">
//           <PhotoCamera />
//         </IconButton>
//         <Typography variant="h1">Hello world</Typography>
//       </ThemeProvider>
//     </div>
//   );
