import Top100CarCard from "../components/Top100CarCard";
import {Col} from "react-bootstrap";

/**
 * Top 100 Cars.
 * @constructor
 */

function Top100Cars() {
  let cars = new Map<string, string>([
    ["Chevrolet Corvette C6", require("../assets/chevroletcorvettec6.jpeg").default],
    ["Honda NSX (NA1)", require("../assets/hondansxna1.jpeg").default],
    ["Jaguar E-Type (Series I)", require("../assets/jaguaretypeseriesi.jpeg").default],
    ["Lotus Elise (Series 3)", require("../assets/lotuseliseseries3.jpeg").default],
    ["Toyota Corolla Levin (AE86)", require("../assets/toyotacorollalevinae86.jpeg").default],
    ["Porsche 911 Turbo (930)", require("../assets/porsche911turbo930.jpeg").default],
    ["Land Rover Range Rover (L322)", require("../assets/landroverrangeroverl322.jpeg").default],
    ["Mazda MX-5 (NA)", require("../assets/mazdamx5na.jpeg").default],
    ["Subaru Impreza 22B STI (GC)", require("../assets/subaruimpreza22bstigc.jpeg").default],
    ["Mitsubishi Lancer Evo V (CP9A)", require("../assets/mitsubishilancerevovcp9a.jpeg").default],
    ["Honda Integra Type-R (DB8)", require("../assets/hondaintegratyperdb8.jpeg").default],
    ["Mini Hatch (R50)", require("../assets/minihatchr50.jpeg").default],
    ["Chevrolet Corvette C2", require("../assets/chevroletcorvettec2.jpeg").default],
    ["Aston Martin DB5", require("../assets/astonmartindb5.jpeg").default],
    ["BMW 02 Series (E10)", require("../assets/bmw02seriese10.jpeg").default],
    ["Land Rover Defender", require("../assets/landroverdefender.jpeg").default],
    ["Toyota 2000GT", require("../assets/toyota2000gt.jpeg").default],
    ["Mercedes-Benz SLS AMG", require("../assets/mercedesbenzslsamg.jpeg").default],
    ["McLaren F1", require("../assets/mclarenf1.jpeg").default],
    ["Saab 99 Turbo", require("../assets/saab99turbo.jpeg").default],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/mercedesbenzclclassc216.jpeg").default],
    ["Mercedes-Benz 500E", require("../assets/mercedesbenz500e.jpeg").default],
    ["Volvo S80 (2nd generation)", require("../assets/volvos802ndgeneration.jpeg").default],
    ["Dodge Challenger SRT-8 (LC)", require("../assets/dodgechallengersrt8lc.jpeg").default],
    ["Chevrolet Corvette C8", require("../assets/chevroletcorvettec8.jpeg").default],
    ["Rolls-Royce Phantom VII", require("../assets/rollsroycephantomvii.jpeg").default],
    ["BMW M3 (E30)", require("../assets/bmwm3e30.jpeg").default],
    ["Nissan 350Z (Z33)", require("../assets/nissan350zz33.jpeg").default],
    ["Subaru BRZ (ZC6)", require("../assets/subarubrzzc6.jpeg").default],
    ["Mercedes-Benz 190 E 2.5-16 Evo II", require("../assets/mercedesbenz190e2516evoii.jpeg").default],
    ["Lamborghini Miura P400 SV", require("../assets/lamborghinimiurap400sv.jpeg").default],
    ["Tesla Model S Plaid", require("../assets/teslamodelsplaid.jpeg").default],
    ["Polestar 2", require("../assets/polestar2.jpeg").default],
    ["McLaren MP4-12C", require("../assets/mclarenmp412c.jpeg").default],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.jpeg").default],
    ["Toyota Land Cruiser (URJ200)", require("../assets/toyotalandcruiserurj200.jpeg").default],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.jpeg").default],
    ["Volkswagen Golf GTI (Mk 6)", require("../assets/volkswagengolfgtimk6.jpeg").default],
    ["Aston Martin DB7", require("../assets/astonmartindb7.jpeg").default],
    ["Lamborghini Countach", require("../assets/lamborghinicountach.jpeg").default],
    ["Ford Model-T", require("../assets/fordmodelt.jpeg").default],
    ["Lexus ES (XV30)", require("../assets/lexusesxv30.jpeg").default],
  ]);
  let carCards = Array
    .from(cars.entries())
    .slice(0, Math.min(cars.size, 100))
    .map((entry: [string, string], index: number) => {
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