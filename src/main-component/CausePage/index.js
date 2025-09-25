import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import CauseSection from "../../components/CauseSection";

const CausePage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Case Stadies"} pagesub={"Resent Case Studies"} />
      <CauseSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CausePage;
