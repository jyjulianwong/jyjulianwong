import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { RepeatingTimer } from "../models/RepeatingTimer";

function FixedAnimatedNavbar(): JSX.Element {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const repeatingTimer = new RepeatingTimer(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);

    return () => {
      repeatingTimer.stop();
    }
  }, []);

  return (
    <Navbar bg="light" className="shadow" expand="lg">
      <Container>
        <Navbar.Brand href="#">{showCursor ? "Julian Wong_" : "Julian Wong"}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default FixedAnimatedNavbar;
