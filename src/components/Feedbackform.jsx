import React from "react";
import * as emailjs from "emailjs-com";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import call from "../image/call.jpg";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const SERVICE_ID = "gmail";
const TEMPLATE_ID = "template_rSipvoj9";
const USER_ID = "user_wUJQo9CNf5kZLduz9VGcx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#29168a",
    margin: theme.spacing(1),
  },
  box1: {
    background: "linear-gradient(45deg, #24FE41 30%,#FDFC47 90%)",
    borderRadius: 5,
    color: "white",
    padding: "0 10px",
  },
  box2: {
    background: "linear-gradient(45deg, #24FE41 30%,#FDFC47 90%)",
    borderRadius: 5,
    color: "white",
    padding: "0 10px",
    height: "100%",
    lineHeight: 100,
  },
  inputt: {
    background: "#fbcfff",
    borderRadius: 10,
    padding: "0 10px",
    height: "100%",
    fontSize: 25,
    width: "96%",
    color: "#000000",
    fontFamily: "Caveat",
  },
  texts: {
    background: "#fbcfff",
    borderRadius: 10,
    padding: "0 10px",
    fontSize: 30,
    width: "96%",
    color: "#29168a",
    fontFamily: "Caveat",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export default function Contact() {
  const [name, setName] = React.useState("");
  const [feedback, setFeed] = React.useState("");
  function handleClick() {
    console.log(name);
    console.log(feedback);
    var data = {
      to_name: "Red tomato",
      from_name: name,
      message_html: feedback,
      reply_to: "reply_to_value",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1.8}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Box
            fontWeight="fontWeightBold"
            boxShadow={10}
            className={classes.box1}
            justifyContent="flex-start"
          >
            <Typography
              variant="h3"
              style={{
                fontSize: "39px",
                color: "#29168a",
                textAlign: "center",
                fontFamily: "BioRhyme",
              }}
            >
              Get In Touch<p></p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            fontWeight="fontWeightBold"
            boxShadow={10}
            className={classes.box1}
          >
            <Typography
              variant="h3"
              style={{ fontSize: "27px", color: "black", textAlign: "left" }}
            >
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="call"
                      src={call}
                      className={classes.large}
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <Link
                    style={{
                      marginLeft: "2rem",
                      display: "inline-flex",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      fontFamily: "BioRhyme",
                      color: "#29168a",
                    }}
                    href="tel:+91-7683982955"
                  >
                    7683982955
                  </Link>
                </ListItem>
              </List>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            fontWeight="fontWeightBold"
            boxShadow={10}
            className={classes.box1}
          >
            <Typography
              variant="h3"
              style={{ fontSize: "25px", color: "#29168a", textAlign: "left" }}
            >
              <p></p>
              <br />
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={classes.inputt}
                  onChange={(event) => setName(event.target.value)}
                ></input>
                <p></p>
                <input
                  type="text"
                  placeholder="Subject"
                  className={classes.inputt}
                ></input>
                <p></p>
                <textarea
                  type="text"
                  rows="6"
                  cols="83"
                  placeholder="Message"
                  className={classes.texts}
                  onChange={(event) => setFeed(event.target.value)}
                ></textarea>
                <br />
              </form>
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontSize: "25px",
                color: "#29168a",
                textAlign: "center",
                fontFamily: "BioRhyme",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={handleClick}
              >
                Send
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
