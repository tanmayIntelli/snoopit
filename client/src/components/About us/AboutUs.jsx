import React from "react";
import { Header } from "../layout/header";
import Footer from "../layout/footer/Footer";

import useMediaQuery from "@mui/material/useMediaQuery";
import AboutLg from "./AboutLg";
import AboutSm from "./AboutSm";

const AboutUs = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:1024px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1025px)");

  return (
    <>
      <Header />

      {isSmallScreen && <AboutSm />}
      {isMediumScreen && <AboutSm />}
      {isLargeScreen && <AboutLg />}
      <Footer />
    </>
  );
};

export default AboutUs;
