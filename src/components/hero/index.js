import React, { useEffect, useState } from "react";
import { Carousel, Image, Modal, Card } from "react-bootstrap-v5";
import {
  BASE_URL,
  GET_SITESETTINGS,
  GET_SLIDERSETTINGS,
} from "../../constant/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  const [contents, setContents] = useState([]);
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    fetch(`${GET_SLIDERSETTINGS}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.homepage_sliders);
      });

    handleShow();

    fetch(GET_SITESETTINGS)
      .then((response) => response.json())
      .then((data) => {
        setModalImage(data.general_settings[0]);
      })
      .catch(() => {});

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  function handleButtonClick(link) {
    window.open(link, "_blank");
  }

  const cards = [
    {
      title: "Main",
      text: "Explore our main services",
      buttonText: "Explore Main",
    },
    {
      title: "Our Medical",
      text: "Learn more about our medical facilities",
      buttonText: "Explore Medical",
    },
    {
      title: "Our Company",
      text: "Discover our company background",
      buttonText: "Explore Company",
    },
  ];

  const imageHeight = windowWidth < 600 ? "300" : "600px";
  return (
    <div
      style={{
        marginTop: "64px",
      }}
    >
      {modalImage?.slider && (
        <Modal size="lg" show={show} centered onHide={handleClose}>
          <Image
            fluid={true}
            thumbnail={true}
            rounded={true}
            style={{
              filter: "brightness(80%)",
            }}
            src={`${BASE_URL}${modalImage?.slider}`}
            alt="First slide"
          />
        </Modal>
      )}
      <Carousel fade>
        {contents.map((n, index) => (
          <Carousel.Item
            key={index}
            interval={5000}
            className="position-relative"
          >
            <img
              className="d-block w-100"
              style={{
                height: imageHeight,
                objectFit: "cover",
              }}
              src={`${BASE_URL}${n.image}`}
              alt={`Slide ${index + 1}`}
            />
            {n?.link && n?.details && (
              <div
                style={{
                  position: "absolute",
                  bottom: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "20px" }}
                >
                  <button
                    type="button"
                    style={{
                      background: "#F6621B",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                    className="btn btn-lg"
                    onClick={() => handleButtonClick(n?.link)}
                  >
                    {n?.details}
                  </button>
                  <button
                    type="button"
                    style={{
                      background: "#F6621B",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                    className="btn btn-lg"
                    onClick={() => handleButtonClick(n?.link)}
                  >
                    Meet Our Trainees
                  </button>
                </div>
              </div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Cards Row */}
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ gap: "20px", marginTop: "40px", marginBottom: "40px" }}
      >
        <a
          href="https://human-resource-bd.com/wp/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Card
            style={{
              width: "300px",
              textAlign: "center",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
              marginTop: "-15px",
            }}
          >
            <h3 style={{ marginTop: "15px" }}>Our Main Website</h3>
          </Card>
        </a>
        <a
          href="https://welcome-dmc.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Card
            style={{
              width: "300px",
              textAlign: "center",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
              marginTop: "-15px",
            }}
          >
            <h3 style={{ marginTop: "15px" }}>Our Medical</h3>
          </Card>
        </a>

        <Card
          style={{
            width: "300px",
            textAlign: "center",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
            marginTop: "-15px",
          }}
        >
          <h3 style={{ marginTop: "15px" }}>Our Company</h3>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
