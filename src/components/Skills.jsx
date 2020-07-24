import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Line} from 'rc-progress';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      color: '#b0bec5',
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

export default function Skills() {
   const classes = useStyles();


   return (
      <div className={classes.root}>
         <Grid container spacing={1.8}>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "center" }}>
                     Skills
                  </Typography>
               </Box>
             </Grid>  
             <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "left" }}>
                    Languages
                  </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#b0bec5', textAlign: "center" }}>
                    Python
                   <Line percent="90" strokeWidth="4" strokeColor="#30289C" />
                   C++
                   <Line percent="90" strokeWidth="4" strokeColor="#30289C" />
                    C#
                   <Line percent="70" strokeWidth="4" strokeColor="#30289C" />
                   CSS
                   <Line percent="70" strokeWidth="4" strokeColor="#30289C" />
                   Bootstrap
                   <Line percent="65" strokeWidth="4" strokeColor="#30289C" />
                   JavaScript
                   <Line percent="85" strokeWidth="4" strokeColor="#30289C" />
                   HTML
                   <Line percent="95" strokeWidth="4" strokeColor="#30289C" />
                   Java
                   <Line percent="60" strokeWidth="4" strokeColor="#30289C" />
                   </Typography>
               </Box>
            </Grid> 
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "left" }}>
                    Frameworks
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#b0bec5', textAlign: "center" }}>
                   React JS
                   <Line percent="70" strokeWidth="4" strokeColor="#30289C" />
                   Node JS 
                   <Line percent="65" strokeWidth="4" strokeColor="#30289C" />
                   Laravel
                   <Line percent="80" strokeWidth="4" strokeColor="#30289C" />
                   Express
                   <Line percent="80" strokeWidth="4" strokeColor="#30289C" />
                   </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "left" }}>
                    Database
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#b0bec5', textAlign: "center" }}>
                   MySQL
                   <Line percent="70" strokeWidth="4" strokeColor="#30289C" />
                   MongoDB 
                   <Line percent="65" strokeWidth="4" strokeColor="#30289C" />
                   PostgreSQL
                   <Line percent="70" strokeWidth="4" strokeColor="#30289C" />
                   Memcached
                   <Line percent="40" strokeWidth="4" strokeColor="#30289C" />
                   CouchDB
                   <Line percent="40" strokeWidth="4" strokeColor="#30289C" />
                   Redis
                   <Line percent="80" strokeWidth="4" strokeColor="#30289C" />
                   </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "left" }}>
                    Tools
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#b0bec5', textAlign: "center" }}>
                   Unity
                   <Line percent="70" strokeWidth="4" strokeColor="#30289C" />
                   Blender 
                   <Line percent="65" strokeWidth="4" strokeColor="#30289C" />
                   Visual Studio
                   <Line percent="80" strokeWidth="4" strokeColor="#30289C" />
                   NetBeans
                   <Line percent="50" strokeWidth="4" strokeColor="#30289C" />
                   GIMP
                   <Line percent="45" strokeWidth="4" strokeColor="#30289C" />
                   OpenShot Video Editor
                   <Line percent="85" strokeWidth="4" strokeColor="#30289C" />
                   Android Studio
                   <Line percent="40" strokeWidth="4" strokeColor="#30289C" />
                   R Studio
                   <Line percent="50" strokeWidth="4" strokeColor="#30289C" />
                   Conda
                   <Line percent="85" strokeWidth="4" strokeColor="#30289C" />
                   PyCharm
                   <Line percent="90" strokeWidth="4" strokeColor="#30289C" />
                   </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "left" }}>
                    Machine Learning Techs
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#b0bec5', textAlign: "center" }}>
                   Keras/Tensorflow
                   <Line percent="80" strokeWidth="4" strokeColor="#30289C" />
                   Named Entity Recognition
                   <Line percent="75" strokeWidth="4" strokeColor="#30289C" />
                   Information Extraction
                   <Line percent="80" strokeWidth="4" strokeColor="#30289C" />
                  </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "left" }}>
                    Cloud Techs
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#b0bec5', textAlign: "center" }}>
                   Docker
                   <Line percent="75" strokeWidth="4" strokeColor="#30289C" />
                   AWS
                   <Line percent="85" strokeWidth="4" strokeColor="#30289C" />
                   Hortonworks Data Platform
                   <Line percent="90" strokeWidth="4" strokeColor="#30289C" />
                  </Typography>
               </Box>
            </Grid>
          </Grid>
      </div>
   );
}
