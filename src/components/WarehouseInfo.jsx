import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: '35px',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)',
    wordWrap: 'break-word',
    backgroundColor: '#fff',
    backgroundClip: 'border-box',
    border: '3px solid rgba(0,0,0,.125)',
    borderRadius: '.25rem',
    padding: "5px",
  },

  pos: {
    marginBottom: '15px',
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
      <h2 id="simple-modal-title" className="text-center" style={{marginBottom:"10px"}}>More Info</h2>
      <Divider/>
      <Typography variant="h5" component="h2" style={{marginTop:"5px"}}>
        {info}
      </Typography>
      <Typography variant="h5" component="h2">
        WarehouseName
      </Typography>
      <Typography variant="h5" component="h2">
        WarehouseName
      </Typography>
    </div>
  );

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{marginBottom: "15px"}}>
        <Typography variant="h4" component="h2" style={{marginBottom: "5px"}}>
          {name}
        </Typography>
        <Divider/>
        <Typography className={classes.pos} color="textSecondary" variant="h5" style={{marginTop: "5px"}}>
          {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={handleOpen}>
        <Typography variant="h6">More Info</Typography>
        </Button>
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
