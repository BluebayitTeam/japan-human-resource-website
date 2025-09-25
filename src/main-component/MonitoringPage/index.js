import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Monitoring from "../../components/Monitoring";

const MonitoringPage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"Our Placement & Monitoring System"}
        pagesub={"Our Placement & Monitoring System"}
      />
      <Monitoring />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MonitoringPage;
