import Gift from "./components/gift/Gift";
import Countdown from "./components/header/Countdown";
import Header from "./components/header/Header";
import Story from "./components/header/Story";
import Location from "./components/location/Location";
import Tips from "./components/location/Tips";
import Nav from "./components/nav/Nav";
import Rsvp from "./components/rsvp/Rsvp";
import Schedule from "./components/schedule/Schedule";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Countdown />
      <Story />
      <Schedule />
      <Location />
      {/* <Tips /> */}
      {/* <Gift /> */}
      <Rsvp />
    </div>
  );
};

export default App;
