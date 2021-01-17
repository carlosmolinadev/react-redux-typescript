import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 200,
      minWidth: 200,
      margin: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(2),
      color: "inherit",
    },
    media: {
      height: 150,
    },
  })
);

export default function SellCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"
          title="Ver anuncio"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            $500.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <LocationOnIcon />
        <Typography variant="subtitle2">San Salvador</Typography>
      </CardActions>
    </Card>
  );
}
