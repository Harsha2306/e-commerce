import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactItem from "../components/contact/ContactItem";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Container>
        <Grid direction="column" container>
          <Grid display="flex" justifyContent="center" padding={4} item>
            <Typography align="center" variant="h3">
              Get in touch with the creator of this website
            </Typography>
          </Grid>
          <Grid direction="row" container item>
            <ContactItem title={<CallIcon fontSize="large" />}>
              9390128949
            </ContactItem>
            <ContactItem title={<EmailIcon fontSize="large" />}>
              hr15171517hr@gmail.com
            </ContactItem>
            <ContactItem title={<GitHubIcon fontSize="large" />}>
              <Link to="https://github.com/Harsha2306">Github</Link>
            </ContactItem>
            <ContactItem title={<LinkedInIcon fontSize="large" />}>
              <Link to="https://www.linkedin.com/in/harsha-revanth-manchikanti/">
                LinkedIn
              </Link>
            </ContactItem>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
