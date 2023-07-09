import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import AboutContent from "../components/about/AboutContent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Container>
        <Grid  direction="column" container>
          <Grid
            padding={4}
            xs
            display="flex"
            alignItems="center"
            justifyContent="center"
            item
          >
            <Typography align="center" sx={{ color: "#2D2727" }} variant="h2">
              Welcome to HighSonic!
            </Typography>
          </Grid>
          <Grid mt={2} direction="column" rowSpacing={4} item container>
            <AboutContent>
              Discover a world of cutting-edge technology and immersive audio
              experiences. We are proud to offer a wide range of wireless
              headphones, soundbars, and smartwatches, designed to elevate your
              digital lifestyle.
            </AboutContent>
            <AboutContent>
              At HighSonic, we understand the importance of seamless
              connectivity and superior sound quality. Our collection of
              wireless headphones combines comfort, style, and exceptional audio
              performance, allowing you to enjoy your favorite music and
              podcasts without the hassle of tangled wires.
            </AboutContent>
            <AboutContent>
              Enhance your home entertainment with our state-of-the-art
              soundbars. Immerse yourself in cinematic soundscapes and feel
              every thrilling moment as if you were in the movie theater. Our
              soundbars deliver crystal-clear audio and powerful bass,
              transforming your living room into a personal audio haven.
            </AboutContent>
            <AboutContent>
              Stay connected and organized with our range of smartwatches. With
              advanced features and sleek designs, our smartwatches offer
              fitness tracking, notifications, and convenient access to your
              digital life. Stay on top of your schedule, monitor your health,
              and express your personal style with our diverse selection.
            </AboutContent>
            <AboutContent>
              At HighSonic, we pride ourselves on delivering exceptional
              customer service. Our knowledgeable team is here to assist you in
              finding the perfect wireless headphones, soundbar, or smartwatch
              that suits your needs. We provide secure transactions, fast
              shipping, and a hassle-free return policy, ensuring your
              satisfaction throughout your shopping journey.
            </AboutContent>
            <AboutContent>
              Thank you for choosing HighSonic as your destination for
              cutting-edge technology and premium audio products. Explore our
              collection and unlock a world of wireless freedom, immersive
              sound, and advanced connectivity. Elevate your digital experience
              with us today.
            </AboutContent>
            <AboutContent>The HighSonic Team</AboutContent>
          </Grid>
        </Grid>
      </Container>
        <Footer/>
    </>
  );
};

export default About;