import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import PdfShow from "../../components/PdfShow";

const PdfShowPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Important Notice"} pagesub={"Notice"} />
      <PdfShow />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PdfShowPage;
