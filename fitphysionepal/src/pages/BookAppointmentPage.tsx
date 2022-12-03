import { FC } from "react";
import classes from "./book-appointment-page.module.css";
import TimingsCard from "../components/cards/TimingsCard";
import ListGroup from "react-bootstrap/ListGroup";
const BookAppointmentPage: FC = () => {
  return (
    <div className={classes["appointment-page"]}>
      <div className={classes["appointment-child"]}>
        <h5>for appointment</h5>
        <hr />
        <ListGroup variant="flush">
          <ListGroup.Item>call 9841092004</ListGroup.Item>
          <ListGroup.Item>or mail fitphysio.np@gmail.com</ListGroup.Item>
          <ListGroup.Item>or visit our clinic</ListGroup.Item>
        </ListGroup>
      </div>
      <div className={classes["filler"]}></div>
      <div className={classes["appointment-child"]}>
        <h5>our timings</h5>
        <hr />
        <TimingsCard />
      </div>
    </div>
  );
};

export default BookAppointmentPage;
