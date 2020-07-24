import React from 'react';
import { makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import vit from '../image/VIT.png';
import dav from '../image/download.jpg';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      color: '#b0bec5',
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #0F2027 30%,#203A43 60% ,#2C5364 90% )',
      fontSize: '30px'
   },
   paper1: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #0F2027 30%,#203A43 60% ,#2C5364 90% )',
      fontSize: '20px',
      lineHeight: 2,
      height: "100%",
   },
   paper2: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #0F2027 30%,#203A43 60% ,#2C5364 90% )',
      fontSize: '20px',
      lineHeight: 3.2,
      height: "100%",
   },
   paper3: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #0F2027 30%,#203A43 60% ,#2C5364 90% )',
      fontSize: '10px',

      lineHeight: 3.2,
      height: "50%",
   },
   im: {
      boxShadow: '3px 2px 2px 2px rgba(0, 0, 0, 1)',
      borderRadius: 3,
      alignSelf: 'flex-start'
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

export default function CenteredGrid() {
   const classes = useStyles();


   return (
      <div className={classes.root}>
         <Grid container spacing={1.8}>
            <Grid item xs={12}>
               <Paper className={classes.paper}>
                  <Typography variant="h3" style={{ fontSize: '30px', color: '#b0bec5', textAlign: "center" }}>
                     About Me
                  </Typography>
               </Paper>
            </Grid>
            <Grid item xs={6}>
               <Paper className={classes.paper1} >
                  <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                     I am Ryan Adlard, web designer
                     from USA, California. I have rich experience in web site design
                     and building and customization, also I am good at wordpress.
                     I love to talk with you about our unique.
          </Typography>
               </Paper>
            </Grid>
            <Grid item xs={6}>
               <Paper className={classes.paper2}>
                  <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                     Age :- &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;20<br />
                  Date of birth :-&emsp;1st Nov<br />
                  Phone :-&emsp;&nbsp;7683982955<br />
                  Address:-&nbsp;Bhubaneswar<br />
                  Nationality :-&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian
                  </Typography>
               </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper className={classes.paper}>Educational Details</Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper className={classes.paper3}>
                  <img src={dav} className={classes.im} alt={dav} style={{ width: '20%', height: '10%' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span style={{ fontSize: '25px', color: '#b0bec5', textDecorationLine: 'underline', }}  >12th Grade (2016 - 2018)</span><br />
                  <span style={{ fontSize: '18px', color: '#b0bec5', textAlign: 'center' }}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scored 93.4% in CBSE board exam taking science branch </span></Paper>
               <Paper className={classes.paper3}>
                  <img src={vit} responsive className={classes.im} alt={vit} style={{ width: '10%', height: '50%' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span style={{ fontSize: '25px', color: '#b0bec5', textDecorationLine: 'underline', }}  >B.tech in Computer Science (2018 - present)</span><br />
                  <span style={{ fontSize: '18px', color: '#b0bec5', textAlign: 'center' }}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scored 93.4% in CBSE board exam taking science branch </span>
               </Paper>
            </Grid>


         </Grid>
      </div>
   );
}
