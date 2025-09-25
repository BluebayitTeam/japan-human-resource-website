import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Performance from "../../components/Performance";
import Collaborations from "../Collaborations";

const CollaborationModelPage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"CollaborationModelPage"}
        pagesub={"CollaborationModel"}
      />
      <Collaborations />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CollaborationModelPage;
