import { FC } from "react";
import ServiceCardContainer from "../components/services/ServiceCardContainer";

const ServicesPage: FC = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <ServiceCardContainer />
    </div>
  );
};

export default ServicesPage;
