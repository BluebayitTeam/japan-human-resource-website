import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import CircularPdfShow from "../../components/CircularPdfShow";

const CircularPdfShowPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Circular"} pagesub={"Circular"} />
      <CircularPdfShow />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CircularPdfShowPage;
