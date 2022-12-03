type TTimings = {
  id: number;
  day: string;
  from: string;
  to: string;
}[];

export const timings: TTimings = [
  {
    id: 0,
    day: "monday",
    from: "10:00 AM",
    to: "7:00 PM",
  },
  {
    id: 1,
    day: "tuesday",
    from: "10:00 AM",
    to: "7:00 PM",
  },
  {
    id: 2,
    day: "wednesday",
    from: "10:00 AM",
    to: "7:00 PM",
  },
  {
    id: 3,
    day: "thursday",
    from: "10:00 AM",
    to: "7:00 PM",
  },
  {
    id: 4,
    day: "friday",
    from: "10:00 AM",
    to: "7:00 PM",
  },
  {
    id: 5,
    day: "saturday",
    from: "10:00 AM",
    to: "2:00 PM",
  },
];

export const briefTiming: string = "Mon to Fri 10:00 AM - 7:00 PM NPT";
