import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import HavenEscape from "../components/About/havenEscape";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const HavenEscapePage = () => {
  return (
    <>
      <NavbarTwo />

      <HavenEscape />

      <FunFactsTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default HavenEscapePage;