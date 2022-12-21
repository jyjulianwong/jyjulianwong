import {useEffect, useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {RepeatingTimer} from "../models/RepeatingTimer";

function FixedAnimatedNavbar(): JSX.Element {
  const text = "jyjulianwong";
  const tickInterval = 750;

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const repeatingTimer = new RepeatingTimer(() => {
      setTick(prevTick => (prevTick + 1) % (text.length + 1));
    }, tickInterval);

    return () => {
      repeatingTimer.stop();
    }
  }, []);

  return (
    <Navbar className="bg-white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          {"> " + text + ((tick % 2 == 0) ? "_" : "")}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default FixedAnimatedNavbar;
