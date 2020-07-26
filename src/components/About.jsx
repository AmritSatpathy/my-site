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
      background: 'linear-gradient(45deg, #24FE41 30%,#FDFC47 90%)',
   },
   im: {
      boxShadow: '3px 2px 2px 2px rgba(0, 0, 0, 1)',
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center'
   },
   box1: {
      background: '#2eff4d',
      borderRadius: 5,
      color: 'white',
      padding: '0 10px',
   },
   box2: {
      background: '#fffc38',
      borderRadius: 5,
      color: 'white',
      padding: '0 10px',
      height: "100%",
      lineHeight: 100,
   },
   box3: {
      background: '2eff4d',
      borderRadius: 5,
      color: 'white',
      padding: '0 10px',
      height: "100%",
      lineHeight: 100,
   },
   box4: {
      background: 'linear-gradient(45deg, #24FE41 30%,#FDFC47 90%)',
      borderRadius: 5,
      color: 'white',
      padding: '0 10px',
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
   '@media (min-width:1000px)': {
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
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "center", fontFamily: 'BioRhyme'}}>
                     Let Me Tell You About Me<p></p>
                  </Typography>
               </Box>
            </Grid>
            <Grid item xs={6}>
               <Box className={classes.box4} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#29168a', textAlign: "left", fontFamily: 'Caveat' }}>
                     Hey, I am Amrit Satpathy currently pursuing B.Tech in Computer Science. I have always been passionate
                     towards technology. If you do not find me with my laptop you would probably find me sleeping. I firmly 
                     believe hardwork and perseverance can help you achieve any goal in life.
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
                                    <Typography variant="h3" style={{ fontSize: '19px', color: '#29168a', textAlign: "left", fontFamily: 'BioRhyme' }}>{row.name}</Typography>
                                 </TableCell>
                                 <TableCell align="right">
                                    <Typography variant="h3" style={{ fontSize: '19px', color: '#29168a', textAlign: "left", fontFamily: 'BioRhyme' }}>{row.details}</Typography>
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4} >
                  <Typography variant="h3" style={{ fontSize: '39px',  color: '#29168a', textAlign: "center", fontFamily: 'BioRhyme' }}>
                  <p></p>Education<p></p><p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={dav} alt={dav} style={{ width: '18%',  display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '30px', color: '#29168a', textAlign: "center", textDecorationLine: 'underline', fontFamily: 'BioRhyme' }}>
                        12th Grade (2016 - 2018)
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#29168a', textAlign: "left",fontFamily: 'Caveat' }}>
                     Scored 93.4% in CBSE board exam taking science branch<p></p>
               </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={vit} alt={vit} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                     &emsp;
                     <Typography variant="h3" style={{ fontSize: '22px', color: '#29168a', textAlign: "left", textDecorationLine: 'underline', fontFamily: 'BioRhyme' }}>
                        B.tech in Computer Science (2018 - present)
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#29168a', textAlign: "left", fontFamily: 'Caveat'}}>
                     Currently pursuing Btech in computer science from Vellore Institute of Technology<p></p>
               </Typography>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4} >
                  <Typography variant="h3" style={{ fontSize: '39px', color: '#29168a', textAlign: "center", fontFamily: 'BioRhyme' }}>
                  Experience<p></p><p></p>
                  </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={jets} alt={dav} style={{ width: '18%',  display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '30px', color: '#29168a', textAlign: "center", textDecorationLine: 'underline', fontFamily: 'BioRhyme' }}>
                        May 2020 - June 2020
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#29168a', textAlign: "left", fontFamily: 'Caveat' }}>
                     Worked on automating replies to client mails using deep neural network <p></p>
               </Typography>
               </Box>
               <Box fontWeight="fontWeightBold" boxShadow={10} className={classes.box4}>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img className={classes.im} src={gen} alt={vit} style={{ width: '18%', display: 'flex', alignItems: 'center' }} />
                     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <Typography variant="h3" style={{ fontSize: '28px', color: '#29168a', textAlign: "center", textDecorationLine: 'underline', fontFamily: 'BioRhyme' }}>
                        Jun 2019 - Jun 2020
                        </Typography>
                  </div>
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#29168a', textAlign: "left" , fontFamily: 'Caveat'}}>
                    Contributed in making several projects assinged to us by the club <p></p>
               </Typography>
               </Box>
            </Grid>
         </Grid>
      </div>
   );
}
