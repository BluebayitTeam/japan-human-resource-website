import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import EventSection from "../../components/EventSection";

const EventPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"News & Events"} pagesub={"News & Events"} />
      <EventSection evCLass={"section-padding"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventPage;
