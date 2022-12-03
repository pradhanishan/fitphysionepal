import childPhysiotherapyImage from "../assets/images/child-physiotherapy.jpg";
import heartTreatmentImage from "../assets/images/heart-treatment.jpg";
import injuriesImage from "../assets/images/injuries.jpg";
import kinesioTapingImage from "../assets/images/kinesio-taping.jpg";
import painTherapyImage from "../assets/images/pain-therapy.jpg";
import movementAnalysisImage from "../assets/images/movement-analysis.jpg";
import weightLossImage from "../assets/images/weight-loss.jpg";
import nutritionImage from "../assets/images/nutrition.jpg";
import enduranceTrainingImage from "../assets/images/endurance-training.jpg";
import pregnancyImage from "../assets/images/pregnancy.jpg";
import pregnancyExerciseImage from "../assets/images/pregnancy-exercise.jpg";
import breathingImage from "../assets/images/breathing.jpg";

type TServices = {
  id: number;
  image: any;
  title: string;
  text: string;
}[];

export const services: TServices = [
  {
    id: 1,
    title: "child physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: childPhysiotherapyImage,
  },
  {
    id: 2,
    title: "heart conditions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: heartTreatmentImage,
  },
  {
    id: 3,
    title: "kinesio taping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: kinesioTapingImage,
  },
  {
    id: 4,
    title: "sport injury",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: injuriesImage,
  },
  {
    id: 5,
    title: "chronic pain therapy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: painTherapyImage,
  },
  {
    id: 6,
    title: "movement analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: movementAnalysisImage,
  },
  {
    id: 7,
    title: "weight loss",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: weightLossImage,
  },
  {
    id: 8,
    title: "nutrition",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: nutritionImage,
  },
  {
    id: 9,
    title: "endurance training",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: enduranceTrainingImage,
  },
  {
    id: 10,
    title: "breathing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: breathingImage,
  },
  {
    id: 11,
    title: "Diastasis recti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: pregnancyImage,
  },
  {
    id: 12,
    title: "Kegel's exercise",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id ante tristique, molestie ipsum ac, ornare ligula. Suspendisse potenti.",
    image: pregnancyExerciseImage,
  },
];

type TPrimaryServices = {
  id: number;
  title: string;
  text: string;
}[];

export const primaryServices: TPrimaryServices = [
  {
    id: 0,
    title: "physiotherapy",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In exercitationem recusandae iure magnam cumque possimus incidunt, provident impedit ullam officiis tenetur sed pariatur ab dolorem obcaecati eos tempore, fuga repellendus!",
  },
  {
    id: 1,
    title: "weight loss",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In exercitationem recusandae iure magnam cumque possimus incidunt, provident impedit ullam officiis tenetur sed pariatur ab dolorem obcaecati eos tempore, fuga repellendus!",
  },
  {
    id: 2,
    title: "postpartum care",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In exercitationem recusandae iure magnam cumque possimus incidunt, provident impedit ullam officiis tenetur sed pariatur ab dolorem obcaecati eos tempore, fuga repellendus!",
  },
];
