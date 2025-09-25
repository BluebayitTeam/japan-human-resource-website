import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Performance from "../../components/Performance";

const PerformancePage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Partner With Bangladesh: A Reliable Talent Pipeline"} pagesub={"For Supervising Organizations (Japan)"} />
      <Performance />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PerformancePage;
