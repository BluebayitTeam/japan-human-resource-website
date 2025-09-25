import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import { BASE_URL } from "../../constant/constants";

export default class Header extends Component {
  state = {
    isSearchShow: false,
  };

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow,
    });
  };

  render() {
    const { isSearchShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault();
    };

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    // //for get menu
    // useEffect(() => {
    //   fetch(`${GET_MENUS_ALL_NESTED}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       //console.log("allmenu", data);
    //       setMunu(data.menus);
    //     })
    //     .catch(() => {});
    // }, []);
    // //console.log("logoImage", this.props);

    return (
      <header id="header" className={this.props.topbarNone}>
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link
                      onClick={ClickHandler}
                      className="navbar-brand"
                      to={`/`}
                    >
                      <img src={`${BASE_URL}${this.props.Logo}`} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    {this.props.menu.map((n) => (
                      <ul className="nav navbar-nav mb-2 mb-lg-0">
                        <li className="menu-item-has-children">
                          <Link
                            onClick={ClickHandler}
                            to={`/${
                              n.name === "Home" ? "/" : n.name.toLowerCase()
                            }/${n.name === "Home" ? null : n.id}`}
                          >
                            {n?.name}
                          </Link>
                          <ul
                            className="sub-menu"
                            // style={`${
                            //   n.children.length > 0 ? "display" : "none"
                            // }}`}
                          >
                            {n.children.length > 0 ? (
                              n.children.map((child) => (
                                <li>
                                  <Link
                                    onClick={ClickHandler}
                                    to={`/${child.name.toLowerCase()}/${
                                      child.id
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))
                            ) : (
                              <ul style={{ display: "none" }}>
                                <li></li>
                              </ul>
                            )}
                          </ul>

                          {/* <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/home">
                                Home Charity
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/home2">
                                Home Education
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/home3">
                                Home Wildlife
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/home4">
                                Home Ocean Polution
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/home5">
                                Home World Pandemic
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/home6">
                                Home Nature
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/home7">
                                Home Nature S2
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right">
                    <div className="close-form">
                      <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        to="/donate"
                      >
                        Donate Now
                      </Link>
                    </div>
                    <div className="header-search-form-wrapper">
                      <div className="cart-search-contact">
                        <button
                          onClick={this.searchHandler}
                          className="search-toggle-btn"
                        >
                          <i
                            className={`${
                              isSearchShow ? "ti-close" : "ti-search"
                            }`}
                          ></i>
                        </button>
                        <div
                          className={`header-search-form ${
                            isSearchShow ? "header-search-content-toggle" : ""
                          }`}
                        >
                          <form onSubmit={SubmitHandler}>
                            <div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search here..."
                              />
                              <button type="submit">
                                <i className="fi flaticon-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
