import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import crime from '../image/crime.jpg';
import Dairy from '../image/Dairy.jpg';
import jets from '../image/Email.jpg';
import toxic from '../image/toxic.jpg';
import pubg from '../image/pubg.jpg';
import box from '../image/box.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: '#b0bec5',
    },
    table: {
        width: "100%",
        background: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
    },
    im: {
        boxShadow: '3px 2px 2px 2px rgba(0, 0, 0, 1)',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center'
    },
    box1: {
        background: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
        borderRadius: 5,
        color: 'white',
        padding: '0 10px',
    },
    box2: {
        background: 'linear-gradient(45deg, #141E30 30%,#243B55 90%)',
        borderRadius: 5,
        color: 'white',
        padding: '0 10px',
        height: "100%",
        lineHeight: 100,
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

export default function Works() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={1.8}>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                        <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "center" }}>
                            Projects
                  </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className={classes.im} src={toxic} alt={toxic} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                               &emsp;&emsp;&emsp;
                             <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                             <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="https://github.com/AmritSatpathy/toxicCommentsclassification">
                             Toxic Comment Classification
                               </Link>
                               </Typography>
                        </div>
                        <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                           Worked on various different types of neural models like BiLSTM ,GRU,Attention Model and various on the toxic comment dataset from Kaggle 
                           </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className={classes.im} src={jets} alt={jets} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                               &emsp;&emsp;&emsp;
                             <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                             <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="https://github.com/AmritSatpathy/MyBot">
                             Auto Email Replies using Neural Network
                               </Link>
                               </Typography>
                        </div>
                        <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                            Developed an Automated Email Replying system which uses Neural Network to analyse the emotion of the email and send an reply to it 
                           </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className={classes.im} src={Dairy} alt={Dairy} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                               &emsp;&emsp;&emsp;
                             <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                             <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="https://github.com/AmritSatpathy/googleauth_with_node">
                             Dairy Keeping Web-App
                               </Link>
                               </Typography>
                        </div>
                        <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                            Developed an web app which Sign-Ins users with there Gogle Account and write in there Dairy or read publicly stored Dairies
                           </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className={classes.im} src={pubg} alt={pubg} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                               &emsp;&emsp;&emsp;
                             <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                             <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="https://github.com/AmritSatpathy/toxicCommentsclassification">
                             Pubg - Win Prediction
                               </Link>
                               </Typography>
                        </div>
                        <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                           Worked on few Linear Regression Models which predicts the percentage of a person winning a game of pubg according to his/her previous stats
                           </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className={classes.im} src={crime} alt={crime} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                               &emsp;&emsp;&emsp;
                             <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                             <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="https://github.com/AmritSatpathy/crimeapp">
                             Crime Reporting Website
                               </Link>
                               </Typography>
                        </div>
                        <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                            Developed a websiteusing Laravel Framework which will help authorities to act immediatly on crime reported by users in nearby area
                           </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className={classes.im} src={box} alt={box} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                               &emsp;&emsp;&emsp;
                             <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                             <Link style={{ marginLeft: '2rem', display: 'inline-flex', flex: 1, flexDirection: 'row', alignItems: 'center' }} href="https://github.com/AmritSatpathy/basicunity">
                             Box Crash 
                               </Link>
                               </Typography>
                        </div>
                        <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                            Developed a simple game with the main objective being to avoid crashing into obstacles on the way to pass levels
                           </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
