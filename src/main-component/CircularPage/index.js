import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Circular from "../../components/Circular";

const CircularPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Circular"} pagesub={"Circular"} />
      <Circular />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CircularPage;
