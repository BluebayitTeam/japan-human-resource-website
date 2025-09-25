import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar"
import LicensingInfo from "../../components/LicensingInfo";

const MissionPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Compliance & Ethics"} pagesub={"Compliance & Ethics"} />
      <LicensingInfo />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MissionPage;
