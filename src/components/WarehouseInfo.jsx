import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: '50px',
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    position: "absolute",
    width: "50%",
    height: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "20%",
    left: "25%",
  },
}));

export default function WarehouseInfo({ name, location, info }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className="text-center">More Info</h2>
      <Typography variant="h5" component="h2">
        Rent : USD {info}
      </Typography>
      <Typography variant="h5" component="h2">
        Owner name: {name}
      </Typography>
      <Typography variant="h5" component="h2">
        warehouse Location: {location}
      </Typography>
    </div>
  );

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>More Info</Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Card>
  );
}
