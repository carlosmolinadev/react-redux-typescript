import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

type Inputs = {
  example: string;
  exampleRequired: string;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: string;
}

interface Person {
  name: string[];
}

interface People {
  people: Person[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function App() {
  const { control, handleSubmit } = useForm<IFormInput>();
  const [person, setPerson] = useState<Person>({ name: ["Carlos", "Julio"] });
  const [age, setAge] = useState([{ value: 10 }, { value: 20 }, { value: 30 }]);

  //   const age = [{ value: 10 }, { value: 20 }, { value: 30 }];

  //   const persona:Person = {name:'carlos'}
  //   const personas:People = {people:[persona, persona]}
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const classes = useStyles();

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            onChange={onChange}
            label="Filled"
            variant="filled"
            value={value}
          />
        )}
      />

      <Controller
        name="trinity"
        control={control}
        as={
          <Select>
            {age.map((a) => (
              <MenuItem key={a.value} value={a.value}>
                {a.value}
              </MenuItem>
            ))}
          </Select>
        }
      />

      <Controller
        as={
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        }
        name="Select"
        control={control}
      />

      <input type="submit" />
    </form>
  );
}
