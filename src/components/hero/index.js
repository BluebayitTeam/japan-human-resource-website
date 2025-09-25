import React, { useEffect, useState } from "react";
import { Carousel, Image, Modal } from "react-bootstrap-v5";
import {
  BASE_URL,
  GET_SITESETTINGS,
  GET_SLIDERSETTINGS,
} from "../../constant/constants";

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
      .catch(() => { });

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  function handleButtonClick(link) {
    window.open(link, "_blank");
  }

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
                objectFit: "cover", // Ensures image covers entire area without stretching
              }}
              src={`${BASE_URL}${n.image}`}
              alt={`Slide ${index + 1}`}
            />
            {
              n?.link && n?.details && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "100px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                >
                  <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                    <button type="button" style={{ background: "#F6621B", color: "#ffffff", fontWeight: "bold" }} class="btn btn-lg" onClick={() => handleButtonClick(n?.link)}>
                      {n?.details}
                    </button>
                    <button type="button" style={{ background: "#F6621B", color: "#ffffff", fontWeight: "bold" }} class="btn btn-lg" onClick={() => handleButtonClick(n?.link)}>
                      Meet Our Trainees
                    </button>
                  </div>
                </div>
              )
            }

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
