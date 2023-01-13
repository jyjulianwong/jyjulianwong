import {useEffect, useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {RepeatingTimer} from "../models/RepeatingTimer";

interface FixedAnimatedNavbarProps {
  imageSource?: string;
}

function FixedAnimatedNavbar(props: FixedAnimatedNavbarProps): JSX.Element {
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
      <Container className={"px-3"}>
        <Navbar.Brand href="#">
          {props.imageSource && (
            <img
              src={props.imageSource}
              alt={"FixedAnimatedNavbar.imageSource"}
              width={30}
              height={30}
              className={"d-inline-block align-center"}
            />
          )}{" "}
          {"> " + text + ((tick % 2 == 0) ? "_" : "")}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default FixedAnimatedNavbar;
