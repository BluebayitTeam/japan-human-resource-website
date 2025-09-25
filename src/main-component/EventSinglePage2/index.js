import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import EventTabs from "./alltab";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";

const EventSinglePage2 = (props) => {
  const { id } = useParams();

  return (
    <Fragment>
      <PageTitle pageTitle={"Importent Message for you"} pagesub={"Message"} />
      <div className="wpo-event-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 mx-auto">
              <div className="wpo-event-item">
                <EventTabs id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventSinglePage2;
