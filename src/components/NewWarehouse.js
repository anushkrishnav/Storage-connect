import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { db } from './firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewWarehouse() {
  const classes = useStyles();
  const [location, setLocation] = useState('');
  const [name, setName] = useState(''); 
  const [rent, setRent] = useState();
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    //const warehouseRef = firebase.database().ref();
    const warehouse = {
      name: name,
      location: location,
      rent : rent,
      lenght: length,
      height: height,
      width: width,
    }
    var coll = db.collection("warehouses").doc("details")
    coll.set(warehouse);
    
    //warehouseRef.push(warehouse);
    setName('');
    setLocation('');
    setRent('');
    setLength('');
    setHeight('');
    setWidth('');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="location"
                name="location"
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                autoFocus
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="rent"
                label="Rent"
                name="rent"
                autoComplete="rent"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="height"
                name="height"
                variant="outlined"
                required
                fullWidth
                id="height"
                label="Height"
                autoFocus
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="width"
                name="width"
                variant="outlined"
                required
                fullWidth
                id="width"
                label="Width"
                autoFocus
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="length"
                name="length"
                variant="outlined"
                required
                fullWidth
                id="length"
                label="Length"
                autoFocus
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
    </Container>
  );
}