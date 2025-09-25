import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import Profile from "../../components/Profile";

const ProfilePage = () => {
  const [profileId, setProfileId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) =>
          e.name === "Profile" ? setProfileId(e.id) : null
        );
      })
      .catch(() => {});
  }, []);
  //console.log("nnnnnnn", profileId);

  return (
    <Fragment>
      <PageTitle pageTitle={"Our Profile"} pagesub={"Profile"} />
      <Profile id={profileId} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProfilePage;
