/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import { ADMIN_SITE_LINK, BASE_URL } from "../../constant/constants";
import LanguageSwitcher from "../shared/LanguageSwitcherGoogle";

export default class Header2 extends Component {
  state = {
    isSearchShow: false,
  };

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow,
    });
  };

  render() {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    // const jwt_access_token = localStorage.getItem('jwt_access_token');
    // const user_image = localStorage.getItem('user_image');
    return (
      <>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "5px",
            backgroundColor: "#ffff",
          }}
        >
          <div className="navbar-header">
            <Link onClick={ClickHandler} className="navbar-brand" to={`/`}>
              <img
                style={{
                  width: "450px",
                  height: "auto",
                  marginLeft: "50px",
                }}
                src={`${BASE_URL}${this.props.Logo}`}
                alt=""
              />
            </Link>
          </div>
        </div>

        <header id="header" className={this.props.topbarNone}>
          <div
            className={`wpo-site-header  ${this.props.hclass}`}
            style={{ backgroundColor: "#653455ff" }}
          >
            <nav className="navigation navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                    <div className="mobail-menu">
                      <MobileMenu menu={this.props.menu} />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-6"></div>
                  <div className="col-lg-8 col-md-1 col-1">
                    <div
                      id="navbar"
                      className="collapse navbar-collapse navigation-holder"
                    >
                      <button className="menu-close">
                        <i className="ti-close"></i>
                      </button>

                      {this.props.menu.map((n) => (
                        <ul className="nav navbar-nav mb-1 mb-lg-0" key={n.id}>
                          <li className="menu-item-has-children text-nowrap">
                            {n.name === "Home" ? (
                              <Link onClick={ClickHandler} to={`/`}>
                                {n?.name}
                              </Link>
                            ) : n.children.length === 0 ? (
                              <Link
                                onClick={ClickHandler}
                                to={`/${n.name.toLowerCase()}/${n.id}`}
                              >
                                {n?.name}
                              </Link>
                            ) : (
                              <Link
                                onClick={ClickHandler}
                                to={`/${n.name.toLowerCase()}/${n.id}`}
                              >
                                {n?.name}
                              </Link>
                            )}

                            <ul
                              className="sub-menu"
                              style={{
                                display:
                                  n.children.length === 0 ? "none" : "block",
                              }}
                            >
                              {n.children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    onClick={ClickHandler}
                                    to={`/${child.name.toLowerCase()}/${
                                      child.id
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      ))}

                      <LanguageSwitcher />
                    </div>
                  </div>

                  {/* <div className="col-lg-2 col-md-2 col-2">
                    <div className="header-right">
                      <div
                        style={{
                          display: "flex",
                          right: "90px",
                          top: "7px",
                        }}
                      >
                        <p style={{ color: "whitesmoke" }}>Lg </p>
                        <div id="google_translate_element"></div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
