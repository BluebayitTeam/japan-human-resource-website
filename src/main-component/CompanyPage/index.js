import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import CompanyDetails from "../../components/CompanyDetails";

const CompanyPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Company Details"} pagesub={"Company Details"} />
      <CompanyDetails />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CompanyPage;
