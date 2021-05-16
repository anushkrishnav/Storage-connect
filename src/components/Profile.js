import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import {Container,ListItem,List,ListItemText,Divider,Typography,Button} from '@material-ui/core';

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
        border: '3px solid rgba(0,0,0,.125)',
        borderRadius: '.25rem',
        marginBottom: '20px',
    },

    cardBody: {
        flex: '1 1 auto',
        minHeight: '1px',
        padding: '2px',
    },

    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: '50px',
    },

    listItemText:{
        fontSize:'3rem',
    },
}));

export default function NewWarehouse() {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
    <div class="container">
      <div className={classes.mainBody} padding="15px">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <Card className={classes.card} >
                <CardContent className={classes.cardBody}>
                  <div class="d-flex flex-column align-items-center text-center">
                      <Typography component="h1" variant="h4" style={{marginTop:"25px", marginBottom:"20px"}}>
                                Company Name
                      </Typography>
                      <br></br>
                      <Button type="submit" variant="contained" color="primary">Edit Info</Button>
                   
                  </div>
                </CardContent>
              </Card>
              <Card className={classes.card} >
                 <List component="nav">
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5"><LanguageIcon style={{fontSize:"15px"}}/> Website</Typography>}/>
                    <span class="text-lg" >companywebsite.com</span>
                    
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5"><EmailIcon style={{fontSize:"15px"}}/> Email</Typography>}/>
                    <span class="text-lg">email@gmail</span>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5"><PhoneIcon style={{fontSize:"15px"}}/> Phone</Typography>}/>
                    <span class="text-lg">(111) 111-1111</span>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5"><BusinessIcon style={{fontSize:"15px"}}/> Address</Typography>}/>
                    <span class="text-lg">Street, City, State</span>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5"><PersonIcon style={{fontSize:"15px"}}/> Owner</Typography>}/>
                    <span class="text-lg">owner name</span>
                  </ListItem>
                </List>
              </Card>
            </div>

            <div class="col-md-8">
             
              <List component="nav">
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5">Warehouse 1</Typography>}/>
                    <span class="text-lg">Address</span>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5">Warehouse 2</Typography>}/>
                    <span class="text-lg">Address</span>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5">Warehouse 3</Typography>}/>
                    <span class="text-lg">Address</span>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={<Typography variant="h5">Warehouse 4</Typography>}/>
                    <span class="text-lg">Address</span>
                  </ListItem>
                </List>
            </div>
          </div>
        </div>
    </div>
    </Container>
  );
}