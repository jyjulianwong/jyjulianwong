import Top100CarCard from "../components/Top100CarCard";
import {Col} from "react-bootstrap";

/**
 * Top 100 Cars.
 * @constructor
 */

function Top100Cars() {
  let cars = new Map<string, string>([
    ["Chevrolet Corvette C6", require("../assets/chevroletcorvettec6.png").default],
    ["Honda NSX (NA1)", require("../assets/hondansxna1.png").default],
    ["Lotus Elise (Series 3)", require("../assets/lotuseliseseries3.png").default],
    ["Porsche 911 Turbo (930)", require("../assets/porsche911turbo930.png").default],
    ["Aston Martin DB5", require("../assets/astonmartindb5.png").default],
    ["Rolls-Royce Phantom VII", require("../assets/rollsroycephantomvii.png").default],
    ["Polestar 2", require("../assets/polestar2.png").default],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.png").default],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.png").default],
    ["Lexus ES (XV30)", require("../assets/lexusesxv30.png").default],
  ]);
  let carCards = Array.from(cars.entries()).map((entry) => {
      const [key, val] = entry;
      return (
        <Top100CarCard
          key={key}
          imageSource={val}
          title={key}
        />
      );
    }
  );

  return (
    <Col xs={12}>
      {carCards}
    </Col>
  );
}

export default Top100Cars;