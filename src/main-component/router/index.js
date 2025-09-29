import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Homepage from "../HomePage";

import Navbar2 from "../../components/Navbar2";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import EventPage from "../EventPage";
import ForgotPassword from "../ForgotPassword";
import LoginPage from "../LoginPage";
import MissionPage from "../MissionPage";
import PerformancePage from "../PerformancePage";
import SignUpPage from "../SignUpPage";
import TrainingInstitutePage from "../TrainingInstitutePage";
import SuccessStoriesPage from "../SuccessStoriesPage";
import EventPage2 from "../EventPage2";
import EventSinglePage from "../EventSinglePage";
import EthicsSinglePage from "../EthicsSinglePage";
import VisionPage from "../VisionPage";
import TeamPage from "../TeamPage";
import SkilPage from "../SkilPage";
import TestimonialsfromAlumniPage from "../TestimonialsfromAlumniPage";
import SuccessMetrics from "../../components/SuccessMetricsPage";
import SuccessMetricsPage from "../../components/SuccessMetricsPage";
import MonitoringPage from "../MonitoringPage";
import CollaborationModelPage from "../CollaborationModelPage";
import MouTemplatesPage from "../MouTemplatesModelPage";
import TrainJapanPage from "../TrainJapanPage";
import MessagesfromPage from "../MessagesfromPage";
import GalleryPage from "../GalleryPage";
import EthicalPage from "../EthicalPage";

const AllRoute = ({ logo }) => {
  const [homeId, setHomeId] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`${GET_MENUS_ALL_NESTED}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
  //     })
  //     .catch(() => {});
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 10 seconds
    }, 100000);

    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        const homeMenu = data.menus.find((e) => e.name === "Home");
        if (homeMenu) {
          setHomeId(homeMenu.id);
        }
        clearTimeout(timer); // Clear timeout if data is received early
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //         backgroundColor: "#f4f4f4",
  //         fontSize: "24px",
  //         fontWeight: "bold",
  //         color: "#333",
  //       }}
  //     >
  //       <img src="/loader.gif" alt="Loading..." style={{ width: "180px" }} />

  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Router>
        <Navbar2 Logo={logo} id={homeId} hclass={"wpo-header-style-4"} />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home/:id" component={Homepage} />
          {/* About Us page */}
          <Route path="/about/:id" component={AboutPage} />
          <Route path="/our vision/:id" component={VisionPage} />
          <Route path="/our team/:id" component={TeamPage} />
          {/* Programs & Training page */}
          <Route
            path="/programs & training/:id"
            component={TrainingInstitutePage}
          />
          <Route path="/Success Metrics/:id" component={SuccessMetricsPage} />
          <Route path="/Trainees in Japan/:id" component={TrainJapanPage} />
          <Route path="/Supervisor Message/:id" component={MessagesfromPage} />
          <Route path="/Japanese  Preparation/:id" component={SkilPage} />
          <Route path="/Gallery/:id" component={GalleryPage} />
          <Route
            path="/Testimonials from Alumni/:id"
            component={TestimonialsfromAlumniPage}
          />
          {/* For Supervising Organizations (Japan) page */}
          <Route
            path="/supervising organizations/:id"
            component={PerformancePage}
          />
          <Route
            path="/Collaboration Models/:id"
            component={CollaborationModelPage}
          />
          <Route path="/mou templates/:id" component={MouTemplatesPage} />
          <Route path="/Monitoring System/:id" component={MonitoringPage} />
          {/* Success Stories page */}
          <Route path="/success stories/:id" component={SuccessStoriesPage} />
          {/*  Compliance & Ethics page */}
          <Route path="/compliance & ethics/:id" component={MissionPage} />
          <Route path="/Ethical Recruitment/:id" component={EthicalPage} />
          {/* News & Events page */}
          <Route path="/news & events/:id" component={EventPage} />
          {/*  Contact Us page */}
          <Route path="/contact" component={ContactPage} />

          <Route path="/event/:title" component={EventSinglePage} />
          <Route path="/ethics/:title" component={EthicsSinglePage} />

          {/* 
          <Route path="/service/:id" component={ServicePage} />
          <Route path="/clients/:id" component={ClientsPage} />
          <Route path="/notice/" component={NoticePage} />
          <Route path="/our Management team/" component={EmployeesPage} />
          <Route path="/pdfShow/notice/:id" component={PdfShowPage} />
          <Route path="/pdfShow/circular/:id" component={CircularPdfShowPage} />
          <Route path="/service-single/:id" component={SeviceSinglePage} />
          <Route path="/message/:id" component={EventSinglePage2} />
          <Route path="/circular/:id" component={CircularPage} />
          <Route path="/japan & korean language center/:id" component={JapanRecruitmentPage} />
          
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/gallery/:id" component={GalleryPage} />
          <Route path="/document/:id" component={DocumentPage} />
          <Route path="/company/:id/:companyName?" component={CompanyPage} />
          <Route path="/cause" component={CausePage} />
          <Route path="/cause-single/:id" component={CauseSinglePage} />
          <Route path="/team-single/:id" component={TeamSinglePage} />
          <Route path="/event" component={EventPage} />
          <Route path="/event-s2" component={EventPage2} />
          <Route path="/event-single/:id" component={EventSinglePage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/project-single/:id" component={ProjectSinglePage} />
          <Route path="/testimonial" component={TestimonialPage} />
          <Route path="/blog-single/:id" component={BlogDetails} />
          <Route
            path="/blog-single-left-sidebar/:id"
            component={BlogDetailsLeftSiide}
          />
          <Route
            path="/blog-single-fullwidth/:id"
            component={BlogDetailsFull}
          />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-left-sidebar" component={BlogPageLeft} />
          <Route path="/blog-fullwidth" component={BlogPageFullwidth} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/volunteer" component={VolunteerPage} /> */}
          <Route path="/404" component={ErrorPage} />

          {/* <Route path='/attorneys' component={AttorneysPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/practice' component={PracticePage}/>
            <Route path='/practice-s2' component={PracticePageS2}/>
            <Route path='/case-single/:id' component={caseSinglePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/shop-single/:id' component={ShopSinglePage}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/faq' component={FaqPage}/> */}

          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={SignUpPage} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
