import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary" >{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

const useStyles = makeStyles({
  root: {
    width: '75%',
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
});

export default function About() {
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
            <Grid item xs={6}>
               <Box className={classes.box1} justifyContent="flex-start">
                  <Typography variant="h3" style={{ fontSize: '27px', color: '#b0bec5', textAlign: "left" }}>
                  <LinearProgressWithLabel value={75}/>
                  <CircularProgressWithLabel value={75}/>
                   </Typography>
               </Box>
            </Grid>
        </Grid>
    </div>
  );
}