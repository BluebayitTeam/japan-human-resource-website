import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import TrainingInstitute from "../../components/TrainingInstitute";

const TrainingInstitutePage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Programs & Training"} pagesub={"About"} />
      <TrainingInstitute />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TrainingInstitutePage;
