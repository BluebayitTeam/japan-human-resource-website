import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import JapanRecruitment from "../../components/JapanRecruitment";

const JapanRecruitmentPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Japan & Korean Language Center"} pagesub={"About"} />
      <JapanRecruitment />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default JapanRecruitmentPage;
