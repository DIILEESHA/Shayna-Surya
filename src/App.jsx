import { useState } from "react";
import PasswordPage from "./components/password/PasswordPage";
import Gift from "./components/gift/Gift";
import Countdown from "./components/header/Countdown";
import Header from "./components/header/Header";
import Story from "./components/header/Story";
import Location from "./components/location/Location";
import Rsvp from "./components/rsvp/Rsvp";
import Schedule from "./components/schedule/Schedule";
import Nav from "./components/nav/Nav";

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div>
      {!isUnlocked ? (
        <PasswordPage onSuccess={() => setIsUnlocked(true)} />
      ) : (
        <>
          <Nav />
          <Header />
          <Countdown />
          <Story />
          <Schedule />
          <Location />
          <Rsvp />
          {/* <Gift /> */}
        </>
      )}
    </div>
  );
};

export default App;
