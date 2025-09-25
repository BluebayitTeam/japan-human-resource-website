import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import Document from "../../components/Document";

const DocumentPage = () => {
  const [documentId, setDocumentId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) =>
          e.name === "Document" ? setDocumentId(e.id) : null
        );
      })
      .catch(() => {});
  }, []);
  //console.log("nnnnnnn", documentId);

  return (
    <Fragment>
      <PageTitle pageTitle={"Our Documents"} pagesub={"Documents"} />
      <Document id={documentId} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default DocumentPage;
