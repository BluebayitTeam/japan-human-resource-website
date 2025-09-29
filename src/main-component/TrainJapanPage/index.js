import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Gallery from "../../components/Gallery";
import TrainJapan from "../../components/TrainJapan";

const TrainJapanPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Trainees in Japan"} />
      <TrainJapan />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TrainJapanPage;
