import Top100CarCard from "../components/Top100CarCard";
import {Col} from "react-bootstrap";

/**
 * Top 100 Cars.
 * @constructor
 */

function Top100Cars() {
  let cars = new Map<string, string>([
    ["Chevrolet Corvette C6", require("../assets/chevroletcorvettec6.jpeg")],
    ["Honda NSX Type-R (NA1)", require("../assets/hondansxtyperna1.jpeg")],
    ["Jaguar E-Type (Series I)", require("../assets/jaguaretypeseriesi.jpeg")],
    ["Lotus Elise (Series 3)", require("../assets/lotuseliseseries3.jpeg")],
    ["Toyota Corolla Levin (AE86)", require("../assets/toyotacorollalevinae86.jpeg")],
    ["Porsche 911 Turbo (930)", require("../assets/porsche911turbo930.jpeg")],
    ["Land Rover Range Rover (L322)", require("../assets/landroverrangeroverl322.jpeg")],
    ["Mazda MX-5 (NA)", require("../assets/mazdamx5na.jpeg")],
    ["Subaru Impreza 22B STI (GC)", require("../assets/subaruimpreza22bstigc.jpeg")],
    ["Mitsubishi Lancer Evo. V (CP9A)", require("../assets/mitsubishilancerevovcp9a.jpeg")],
    ["Honda Integra Type-R (DB8)", require("../assets/hondaintegratyperdb8.jpeg")],
    ["Mini Hatch (R50)", require("../assets/minihatchr50.jpeg")],
    ["Chevrolet Corvette C2", require("../assets/chevroletcorvettec2.jpeg")],
    ["Aston Martin DB5", require("../assets/astonmartindb5.jpeg")],
    ["BMW 02 Series (E10)", require("../assets/bmw02seriese10.jpeg")],
    ["Land Rover Defender", require("../assets/landroverdefender.jpeg")],
    ["Toyota 2000GT", require("../assets/toyota2000gt.jpeg")],
    ["Mercedes-Benz SLS AMG", require("../assets/mercedesbenzslsamg.jpeg")],
    ["McLaren F1", require("../assets/mclarenf1.jpeg")],
    ["Saab 99 Turbo", require("../assets/saab99turbo.jpeg")],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/mercedesbenzclclassc216.jpeg")],
    ["Mercedes-Benz 500 E (W124)", require("../assets/mercedesbenz500ew124.jpeg")],
    ["Volvo S80 II", require("../assets/volvos80ii.jpeg")],
    ["Dodge Challenger SRT-8 (LC)", require("../assets/dodgechallengersrt8lc.jpeg")],
    ["Chevrolet Corvette C8", require("../assets/chevroletcorvettec8.jpeg")],
    ["Rolls-Royce Phantom VII", require("../assets/rollsroycephantomvii.jpeg")],
    ["BMW M3 (E30)", require("../assets/bmwm3e30.jpeg")],
    ["Nissan 350Z (Z33)", require("../assets/nissan350zz33.jpeg")],
    ["Subaru BRZ (ZC6)", require("../assets/subarubrzzc6.jpeg")],
    ["Mercedes-Benz 190 E 2.5-16 Evo II (W201)", require("../assets/mercedesbenz190e2516evoiiw201.jpeg")],
    ["Lamborghini Miura P400 SV", require("../assets/lamborghinimiurap400sv.jpeg")],
    ["Tesla Model S Plaid", require("../assets/teslamodelsplaid.jpeg")],
    ["Polestar 2", require("../assets/polestar2.jpeg")],
    ["McLaren MP4-12C", require("../assets/mclarenmp412c.jpeg")],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.jpeg")],
    ["Toyota Land Cruiser (URJ200)", require("../assets/toyotalandcruiserurj200.jpeg")],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.jpeg")],
    ["Volkswagen Golf GTI (Mk 6)", require("../assets/volkswagengolfgtimk6.jpeg")],
    ["Aston Martin DB7", require("../assets/astonmartindb7.jpeg")],
    ["Lamborghini Countach LP400", require("../assets/lamborghinicountachlp400.jpeg")],
    ["Ford Model-T", require("../assets/fordmodelt.jpeg")],
    ["Lexus ES (XV30)", require("../assets/lexusesxv30.jpeg")],
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