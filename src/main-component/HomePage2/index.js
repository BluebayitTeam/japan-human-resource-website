import React, { Fragment, useEffect, useState } from "react";
import Hero2 from "../../components/hero2";
import Service from "../../components/Service";
import AboutS2 from "../../components/AboutS2";
import CauseSection from "../../components/CauseSection";
import EventSection from "../../components/EventSection";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import PartnerSection from "../../components/PartnerSection";
import FunFact from "../../components/FunFact";
import ProjectSection from "../../components/ProjectSection";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";

const HomePage = () => {
  const [homeId, setHomeId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
      })
      .catch(() => {});
  }, []);
  //console.log("nnnnnnn", homeId);

  return (
    <Fragment>
      <Hero2 />
      <Service Fclass={"wpo-features-section-s2"} />
      <AboutS2 />
      <FunFact />
      <CauseSection />
      <ProjectSection />
      <EventSection />
      <BlogSection />
      <PartnerSection />
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
