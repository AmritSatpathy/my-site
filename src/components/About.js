import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
      background: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
      fontSize: '30px',
      color: '#b0bec5'
   },
   paper1: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
      fontSize: '20px',
      color: '#b0bec5',
      lineHeight: 2,
      height: "100%",
   },
   paper2: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
      fontSize: '20px',
      color: '#b0bec5',
      lineHeight: 3.2,
      height: "100%",
   },
   paper3: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #360033 30%,#0b8793 90%)',
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

export default function CenteredGrid() {
   const classes = useStyles();


   return (
      <div className={classes.root}>
         <Grid container spacing={0}>
            <Grid item xs={12}>
               <Paper className={classes.paper}>About Me</Paper>
            </Grid>
            <Grid item xs={6}>
               <Paper className={classes.paper1}>I am Ryan Adlard, web designer
               from USA, California. I have rich experience in web site design
               and building and customization, also I am good at wordpress.
          I love to talk with you about our unique.</Paper>
            </Grid>
            <Grid item xs={6}>
               <Paper className={classes.paper2}>
                  <div>Age :- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;20</div>
                  <div>Date of birth :-&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;1st Nov</div>
                  <div>Phone :-&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7683982955</div>
                  <div>Address :-&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bhubaneswar</div>
                  <div>Nationality :-&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian</div>
               </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper className={classes.paper}>Educational Details</Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper className={classes.paper3}>
       <img src={dav} responsive className={classes.im} alt= {dav} style={{ width: '20%', height: '10%'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span style={{ fontSize: '25px' ,color: '#b0bec5',textDecorationLine: 'underline',}}  >12th Grade (2016 - 2018)</span><br/>
       <span style={{ fontSize: '18px' ,color: '#b0bec5',textAlign: 'center'}}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scored 93.4% in CBSE board exam taking science branch </span></Paper>
       <Paper className={classes.paper3}>
       <img src={vit} responsive className={classes.im} alt= {vit} style={{ width: '10%', height: '50%'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span style={{ fontSize: '25px' ,color: '#b0bec5',textDecorationLine: 'underline',}}  >B.tech in Computer Science (2018 - present)</span><br/>
       <span style={{ fontSize: '18px' ,color: '#b0bec5',textAlign: 'center'}}  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scored 93.4% in CBSE board exam taking science branch </span>
       </Paper>
            </Grid>
               
            
         </Grid>
      </div>
   );
}
