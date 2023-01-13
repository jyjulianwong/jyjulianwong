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
    ["BMW 02 Series (E10)", require("../assets/bmw02seriese10.png").default],
    ["Land Rover Defender", require("../assets/landroverdefender.png").default],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/mercedesbenzclclassc216.png").default],
    ["Land Rover Range Rover (L322)", require("../assets/landroverrangeroverl322.png").default],
    ["Rolls-Royce Phantom VII", require("../assets/rollsroycephantomvii.png").default],
    ["Mercedes-Benz 190 E 2.5-16 Evo II", require("../assets/mercedesbenz190e2516evoii.png").default],
    ["Polestar 2", require("../assets/polestar2.png").default],
    ["Tesla Model S Plaid", require("../assets/teslamodelsplaid.png").default],
    ["Mercedes-Benz SLS AMG", require("../assets/mercedesbenzslsamg.png").default],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.png").default],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.png").default],
    ["BMW M3 (E30)", require("../assets/bmwm3e30.png").default],
    ["Lexus ES (XV30)", require("../assets/lexusesxv30.png").default],
  ]);
  let carCards = Array.from(cars.entries()).map((entry: [string, string], index: number) => {
      const [key, val] = entry;
      return (
        <Top100CarCard
          key={key}
          imageSource={val}
          title={String(index + 1).padStart(3, "0") + ": " + key}
        />
      );
    }
  );

  return (
    <>
      <Col xs={12}>
        {carCards}
      </Col>
      <Col xs={12}>
        <div className={"py-5 bg-white"}>
          <h3>More entries coming soon.</h3>
          <p>
            This is a list of my personal top 100 favourite cars ever made.
          </p>
        </div>
      </Col>
    </>
  );
}

export default Top100Cars;