import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import AboutS2 from "../../components/AboutS2";
// import Vision from "../../components/Vision";
import OurEmployees from "../../components/OurEmployees";
import Vision from "../../components/Vision";

const VisionPage = () => {
  const [, setHomeId] = useState();
  const [parentId, setParentId] = useState();
  console.log("fgfkgjfg", parentId);
  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("menus data:", data);

        // Home এর id সেট করা
        const homeMenu = data.menus.find((e) => e.name === "Home");
        if (homeMenu) {
          setHomeId(homeMenu.id);
        }

        // Our Vision এর parent id সেট করা
        const parentId = data.menus
          .flatMap((menu) => menu.children || []) // সব children একত্র করা
          .find((child) => child.name === "Our Vision")?.parent;

        if (parentId) {
          setParentId(parentId); // এখানে 39 সেট হবে
        }
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }, []);

  return (
    <Fragment>
      <PageTitle pageTitle={"Our Vision"} pagesub={"Our Vision"} />
      <Vision id={parentId} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default VisionPage;
