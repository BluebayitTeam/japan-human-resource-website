import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import MouTemplate from "../../components/MouTemplate";

const MouTemplatesPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"MouTemplates"} pagesub={"Mou Templates"} />
      <MouTemplate />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MouTemplatesPage;
