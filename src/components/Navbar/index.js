import React, { useState } from "react";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import Header from "../header";

export default function Navbar(props) {
  const [scroll, setScroll] = React.useState(0);
  const [menu, setMunu] = useState([]);
  //console.log("menu", menu);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //for get menu
  React.useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log("allmenu", data);
        setMunu(data.menus);
      })
      .catch(() => {});
  }, []);

  const className =
    scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
      <Header
        id={props.id}
        menu={menu}
        hclass={props.hclass}
        Logo={props.Logo}
        topbarNone={props.topbarNone}
      />
    </div>
  );
}
