import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Notice from "../../components/Notice";

const NoticePage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Important Notice"} pagesub={"Notice"} />
      <Notice />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default NoticePage;
