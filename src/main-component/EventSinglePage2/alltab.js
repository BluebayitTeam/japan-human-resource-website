import classnames from 'classnames';
import { Interweave } from 'interweave';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
} from '../../constant/constants';

function items(obj) {
  let content = [];

  for (let key in obj) {
    let contentItem = {};
    let objs = obj;

    contentItem[`${key}`] = objs[key];
    content.push(contentItem);
  }
  return content;
}

const EventTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const [contentsImage, setContentsImage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const { id } = useParams();
  const [contents, setContents] = useState('');

  console.log('menuID', id);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
        console.log('imagesMessage', data.content_images);
      })
      .catch(() => {});
  }, [id, props.id]);

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);
        console.log('ContactContent', data);
      })
      .catch(() => {});
  }, [id, props.id]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const imageHeight = windowWidth < 600 ? '200px' : '400px';

  const newContents = items(contents);
  console.log('content Contact', newContents);

  return (
    <div className='wpo-event-details-wrap'>
      <div className='wpo-event-details-tab'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}>
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === 'Managing Partner' ?  <>{key === 'Managing Partner' ? 'Managing Director' : ''}</> : ' '
                )
              )}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}>
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === 'Partner One' ? (
                    <>{key === 'Partner One' ? 'Chairman' : ''}</>
                  ) : (
                    ' '
                  )
                )
              )}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                toggle('3');
              }}>
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === 'Partner Two' ? (
                    <>{key === 'Partner Two' ? 'Director' : ''}</>
                  ) : (
                    ' '
                  )
                )
              )}
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      <div className='wpo-event-details-content'>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12'>
                <div id='Schedule' className='tab-pane active'>
                  {Object.entries(contentsImage).map(([key, value]) =>
                    key === 'Managing Partner' ? (
                      <div key={key} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                          style={{ width: '50%', height: imageHeight }}
                          src={`${BASE_URL}/media/${value}`}
                          alt=''
                        />
                      </div>
                    ) : (
                      ' '
                    )
                  )}
                  {newContents.map((service, index) =>
                    Object.entries(service).map(([key, value]) =>
                      key === 'Managing Partner' ? (
                        <React.Fragment key={index}>
                          <Interweave
                            allowAttributes
                            allowElements
                            disableLineBreaks={true}
                            content={value}
                          />
                        </React.Fragment>
                      ) : (
                        ' '
                      )
                    )
                  )}
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='12'>
                <div id='Schedule' className='tab-pane active'>
                  {Object.entries(contentsImage).map(([key, value]) =>
                    key === 'Partner One' ? (
                      <div key={key} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                          style={{ width: '50%', height: imageHeight }}
                          src={`${BASE_URL}/media/${value}`}
                          alt=''
                        />
                      </div>
                    ) : (
                      ' '
                    )
                  )}
                  {newContents.map((service, index) =>
                    Object.entries(service).map(([key, value]) =>
                      key === 'Partner One' ? (
                        <React.Fragment key={index}>
                          <Interweave
                            allowAttributes
                            allowElements
                            disableLineBreaks={true}
                            content={value}
                          />
                        </React.Fragment>
                      ) : (
                        ' '
                      )
                    )
                  )}
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm='12'>
                <div id='Schedule' className='tab-pane active'>
                  {Object.entries(contentsImage).map(([key, value]) =>
                    key === 'Partner Two' ? (
                      <div key={key} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                          style={{ width: '50%', height: imageHeight }}
                          src={`${BASE_URL}/media/${value}`}
                          alt=''
                        />
                      </div>
                    ) : (
                      ' '
                    )
                  )}
                  {newContents.map((service, index) =>
                    Object.entries(service).map(([key, value]) =>
                      key === 'Partner Two' ? (
                        <React.Fragment key={index}>
                          <Interweave
                            allowAttributes
                            allowElements
                            disableLineBreaks={true}
                            content={value}
                          />
                        </React.Fragment>
                      ) : (
                        ' '
                      )
                    )
                  )}
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default EventTabs;
