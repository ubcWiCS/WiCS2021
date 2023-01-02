import { Fragment } from "react";
import CalendarComponent from "../components/CalendarComponent";
import Footer from "./Footer";

export default function Events() {
  return (
    <Fragment>
      <CalendarComponent></CalendarComponent>
      <Footer></Footer>
    </Fragment>
  );
}
