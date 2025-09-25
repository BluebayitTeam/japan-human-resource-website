import React, { Fragment } from "react";
import Footer from "../../components/footer";
import Employees from "../../components/OurEmployees";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";

const EmployeesPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Our Management Team"} pagesub={"Employees"} />
      <Employees />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EmployeesPage;
