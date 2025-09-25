import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import ProjectSection from "../../components/ProjectSection";

const ProjectPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Case Stadies"} pagesub={"Resent Case Studies"} />
      <ProjectSection pbClass={"pb-0"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectPage;
