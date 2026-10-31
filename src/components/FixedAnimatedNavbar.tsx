import {useEffect, useState} from "react";
import {Navbar} from "react-bootstrap";
import {RepeatingTimer} from "../models/RepeatingTimer";

interface FixedAnimatedNavbarProps {
  imageSource?: string;
}

/**
 * A floating glass navigation pill with an animated terminal-style cursor.
 * @param {FixedAnimatedNavbarProps} props - A list of properties.
 * @constructor
 */
function FixedAnimatedNavbar(props: FixedAnimatedNavbarProps): JSX.Element {
  const text = "J. Y. Julian Wong";
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
    <header className="nav-wrap">
      <Navbar className="nav-pill glass">
        <Navbar.Brand href="/">
          {props.imageSource && (
            <img
              src={props.imageSource}
              alt=""
              className="nav-logo"
            />
          )}
          <span className="nav-cursor-text">
            {"> " + text}
            <span style={{visibility: (tick % 2 === 0) ? "hidden" : "inherit"}}>_</span>
          </span>
        </Navbar.Brand>
      </Navbar>
    </header>
  );
}

export default FixedAnimatedNavbar;
