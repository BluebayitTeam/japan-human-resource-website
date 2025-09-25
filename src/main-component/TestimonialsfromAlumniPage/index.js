import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import TrainingInstitute from "../../components/TrainingInstitute";
import TestimonialsfromAlumni from "../../components/TestimonialsfromAlumni";

const TestimonialsfromAlumniPage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"Testimonials from Alumni"}
        pagesub={"Testimonials from Alumni"}
      />
      {/* <TrainingInstitute /> */}
      <TestimonialsfromAlumni />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TestimonialsfromAlumniPage;
