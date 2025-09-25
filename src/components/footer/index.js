/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BASE_URL,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
  GET_SITESETTINGS,
} from '../../constant/constants';

function items(obj) {
  let content = [];

  // eslint-disable-next-line no-unused-vars
  for (let key in obj) {
    let contentItem = {};
    let objs = obj;

    contentItem[`${key}`] = objs[key];
    content.push(contentItem);
  }
  return content;
}
const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const [contactId, setContactId] = useState();
  const [aboutId, setAboutId] = useState();
  const [homeid, setHomeId] = useState('');
  const [missionid, setMissionId] = useState('');
  const [historyid, setHistoryId] = useState('');

  const [contentsImage, setContentsImage] = useState('');

  const [siteSetting, setSiteSetting] = useState({});

  useEffect(() => {
    fetch(`${GET_SITESETTINGS}`)
      .then((response) => response.json())
      .then((data) => {
        setSiteSetting(data.general_settings[0]);
      })
      .catch(() => { });
  }, []);

  //for content images
  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${homeid}`)
      .then((response) => response.json())
      .then((data) => {
        // setContentImages(data.content_images);
        setContentsImage(data.content_images);
        console.log('imagesContent', data.content_images);
        Object.entries(data.content_images).map(([key, value]) =>
          console.log('imageValue', key, value)
        );
      })
      .catch(() => { });
  }, [homeid]);

  //for content items
  const newContents = items(contentsImage);
  console.log(newContents);
  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) =>
          e.name === 'Contact' ? setContactId(e.id) : null
        );
        data.menus.find((e) => (e.name === 'About' ? setAboutId(e.id) : null));
        data.menus.find((e) => (e.name === 'Home' ? setHomeId(e.id) : null));
        data.menus.find((e) =>
          e.name === 'Mission' ? setMissionId(e.id) : null
        );
        data.menus.find((e) =>
          e.name === 'History' ? setHistoryId(e.id) : null
        );
      })

      .catch(() => { });
  }, []);
  console.log('contactId', contactId);
  console.log('siteSetting', siteSetting);
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className='wpo-site-footer'>
      <div className='wpo-upper-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-3 col-md-6 col-sm-12 col-12'>
              <div className='widget about-widget'>
                <div className='text-center '>
                  <img
                    style={{
                      width: '90px',
                      height: '90px',
                    }}
                    src={`${BASE_URL}${siteSetting.logo}`}
                    alt='blog'
                  />
                </div>
                <p>
                  Welcome and open yourself to your truest love this year with
                  us! With the Release Process
                </p>
                <ul className='d-flex justify-content-center'>
                  <li>
                    {/* <a
                      target="_blank"
                      href={siteSetting.facebook_url}
                      rel="noreferrer"
                    >
                      {" "}
                      <i className="ti-facebook"></i>
                    </a> */}

                    <a href={siteSetting.facebook_url} target='_blank'>
                      <i className='ti-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={siteSetting.twitter_url} target='_blank'>
                      {' '}
                      <i className='ti-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={siteSetting.instagram_url} target='_blank'>
                      {' '}
                      <i className='ti-instagram'></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={siteSetting.google_url} target="_blank">
                      {" "}
                      <i className="ti-google"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <div className='col col-lg-2 col-md-6 col-sm-12 col-12 text-center'>
              <div className='widget link-widget'>
                <div className='widget-title'>
                  <h3>Services </h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to={`/about/${aboutId}`}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to={`/mission/${missionid}`}>
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to={`/history/${historyid}`}>
                      History
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to={`/contact/${contactId}`}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='widget wpo-service-link-widget'>
                <div className='widget-title text-center'>
                  <h3>Contact </h3>
                </div>
                <div className='contact-ft'>
                  <p style={{ fontWeight: 'bold' }}>
                    Please feel free to contact us
                  </p>
                  <ul>
                    <li>
                      <i className='fi flaticon-mail'></i>
                      {siteSetting.email}
                    </li>
                    <li>
                      <i className='fi flaticon-phone-call'></i>
                      {siteSetting.phone}
                    </li>
                    <li>
                      <i className='fi flaticon-location'></i>{' '}
                      {siteSetting.address}
                    </li>
                  </ul>
                  <p style={{ fontWeight: 'bold' }}>Our Training Center Located</p>
                  <ul>
                    <li><i className='fi flaticon-location'></i>
                      Pathargata, Sirajdikhan, Munshiganj
                    </li>
                    <li><i className='fi flaticon-mail'></i> westerntti@gmail.com</li>
                    <li><i className='fi flaticon-phone-call'></i> +8801746088196</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col col-lg-3 col-md-6 col-sm-12 col-12'>
              <div className='widget instagram'>
                <div className='widget-title text-center'>
                  <h3>Member of</h3>
                </div>
                <ul className='d-flex'>
                  {Object.entries(contentsImage ? contentsImage : {}).map(
                    ([key, value]) =>
                      key === 'Partner'
                        ? value.map((n) => (
                          <li className='grid' key={key}>
                            <div className='img-holder'>
                              <img src={`${BASE_URL}/media/${n}`} alt='' />
                            </div>
                          </li>
                        ))
                        : ' '
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wpo-lower-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xs-12'>
              <small className='copyright text-white'>
                {' '}
                &copy; {year} {siteSetting.site_name} Design By{' '}
                <a
                  href='http://bluebayit.com/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Bluebay IT Limited
                </a>
                . All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
