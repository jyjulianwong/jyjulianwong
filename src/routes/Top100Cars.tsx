import Top100CarCard from "../components/Top100CarCard";
import {Col} from "react-bootstrap";

/**
 * Top 100 Cars.
 * @constructor
 */

function Top100Cars() {
  let cars = new Map<string, string>([
    ["Chevrolet Corvette C6", require("../assets/jpeg/chevroletcorvettec6.jpeg").default],
    ["Honda NSX (NA1)", require("../assets/jpeg/hondansxna1.jpeg").default],
    ["Jaguar E-Type (Series I)", require("../assets/jpeg/jaguaretypeseriesi.jpeg").default],
    ["Lotus Elise (Series 3)", require("../assets/jpeg/lotuseliseseries3.jpeg").default],
    ["Porsche 911 Turbo (930)", require("../assets/jpeg/porsche911turbo930.jpeg").default],
    ["Chevrolet Corvette C2", require("../assets/jpeg/chevroletcorvettec2.jpeg").default],
    ["Land Rover Range Rover (L322)", require("../assets/jpeg/landroverrangeroverl322.jpeg").default],
    ["Mazda MX-5 (NA)", require("../assets/jpeg/mazdamx5na.jpeg").default],
    ["Subaru Impreza 22B STI (GC)", require("../assets/jpeg/subaruimpreza22bstigc.jpeg").default],
    ["Mitsubishi Lancer Evo V (CP9A)", require("../assets/jpeg/mitsubishilancerevovcp9a.jpeg").default],
    ["Honda Integra Type-R (DB8)", require("../assets/jpeg/hondaintegratyperdb8.jpeg").default],
    ["Aston Martin DB5", require("../assets/jpeg/astonmartindb5.jpeg").default],
    ["BMW 02 Series (E10)", require("../assets/jpeg/bmw02seriese10.jpeg").default],
    ["Land Rover Defender", require("../assets/jpeg/landroverdefender.jpeg").default],
    ["Mini Hatch (R50)", require("../assets/jpeg/minihatchr50.jpeg").default],
    ["Saab 99 Turbo", require("../assets/jpeg/saab99turbo.jpeg").default],
    ["Mercedes-Benz SLS AMG", require("../assets/jpeg/mercedesbenzslsamg.jpeg").default],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/jpeg/mercedesbenzclclassc216.jpeg").default],
    ["Volvo S80 (2nd generation)", require("../assets/jpeg/volvos802ndgeneration.jpeg").default],
    ["Rolls-Royce Phantom VII", require("../assets/jpeg/rollsroycephantomvii.jpeg").default],
    ["BMW M3 (E30)", require("../assets/jpeg/bmwm3e30.jpeg").default],
    ["Subaru BRZ (ZC6)", require("../assets/jpeg/subarubrzzc6.jpeg").default],
    ["Mercedes-Benz 190 E 2.5-16 Evo II", require("../assets/jpeg/mercedesbenz190e2516evoii.jpeg").default],
    ["Tesla Model S Plaid", require("../assets/jpeg/teslamodelsplaid.jpeg").default],
    ["Polestar 2", require("../assets/jpeg/polestar2.jpeg").default],
    ["Ferrari 458 Italia", require("../assets/jpeg/ferrari458italia.jpeg").default],
    ["Toyota Land Cruiser (URJ200)", require("../assets/jpeg/toyotalandcruiserurj200.jpeg").default],
    ["Ferrari 308 GTS", require("../assets/jpeg/ferrari308gts.jpeg").default],
    ["Volkswagen Golf GTI (Mk 6)", require("../assets/jpeg/volkswagengolfgtimk6.jpeg").default],
    ["Aston Martin DB7", require("../assets/jpeg/astonmartindb7.jpeg").default],
    ["Lamborghini Countach", require("../assets/jpeg/lamborghinicountach.jpeg").default],
    ["Ford Model-T", require("../assets/jpeg/fordmodelt.jpeg").default],
    ["Lexus ES (XV30)", require("../assets/jpeg/lexusesxv30.jpeg").default],
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
        <div className={"px-3 py-5 bg-white"}>
          <h3>More entries coming soon.</h3>
          <p>
            This is a list of my personal top 100 favourite cars ever made,
            determined on the basis of design, public reception, historical significance, and performance.
          </p>
        </div>
      </Col>
    </>
  );
}

export default Top100Cars;