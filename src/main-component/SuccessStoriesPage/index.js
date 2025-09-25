import React, { Fragment, } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import SuccessStories from "../../components/SuccessStories";
import Gallery from "../../components/Gallery";

const SuccessStoriesPage = () => {

  return (
    <Fragment>
      <PageTitle pageTitle={"Success Stories"} />
      <SuccessStories />
      <Gallery />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default SuccessStoriesPage;
