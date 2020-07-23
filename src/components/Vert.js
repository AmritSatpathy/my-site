import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Paper from '@material-ui/core/Paper';
import me from '../image/me1.png';
import Image from 'material-ui-image';
import Index from './Change'
import About from './About'
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
      width: '100%',
      maxWidth: 1420,
      '& svg': {
        margin: theme.spacing(1.5),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },
    flexGrow: 1,
    backgroundColor: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
    display: 'flex',
    height: 620,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,

  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 2fr)',
    gridGap: theme.spacing(2),
  },

  box1: {
    background: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 1)',
    color: 'white',
    padding: '0 10px',
    margin : '0 45px',
  },
  im: {
    boxShadow: '3px 2px 2px 2px rgba(63, 191, 191, 1)',
    borderRadius: 3,
    padding: 10, 
    alignSelf: 'flex-start'
  },
  box2: {
    background: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 1)',
    color: 'white',

    
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        
        className={classes.tabs}
      >
        <Tab label="HOME" {...a11yProps(0)} style={{ fontSize: '20px' ,color: '#2ce65d'}}/>
        <Tab label="ABOUT" {...a11yProps(1)} style={{ fontSize: '20px' ,color: '#2ce65d'}}/>
        <Tab label="RESUME" {...a11yProps(2)} style={{ fontSize: '20px' ,color: '#2ce65d'}}/>
        <Tab label="WORKS" {...a11yProps(3)} style={{ fontSize: '20px' ,color: '#2ce65d'}}/>
        <Tab label="CONTACT" {...a11yProps(4)} style={{ fontSize: '20px' ,color: '#2ce65d'}}/>
      </Tabs>
      <TabPanel value={value} index={0}>
      <Grid container spacing={0}  >
      <Grid item xs={12} sm={5} >
      <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="65%" >
       <img src={me} responsive className={classes.im} style={{ width: '90%', height: '50%'}} />
        <span style={{ fontSize: '40px' ,color: '#b0bec5'}}  >Amrit Satpathy</span>
        <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><Index/></span>
        <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
        <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
        <hr style={{color: '#03a9f4',backgroundColor: '#03a9f4',height: 3}}/>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Download CV&nbsp; 
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
          <span style={{ fontSize: '20px' ,color: '#03a9f4'}}  >|</span>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ marginLeft: '2rem' ,display: 'inline-flex',flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
          <br/>
        <Box className={classes.box2} fontWeight="fontWeightBold" height="62%"  overflow="auto">
        <About/>
        </Box>
      </Grid>
    </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={0}  >
      <Grid item xs={12} sm={5} >
      <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="65%" >
       <img src={me} responsive className={classes.im} style={{ width: '90%', height: '50%'}} />
        <span style={{ fontSize: '40px' ,color: '#b0bec5'}}  >Amrit Satpathy</span>
        <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><Index/></span>
        <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
        <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
        <hr style={{color: '#03a9f4',backgroundColor: '#03a9f4',height: 3}}/>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Download CV&nbsp; 
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
          <span style={{ fontSize: '20px' ,color: '#03a9f4'}}  >|</span>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ marginLeft: '2rem' ,display: 'inline-flex',flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
          <br/>
        <Box className={classes.box2} fontWeight="fontWeightBold" height="62%"  overflow="auto">
        <About/>
        </Box>
      </Grid>
    </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={0}  >
      <Grid item xs={12} sm={5} >
      <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="65%" >
       <img src={me} responsive className={classes.im} style={{ width: '90%', height: '50%'}} />
        <span style={{ fontSize: '40px' ,color: '#b0bec5'}}  >Amrit Satpathy</span>
        <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><Index/></span>
        <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
        <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
        <hr style={{color: '#03a9f4',backgroundColor: '#03a9f4',height: 3}}/>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Download CV&nbsp; 
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
          <span style={{ fontSize: '20px' ,color: '#03a9f4'}}  >|</span>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ marginLeft: '2rem' ,display: 'inline-flex',flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
          <br/>
        <Box className={classes.box2} fontWeight="fontWeightBold" height="62%"  overflow="auto">
        <About/>
        </Box>
      </Grid>
    </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid container spacing={0}  >
      <Grid item xs={12} sm={5} >
      <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="45%" >
       <img src={me} responsive className={classes.im} style={{ width: '90%', height: '50%'}} />
        <span style={{ fontSize: '40px' ,color: '#b0bec5'}}  >Amrit Satpathy</span>
        <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><Index/></span>
        <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
        <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
        <hr style={{color: '#03a9f4',backgroundColor: '#03a9f4',height: 3}}/>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Download CV&nbsp; 
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
          <span style={{ fontSize: '20px' ,color: '#03a9f4'}}  >|</span>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ marginLeft: '2rem' ,display: 'inline-flex',flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
          <br/>
        <Box className={classes.box2} fontWeight="fontWeightBold" height="62%"  overflow="auto">
        <About/>
        </Box>
      </Grid>
    </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Grid container spacing={0}  >
      <Grid item xs={12} sm={5} >
      <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" >
       <img src={me} responsive className={classes.im} style={{ width: '90%', height: '50%'}} />
        <span style={{ fontSize: '40px' ,color: '#b0bec5'}}  >Amrit Satpathy</span>
        <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><Index/></span>
        <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
        <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
        <hr style={{color: '#03a9f4',backgroundColor: '#03a9f4',height: 3}}/>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Download CV&nbsp; 
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
          <span style={{ fontSize: '20px' ,color: '#03a9f4'}}  >|</span>
          <span style={{ fontSize: '20px' ,color: '#2ce65d'}} ><a style={{ marginLeft: '2rem' ,display: 'inline-flex',flex: 1, flexDirection: 'row', alignItems: 'center'}} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
          <br/>
        <Box className={classes.box2} fontWeight="fontWeightBold" height="62%"  overflow="auto">
        <About/>
        </Box>
      </Grid>
    </Grid>
      </TabPanel>
    </div>
  );
}
