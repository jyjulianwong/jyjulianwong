import {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
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
    <Navbar className="bg-white" expand="sm">
      <Container className="px-3">
        <Navbar.Brand href="/">
          {props.imageSource && (
            <img
              src={props.imageSource}
              alt={"FixedAnimatedNavbar.imageSource"}
              width={30}
              height={30}
              className={"d-inline-block align-center"}
            />
          )}{" "}
          <p style={{display: "inline"}}>{"> " + text}</p>
          <p style={{display: "inline", visibility: (tick % 2 == 0) ? "hidden" : "inherit"}}>_</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#/top100cars">Top 100 Cars</Nav.Link>
        </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FixedAnimatedNavbar;
