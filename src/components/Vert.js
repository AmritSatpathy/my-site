import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import me from '../image/me1.png';
import Index from './Change'
import About from './About'

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
        <Box p={3}>
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
    },
    height: 'inherit',
    flexGrow: 1,
    backgroundColor: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
    display: 'flex',
  },
  tabs: {
    borderRight: `5px solid ${theme.palette.divider}`,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
    backgroundColor: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 2fr)',
    gridGap: theme.spacing(2),
  },

  box1: {
    background: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 1)',
    color: 'white',
    padding: '0 10px',
    margin: '0 45px',
  },
  im: {
    boxShadow: '3px 2px 2px 2px rgba(63, 191, 191, 1)',
    borderRadius: 3,
    padding: 10
  },
  box2: {
    background: 'linear-gradient(45deg, #0F2027 30%,#203A43 60% ,#2C5364 90% )',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 1)',
    color: 'white',


  },
}));

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

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
        <Tab label="HOME" {...a11yProps(0)} style={{ fontSize: '20px', color: '#2ce65d' }} />
        <Tab label="ABOUT" {...a11yProps(1)} style={{ fontSize: '20px', color: '#2ce65d' }} />
        <Tab label="RESUME" {...a11yProps(2)} style={{ fontSize: '20px', color: '#2ce65d' }} />
        <Tab label="WORKS" {...a11yProps(3)} style={{ fontSize: '20px', color: '#2ce65d' }} />
        <Tab label="CONTACT" {...a11yProps(4)} style={{ fontSize: '20px', color: '#2ce65d' }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}  >
          <Grid item xs={12} sm={6} >
              <Box className={classes.box1} fontWeight="fontWeightBold" width="75%" height="60%" order={1} justifyContent="flex-start" overflow="auto" >
                <img src={me} responsive className={classes.im} alt ="me(-:" style={{ width: '95%', height: '50%' }} />
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" style={{ fontSize: '40px', color: '#b0bec5', textAlign: "center" }}>Amrit Satpathy</Typography>
                  <Typography variant="h3" style={{ fontSize: '20px', color: '#2ce65d', textAlign: "center" }}>
                    <Index />
                  </Typography><br />
                  <Typography variant="h3" style={{ fontSize: '20px', color: '#2ce65d', textAlign: "center" }}>
                    <Link  style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" >
                      <LinkedInIcon style={{ fontSize: 28 }} color="primary" />
                      </Link>
                    <Link  href="https://github.com/AmritSatpathy" >
                      <GitHubIcon style={{ fontSize: 28 }} color="primary" />
                      </Link><br /><br /><br />
                    <hr style={{ color: '#03a9f4', backgroundColor: '#b0bec5', height: 1 }} />
                  </Typography>
                  <Typography variant="h3" style={{ fontSize: '20px', color: '#2ce65d', textAlign: "center" }}>
                    <Link  style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">
                      Download CV&nbsp;
                     <CloudDownloadRoundedIcon style={{ fontSize: 36 }} color="primary" />
                     </Link>
                    <span style={{ color: '#b0bec5' }} >&nbsp;&nbsp;
                    |
                    </span >
                    <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">
                      Contact Me
                        <CallIcon style={{ fontSize: 36 }} color="primary" />
                    </Link>
                  </Typography>
                </ThemeProvider>
              </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <br />
            <Box className={classes.box2} height="55%" width="75%" overflow="auto" order={2} justifyContent="flex-start">
              <About />
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={0}  >
          <Grid item xs={12} sm={5} >
            <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="45%" >
              <img src={me} responsive className={classes.im} alt ="me(-:" style={{ width: '90%', height: '50%' }} />
              <span style={{ fontSize: '40px', color: '#b0bec5' }}  >Amrit Satpathy</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><Index /></span>
              <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
              <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
              <hr style={{ color: '#03a9f4', backgroundColor: '#03a9f4', height: 3 }} />
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Download CV&nbsp;
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
              <span style={{ fontSize: '20px', color: '#03a9f4' }}  >|</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <br />
            <Box className={classes.box2} fontWeight="fontWeightBold" height="62%" overflow="auto">
              <About />
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={0}  >
          <Grid item xs={12} sm={5} >
            <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="65%" >
              <img src={me} responsive className={classes.im} alt ="me(-:" style={{ width: '90%', height: '50%' }} />
              <span style={{ fontSize: '40px', color: '#b0bec5' }}  >Amrit Satpathy</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><Index /></span>
              <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
              <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
              <hr style={{ color: '#03a9f4', backgroundColor: '#03a9f4', height: 3 }} />
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Download CV&nbsp;
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
              <span style={{ fontSize: '20px', color: '#03a9f4' }}  >|</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <br />
            <Box className={classes.box2} fontWeight="fontWeightBold" height="62%" overflow="auto">
              <About />
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={0}  >
          <Grid item xs={12} sm={5} >
            <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" height="45%" >
              <img src={me} responsive className={classes.im} alt ="me(-:" style={{ width: '90%', height: '50%' }} />
              <span style={{ fontSize: '40px', color: '#b0bec5' }}  >Amrit Satpathy</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><Index /></span>
              <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
              <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
              <hr style={{ color: '#03a9f4', backgroundColor: '#03a9f4', height: 3 }} />
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Download CV&nbsp;
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
              <span style={{ fontSize: '20px', color: '#03a9f4' }}  >|</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <br />
            <Box className={classes.box2} fontWeight="fontWeightBold" height="62%" overflow="auto">
              <About />
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container spacing={0}  >
          <Grid item xs={12} sm={5} >
            <Box className={classes.box1} fontWeight="fontWeightBold" width="90%" >
              <img src={me} responsive className={classes.im} alt ="me(-:" style={{ width: '90%', height: '50%' }} />
              <span style={{ fontSize: '40px', color: '#b0bec5' }}  >Amrit Satpathy</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><Index /></span>
              <a style={{ marginLeft: '0rem', marginRight: '5rem' }} href="www.linkedin.com/in/amrit-satpathy" ><LinkedInIcon style={{ fontSize: 28 }} /></a>
              <a href="https://github.com/AmritSatpathy" ><GitHubIcon style={{ fontSize: 28 }} /></a>
              <hr style={{ color: '#03a9f4', backgroundColor: '#03a9f4', height: 3 }} />
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Download CV&nbsp;
          <CloudDownloadRoundedIcon style={{ fontSize: 36 }} /></a></span>
              <span style={{ fontSize: '20px', color: '#03a9f4' }}  >|</span>
              <span style={{ fontSize: '20px', color: '#2ce65d' }} ><a style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="mailto:yourcompany@gmail.com">Contact Me<CallIcon style={{ fontSize: 36 }} /></a></span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <br />
            <Box className={classes.box2} fontWeight="fontWeightBold" height="62%" overflow="auto">
              <About />
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
