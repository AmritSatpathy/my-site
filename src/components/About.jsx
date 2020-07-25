import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import vit from '../image/VIT.png';
import dav from '../image/download.jpg';
import jets from '../image/jet.png';
import gen from '../image/Code-Y-Gen.jpg';

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

function createData(name, details) {
   return { name, details };
}

const rows = [
   createData('Age', '20'),
   createData('Date of birth ', '1st Nov'),
   createData('Phone', '7683982955'),
   createData('Address ', 'Bhubaneswar'),
   createData('Nationality', 'Indian'),
];


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

export default function About() {
   const classes = useStyles();


   return (
      <div className={classes.root}>
         <Grid container spacing={1.8}>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "center" }}>
                     About Me
                  </Typography>
               </Box>
            </Grid>
            <Grid item xs={6}>
               <Box className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#b0bec5', textAlign: "left" }}>
                     Hey, I am Amrit Satpathy currently pursuing Btech in computer science.I have always been passionate
                     towards technology .If you do not find me with my laptop you would probably find me sleeping.I believe hardwork 
                     and perseverance can take you miles
          </Typography>
               </Box>
            </Grid>
            <Grid item xs={6}>
               <Box className={classes.box2} display="flex" height="60%" justifyContent="flex-start" flexShrink={1}>
                  <TableContainer >
                     <Table className={classes.table} height="100%">
                        <TableHead>
                        </TableHead>
                        <TableBody>
                           {rows.map((row) => (
                              <TableRow key={row.name}>
                                 <TableCell component="th" scope="row">
                                    <Typography variant="h3" style={{ fontSize: '19px', color: '#b0bec5', textAlign: "left" }}>{row.name}</Typography>
                                 </TableCell>
                                 <TableCell align="right">
                                    <Typography variant="h3" style={{ fontSize: '19px', color: '#b0bec5', textAlign: "left" }}>{row.details}</Typography>
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} >
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "center" }}>
                     Education
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={dav} alt={dav} style={{ width: '15%', height: '1%', display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '30px', color: '#b0bec5', textAlign: "center", textDecorationLine: 'underline' }}>
                        12th Grade (2016 - 2018)
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                     Scored 93.4% in CBSE board exam taking science branch
               </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={vit} alt={vit} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '22px', color: '#b0bec5', textAlign: "left", textDecorationLine: 'underline' }}>
                        B.tech in Computer Science (2018 - present)
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                     Currently pursuing Btech in computer science from Vellore Institute of Technology
               </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1} >
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#b0bec5', textAlign: "center" }}>
                  Experience
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={jets} alt={dav} style={{ width: '20%', height: '1%', display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '30px', color: '#b0bec5', textAlign: "center", textDecorationLine: 'underline' }}>
                        May 2020 - June 2020
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                     Worked on automating replies to client mails using deep neural network 
               </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box1}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={gen} alt={vit} style={{ width: '16%', display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '28px', color: '#b0bec5', textAlign: "center", textDecorationLine: 'underline' }}>
                        Jun 2019 - Jun 2020
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '25px', color: '#b0bec5', textAlign: "left" }}>
                    Contributed in making several projects assinged to us by the club
               </Typography>
               </Box>
            </Grid>
         </Grid>
      </div>
   );
}
