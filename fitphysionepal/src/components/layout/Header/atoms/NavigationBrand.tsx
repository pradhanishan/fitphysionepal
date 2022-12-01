// This component represents the navigation brand inside the header
import { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import classes from "./navigation-brand.module.css";
import { FaHeartbeat } from "react-icons/fa";
import Icon from "../../../icon/Icon";

const NavigationBrand: FC = () => {
  return (
    <Navbar.Brand>
      <span className={classes["navigation-brand"]}>fitphysio</span>
      <Icon>
        <FaHeartbeat />
      </Icon>
    </Navbar.Brand>
  );
};

export default NavigationBrand;
