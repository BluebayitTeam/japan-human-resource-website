import React, { Fragment, useEffect, useState } from "react";
import Hero5 from "../../components/hero5";
import Service4 from "../../components/Service4";
import AboutS4 from "../../components/AboutS4";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import PartnerSection from "../../components/PartnerSection";
import TeamSection2 from "../../components/TeamSection2";
import BlogSection4 from "../../components/BlogSection4";
import Map from "../../components/Map";
import abimg from "../../images/about5.jpg";
import FunFact from "../../components/FunFact";
import CauseSection4 from "../../components/CauseSection4";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";

const HomePage5 = () => {
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
      <Hero5 />
      <Service4 />
      <Map />
      <AboutS4
        abClass={"wpo-about-section-s5"}
        abImg={abimg}
        Atitle={"General information about coronavirus disease"}
      />
      <FunFact />
      <TeamSection2 />
      <CauseSection4 />
      <BlogSection4 />
      <PartnerSection tNone={"title-none"} />
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};
export default HomePage5;
