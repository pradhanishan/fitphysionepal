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
    text: "The management and care of infants, children, and adolescents from birth to 18 years of age or the completion of high school. We collaborate with young people, their families, and other caregivers when treating children and adolescents.",
    image: childPhysiotherapyImage,
  },
  {
    id: 2,
    title: "heart conditions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum",
    image: heartTreatmentImage,
  },
  {
    id: 3,
    title: "kinesio taping",
    text: "Kinesio tape is used to simulate the flexibility of skin so that you can move through your whole range of motion. Even as you exercise or take showers, the medical-grade adhesive on the tape is water-resistant and powerful enough to remain in place for three to five days.",
    image: kinesioTapingImage,
  },
  {
    id: 4,
    title: "sport injury",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum",
    image: injuriesImage,
  },
  {
    id: 5,
    title: "chronic pain therapy",
    text: "You may be able to treat chronic pain with the following therapies: Cognitive-behavioral therapy (CBT): This type of psychotherapy teaches you coping mechanisms and changes the way you view pain.",
    image: painTherapyImage,
  },
  {
    id: 6,
    title: "movement analysis",
    text: "The gathering of factual information that depicts a subject's movement, a physical examination, and pertinent medical history all aid in movement analysis. Any movement can be analyzed, but clinical analyses of walking are the most common.",
    image: movementAnalysisImage,
  },
  {
    id: 7,
    title: "weight loss",
    text: "Achieving healthy weight loss isn’t about a “diet” or “program” but a lifestyle with healthy eating patterns, regular physical activity, and stress management. We will mentor and keep an eye on you as you lose weight.",
    image: weightLossImage,
  },
  {
    id: 8,
    title: "nutrition",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum",
    image: nutritionImage,
  },
  {
    id: 9,
    title: "endurance training",
    text: "It is most often a combination of physiological and psychological factors that allow us to continue doing what we are doing for as long as we desire. We offer you endurance-building training.",
    image: enduranceTrainingImage,
  },
  {
    id: 10,
    title: "breathing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id egestas nulla. Sed semper malesuada aliquet. In eget nisi id lectus accumsan aliquet at sit amet ligula. Nunc in erat ac eros rutrum fringilla. Vestibulum ante ipsum",
    image: breathingImage,
  },
  {
    id: 11,
    title: "Diastasis recti",
    text: "Diastasis recti is a common condition in pregnant and postpartum people. It occurs when the rectus abdominis muscles (six-pack ab muscles) separate during pregnancy from being stretched. The separation can make a person's belly stick out or bulge months or years postpartum.",
    image: pregnancyImage,
  },
  {
    id: 12,
    title: "Kegel's exercise",
    text: "Kegel exercises will strengthen the muscles in your pelvic floor if you do them correctly and frequently.",
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
    text: "Physiotherapy helps to restore movement and function when someone is affected by injury, illness or disability. It can also help to reduce your risk of injury or illness in the future. It takes a holistic approach that involves the patient directly in their own care.",
  },
  {
    id: 1,
    title: "weight loss",
    text: `Achieving healthy weight loss isn’t about a “diet” or “program” but a lifestyle with healthy eating patterns, regular physical activity, and stress management. We will mentor and keep an eye on you as you lose weight.`,
  },
  {
    id: 2,
    title: "postpartum care",
    text: "Pregnancy changes your body in more ways than you might expect. And it doesn't stop when the baby is born. Weight loss after pregnancy is safe but requires attention and guidelines. At FitPhysio, we make every effort to facilitate a speedy postpartum recovery.",
  },
];
