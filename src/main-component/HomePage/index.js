import React, { Fragment, useEffect, useState } from "react";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import WelcomeMessage from "../../components/WelcomeMessage";
import OurJourney from "../../components/OurJourney";

const HomePage = () => {
  const [homeId, setHomeId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
      })
      .catch(() => { });
  }, []);

  return (
    <Fragment>
      <Hero />
      <WelcomeMessage id={homeId} />
      <OurJourney id={homeId} />
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
