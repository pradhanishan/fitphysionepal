// This component represents the navigation buttons inside the header

import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigation-button.module.css";

interface INavigationButtonProps {
  routeName: string;
  routeURL: string;
}

const NavigationButton: FC<INavigationButtonProps> = (props: INavigationButtonProps) => {
  const { routeName, routeURL } = props;
  return (
    <NavLink
      className={({ isActive }) => (isActive ? classes["active-navigation-button"] : classes["navigation-button"])}
      to={routeURL}
    >
      {routeName}
    </NavLink>
  );
};

export default NavigationButton;
