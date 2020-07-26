import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Line} from 'rc-progress';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      color: '#29168a',
   },
  
   im: {
      boxShadow: '3px 2px 2px 2px rgba(0, 0, 0, 1)',
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center'
   },
   box1: {
      background: 'linear-gradient(45deg, #24FE41 30%,#FDFC47 90%)',
      borderRadius: 5,
      color: 'white',
      padding: '0 10px',
   },
   box2: {
      background: 'linear-gradient(45deg, #24FE41 30%,#FDFC47 90%)',
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
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "center" ,fontFamily: 'BioRhyme'}}>
                     Skills<p></p>
                  </Typography>
               </Box>
             </Grid>  
             <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "left" ,fontFamily: 'BioRhyme'}}>
                    Languages<p></p>
                  </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#29168a', textAlign: "center" ,fontFamily: 'Caveat'}}>
                    Python
                   <Line percent="90" strokeWidth="2" strokeColor="#fc5a03" />
                   C++
                   <Line percent="90" strokeWidth="2" strokeColor="#fc5a03" />
                    C#
                   <Line percent="70" strokeWidth="2" strokeColor="#fc5a03" />
                   CSS
                   <Line percent="70" strokeWidth="2" strokeColor="#fc5a03" />
                   Bootstrap
                   <Line percent="65" strokeWidth="2" strokeColor="#fc5a03" />
                   JavaScript
                   <Line percent="85" strokeWidth="2" strokeColor="#fc5a03" />
                   HTML
                   <Line percent="95" strokeWidth="2" strokeColor="#fc5a03" />
                   Java
                   <Line percent="60" strokeWidth="2" strokeColor="#fc5a03" />
                   </Typography>
               </Box>
            </Grid> 
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "left",fontFamily: 'BioRhyme' }}>
                  <p></p>Frameworks<p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#29168a', textAlign: "center",fontFamily: 'Caveat'}}>
                   React JS
                   <Line percent="70" strokeWidth="2" strokeColor="#fc5a03" />
                   Node JS 
                   <Line percent="65" strokeWidth="2" strokeColor="#fc5a03" />
                   Laravel
                   <Line percent="80" strokeWidth="2" strokeColor="#fc5a03" />
                   Express
                   <Line percent="80" strokeWidth="2" strokeColor="#fc5a03" />
                   </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "left" ,fontFamily: 'BioRhyme'}}>
                  <p></p>Database<p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#29168a', textAlign: "center" ,fontFamily: 'Caveat'}}>
                   MySQL
                   <Line percent="70" strokeWidth="2" strokeColor="#fc5a03" />
                   MongoDB 
                   <Line percent="65" strokeWidth="2" strokeColor="#fc5a03" />
                   PostgreSQL
                   <Line percent="70" strokeWidth="2" strokeColor="#fc5a03" />
                   Memcached
                   <Line percent="40" strokeWidth="2" strokeColor="#fc5a03" />
                   CouchDB
                   <Line percent="40" strokeWidth="2" strokeColor="#fc5a03" />
                   Redis
                   <Line percent="80" strokeWidth="2" strokeColor="#fc5a03" />
                   </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "left",fontFamily: 'BioRhyme' }}>
                  <p></p>Tools<p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#29168a', textAlign: "center",fontFamily: 'Caveat' }}>
                   Unity
                   <Line percent="70" strokeWidth="2" strokeColor="#fc5a03" />
                   Blender 
                   <Line percent="65" strokeWidth="2" strokeColor="#fc5a03" />
                   Visual Studio
                   <Line percent="80" strokeWidth="2" strokeColor="#fc5a03" />
                   NetBeans
                   <Line percent="50" strokeWidth="2" strokeColor="#fc5a03" />
                   GIMP
                   <Line percent="45" strokeWidth="2" strokeColor="#fc5a03" />
                   OpenShot Video Editor
                   <Line percent="85" strokeWidth="2" strokeColor="#fc5a03" />
                   Android Studio
                   <Line percent="40" strokeWidth="2" strokeColor="#fc5a03" />
                   R Studio
                   <Line percent="50" strokeWidth="2" strokeColor="#fc5a03" />
                   Conda
                   <Line percent="85" strokeWidth="2" strokeColor="#fc5a03" />
                   PyCharm
                   <Line percent="90" strokeWidth="2" strokeColor="#fc5a03" />
                   </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "left" ,fontFamily: 'BioRhyme'}}>
                  <p></p>Machine Learning Techs<p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#29168a', textAlign: "center" ,fontFamily: 'Caveat'}}>
                   Keras/Tensorflow
                   <Line percent="80" strokeWidth="2" strokeColor="#fc5a03" />
                   Named Entity Recognition
                   <Line percent="75" strokeWidth="2" strokeColor="#fc5a03" />
                   Information Extraction
                   <Line percent="80" strokeWidth="2" strokeColor="#fc5a03" />
                  </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
             <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "left" ,fontFamily: 'BioRhyme' }}>
                  <p></p>Cloud Techs<p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '24px', color: '#29168a', textAlign: "center", fontFamily: 'Caveat' }}>
                   Docker
                   <Line percent="75" strokeWidth="2" strokeColor="#fc5a03" />
                   AWS
                   <Line percent="85" strokeWidth="2" strokeColor="#fc5a03" />
                   Hortonworks Data Platform
                   <Line percent="90" strokeWidth="2" strokeColor="#fc5a03" />
                  </Typography>
               </Box>
            </Grid>
          </Grid>
      </div>
   );
}
