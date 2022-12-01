import { FC } from "react";
import classes from "./icon.module.css";

interface IIconProps {
  children: React.ReactNode;
}

const Icon: FC<IIconProps> = (props: IIconProps) => {
  return <span className={classes.icon}>{props.children}</span>;
};

export default Icon;
