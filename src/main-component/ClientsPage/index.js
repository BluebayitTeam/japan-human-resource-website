import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Clients from "../../components/Clients";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";

const ClientsPage = () => {
  const [id, setId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "Home" ? setId(e.id) : null));
      })
      .catch(() => {});
  }, []);
  //console.log("nnnnnnn", id);
  return (
    <Fragment>
      <PageTitle pageTitle={"Our Clients"} pagesub={"Clients"} />
      <Clients id={id} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ClientsPage;
