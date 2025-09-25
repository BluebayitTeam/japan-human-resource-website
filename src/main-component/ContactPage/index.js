import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";

const ContactPage = () => {
  const [contactId, setContactId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) =>
          e.name === "Contact" ? setContactId(e.id) : null
        );
      })
      .catch(() => { });
  }, []);

  return (
    <Fragment>
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage id={contactId} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
