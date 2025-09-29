import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import MonitoringsInfo from "../../components/MonitoringsInfo";

const MonitoringsPage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"Ethical Recruitment"}
        pagesub={"Ethical Recruitment"}
      />

      <MonitoringsInfo />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MonitoringsPage;
