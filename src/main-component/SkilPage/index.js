import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import JapaneseProgram from "../../components/JapaneseProgram";

const SkilPage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"Japanese Language Preparation"}
        pagesub={"Japanese Language Preparation"}
      />
      <JapaneseProgram />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default SkilPage;
