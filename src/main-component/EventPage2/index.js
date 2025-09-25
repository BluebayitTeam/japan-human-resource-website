import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import EventSection2 from "../../components/EventSection2";

const EventPage2 = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Events"} pagesub={"Events"} />
      <EventSection2 />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventPage2;
