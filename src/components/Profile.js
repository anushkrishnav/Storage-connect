import { BrowserRouter as Router } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        backgroundColor: '#fff',
        backgroundClip: 'border-box',
        border: '4px solid rgba(0,0,0,.125)',
        borderRadius: '.25rem',
    },

    cardBody: {
        flex: '1 1 auto',
        minHeight: '1px',
        padding: '1rem',
    },

    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: '50px',
    },
}));

function Profile() {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
    <div class="container">
      <div className={classes.mainBody} padding="15px">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <Card className={classes.card} class="card mt-3">
                <CardContent className={classes.cardBody}>
                  <div class="d-flex flex-column align-items-center text-center">
                      <Typography component="h1" variant="h5">
                                Company Name
                      </Typography>
                      <br></br>
                      <Button type="submit" variant="contained" color="primary">Edit Info</Button>
                   
                  </div>
                </CardContent>
              </Card>
              <br></br>
              <Card class="card mt-3" className={classes.card} >
                 <List component="nav">
                  <ListItem button>
                    <ListItemText primary="Website" />
                    <span class="text-secondary">companywebsite.com</span>
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Email" />
                    <span class="text-secondary">email@gmail</span>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Phone" />
                    <span class="text-secondary">Street, City, State</span>
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemText primary="Owner" />
                    <span class="text-secondary">owner name</span>
                  </ListItem>
                </List>
              </Card>
            </div>

            <div class="col-md-8">
             
              <List component="nav">
                  <ListItem button>
                    <ListItemText primary="Warehouse 1" />
                    <span class="text-secondary">Address</span>
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Warehouse 2" />
                    <span class="text-secondary">Address</span>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Warehouse 3" />
                    <span class="text-secondary">Address</span>
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemText primary="Warehouse 4" />
                    <span class="text-secondary">Address</span>
                  </ListItem>
                </List>
            </div>
          </div>
        </div>
    </div>
    </Container>
  );
}

export default Profile;