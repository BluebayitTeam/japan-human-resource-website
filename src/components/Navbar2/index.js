import React, { useEffect, useState } from 'react';
import { GET_MENUS_ALL_NESTED, GET_SITESETTINGS } from '../../constant/constants';
import Header2 from '../header2';

export default function Navbar2(props) {
  const [scroll, setScroll] = React.useState(0);
  const [menu, setMunu] = useState([]);
  const [translator, setTranslator] = useState();
  const [siteSetting, setSiteSetting] = useState({});

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch(`${GET_SITESETTINGS}`)
      .then((response) => response.json())
      .then((data) => {
        setSiteSetting(data.general_settings[0]);
      })
      .catch(() => { });
  }, []);

  //for get menu
  React.useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('allmenu', data);
        setMunu(data.menus);
      })
      .catch(() => { });
  }, []);
  const className =
    scroll > 80 ? 'fixed-navbar animated fadeInDown active' : 'fixed-navbar';

  React.useEffect(() => {
    setTranslator(document.getElementById('google_translate_element'));
  }, []);
  return (
    <div className={className}>
      <Header2
        id={props.id}
        menu={menu}
        hclass={props.hclass}
        Logo={props.Logo}
        translator={translator}
        topbarNone={props.topbarNone}
        siteSetting={siteSetting}
      />
    </div>
  );
}
