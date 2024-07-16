import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import EarthEscape from "../components/About/earthEscape";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const EarthEscapePage = () => {
  return (
    <>
      <NavbarTwo />

      <EarthEscape />

      <FunFactsTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default EarthEscapePage;
