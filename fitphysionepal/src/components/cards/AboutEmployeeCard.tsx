import { FC } from "react";
import Card from "react-bootstrap/Card";
import doctorImage from "../../assets/images/doctor.jpg";
import classes from "./about-employee-card.module.css";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Icon from "../icon/Icon";

const AboutEmployeeCard: FC = () => {
  return (
    <Card style={{ width: "18rem" }} className={classes["about-employee-card"]}>
      <Card.Img variant="top" src={doctorImage} />
      <Card.Body>
        <Card.Title>Prashansa Pradhan</Card.Title>
        <span className={classes["employee-position"]}>Physiotherapist</span>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <div className={classes["about-employee-icons-container"]}>
          <Icon>
            <FaFacebookF size={32} />
          </Icon>
          <Icon>
            <RiInstagramFill size={32} style={{ marginLeft: "1rem" }} />
          </Icon>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AboutEmployeeCard;
