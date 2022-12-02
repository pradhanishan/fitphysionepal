import { FC } from "react";
import classes from "./about-card.module.css";
import Icon from "../icon/Icon";
import { FaUserCircle, FaAddressCard, FaClinicMedical, FaWheelchair, FaHeartbeat } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

interface IAboutCardProps {
  id: number;
  heading: string;
  content: string;
}

const AboutCard: FC<IAboutCardProps> = (props: IAboutCardProps) => {
  const { id, heading, content } = props;

  const icon =
    id === 0 ? (
      <FaUserCircle size={42} />
    ) : id === 1 ? (
      <FaAddressCard size={42} />
    ) : id === 2 ? (
      <FaClinicMedical size={42} />
    ) : id === 3 ? (
      <FaWheelchair size={42} />
    ) : id === 4 ? (
      <FaHeartbeat size={42} />
    ) : (
      <MdFamilyRestroom size={42} />
    );

  return (
    <div className={classes["about-card"]}>
      <Icon>{icon}</Icon>
      <b className={classes["about-card-bold"]}>{heading}</b>
      <p>{content}</p>
    </div>
  );
};

export default AboutCard;
