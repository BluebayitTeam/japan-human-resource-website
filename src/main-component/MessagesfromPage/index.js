import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Messagesfrom from "../../components/Messagesfrom";

const MessagesfromPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Messages from Supervisors"} />
      <Messagesfrom />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MessagesfromPage;
