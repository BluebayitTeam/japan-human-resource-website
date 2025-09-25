import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero4 from "../../components/hero4";
import Service3 from "../../components/Service3";
import AboutS4 from "../../components/AboutS4";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.png";
import PartnerSection from "../../components/PartnerSection";
import ProjectSection3 from "../../components/ProjectSection3";
import CauseSection3 from "../../components/CauseSection3";
import Testimonial2 from "../../components/Testimonial2";
import BlogSection3 from "../../components/BlogSection3";
import abimg from "../../images/about4.jpg";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";

const HomePage4 = () => {
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
      <Navbar id={homeId} Logo={Logo} />
      <Hero4 />
      <Service3 />
      <AboutS4
        abImg={abimg}
        Atitle={"We are Protecting The Ocean With All Our Dedication."}
      />
      <CauseSection3 />
      <ProjectSection3 />
      <Testimonial2 tClass={"wpo-testimonial-area-s3"} />
      <BlogSection3 />
      <PartnerSection />
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};
export default HomePage4;
