import MeetupsList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "someAddress",
    description: "someDescription",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "someOtherAddress",
    description: "someOtherDescription",
  },
];

const HomePage = () => {
  return <MeetupsList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
