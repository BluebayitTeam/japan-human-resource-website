import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Service5 from "../../components/Service5";

const ServicePage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Our Services"} pagesub={"Service"} />
      <Service5 />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServicePage;
