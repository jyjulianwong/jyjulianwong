import {useEffect, useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {RepeatingTimer} from "../models/RepeatingTimer";

function FixedAnimatedNavbar(): JSX.Element {
  const text = "jyjulianwong";

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const repeatingTimer = new RepeatingTimer(() => {
      setTick(prevTick => (prevTick + 1) % (text.length + 1));
    }, 500);

    return () => {
      repeatingTimer.stop();
    }
  }, []);

  return (
    <Navbar className="terminal-homebrew shadow" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{color: "var(--cl-terminal-homebrew-green)"}}>
          {">" + text.slice(0, tick) + ((tick % 2 == 0) ? "_" : "")}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default FixedAnimatedNavbar;
