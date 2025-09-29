import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import LicensingInfo from "../../components/LicensingInfo";
import EthicalInfo from "../../components/EthicalInfo";

const EthicalPage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"Ethical Recruitment"}
        pagesub={"Ethical Recruitment"}
      />

      <EthicalInfo />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EthicalPage;
