import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions } from "../hooks";
import Todo from "../interfaces/Todo";

interface Props {}
type Inputs = {
  text: string;
  name: string;
};

const TodoSchema = yup.object().shape({
  name: yup.string().trim().required(),
  text: yup.string().required("Esto debe ser texto"),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      margin: "2rem",
      "& .MuiTextField-root": {
        marginTop: "1rem",
        marginBottom: "1rem",
      },
    },
    root: {
      "& > *": {
        margin: "2rem",
      },
    },
  })
);

export default function TodoForm({}: Props): ReactElement {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors, reset } = useForm<Inputs>({
    resolver: yupResolver(TodoSchema),
  });

  const addTodo = useStoreActions((state) => {
    return state.addTodo;
  });

  const onSubmit = (data: any) => {
    console.log(data);
    addTodo(data);
    reset();
  };

  return (
    <div>
      <Container className={classes.form} maxWidth={"xs"}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <TextField
            name="name"
            label="Outlined"
            variant="outlined"
            fullWidth
            inputRef={register}
          />
          <TextField
            name="text"
            label="Outlined"
            variant="outlined"
            fullWidth
            inputRef={register}
            helperText={errors.text ? errors.text.message : null}
            error={!!errors.text}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}
