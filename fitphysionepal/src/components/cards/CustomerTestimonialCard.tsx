import { FC } from "react";
import classes from "./customer-testimonial-card.module.css";
import DUMMY from "../../assets/images/customers/customer-one.jpg";
const CustomerTestimonialCard: FC = () => {
  return (
    <div className={classes["customer-testimonial-card"]}>
      <img src={DUMMY} className={classes["customer-avatar"]} alt="DUMMY" />
      <p className={classes["testimonial-paragraph"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate magni, eveniet dicta numquam qui
        quia esse nam rem architecto aut temporibus pariatur eaque recusandae illum? Repellat sit magni quae!
      </p>
      <b>Customer Name</b>
      <br />
      <span>customer title</span>
    </div>
  );
};

export default CustomerTestimonialCard;
