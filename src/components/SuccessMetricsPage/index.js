import React, { Fragment } from "react";
import PageTitle from "../pagetitle";
import Footer from "../footer";
import Scrollbar from "../scrollbar";
import SuccessMetrics from "../SuccessMetrics";

const SuccessMetricsPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Programs & Training"} pagesub={"About"} />
      <SuccessMetrics />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default SuccessMetricsPage;
