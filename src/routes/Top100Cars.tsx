import Top100CarCard from "../components/Top100CarCard";
import {Col, Container, Row} from "react-bootstrap";

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
    ["Shelby AC Cobra 427", require("../assets/shelbyaccobra427.jpeg")],
    ["Toyota Corolla Levin (AE86)", require("../assets/toyotacorollalevinae86.jpeg")],
    ["Porsche 911 Turbo (930)", require("../assets/porsche911turbo930.jpeg")],
    ["Land Rover Range Rover (L322)", require("../assets/landroverrangeroverl322.jpeg")],
    ["Austin Mini (Mark I)", require("../assets/austinminimarki.jpeg")],
    ["Mazda MX-5 (NA)", require("../assets/mazdamx5na.jpeg")],
    ["Subaru Impreza 22B STI (GC)", require("../assets/subaruimpreza22bstigc.jpeg")],
    ["Mitsubishi Lancer Evo. V (CP9A)", require("../assets/mitsubishilancerevovcp9a.jpeg")],
    ["Honda Integra Type-R (DB8)", require("../assets/hondaintegratyperdb8.jpeg")],
    ["Volvo EX90", require("../assets/volvoex90.jpeg")],
    ["Mini Hatch (R50)", require("../assets/minihatchr50.jpeg")],
    ["Chevrolet Corvette C2", require("../assets/chevroletcorvettec2.jpeg")],
    ["Aston Martin DB5", require("../assets/astonmartindb5.jpeg")],
    ["BMW 02 Series (E10)", require("../assets/bmw02seriese10.jpeg")],
    ["Land Rover Defender (L316)", require("../assets/landroverdefenderl316.jpeg")],
    ["Toyota 2000GT", require("../assets/toyota2000gt.jpeg")],
    ["Volvo S90 II", require("../assets/volvos90ii.jpeg")],
    ["Cadillac XLR (GMX215)", require("../assets/cadillacxlrgmx215.jpeg")],
    ["Lexus LFA", require("../assets/lexuslfa.jpeg")],
    ["Alfa Romeo 4C (Type 960)", require("../assets/alfaromeo4c.jpeg")],
    ["Mercedes-Benz SLS AMG", require("../assets/mercedesbenzslsamg.jpeg")],
    ["Aston Martin Valkyrie", require("../assets/astonmartinvalkyrie.jpeg")],
    ["Mercedes-AMG ONE", require("../assets/mercedesamgone.jpeg")],
    ["Aston Martin DB9", require("../assets/astonmartindb9.jpeg")],
    ["Nissan GT-R (R35)", require("../assets/nissangtrr35.jpeg")],
    ["BMW M1 (E26)", require("../assets/bmwm1e26.jpeg")],
    ["McLaren F1", require("../assets/mclarenf1.jpeg")],
    ["Volvo C30", require("../assets/volvoc30.jpeg")],
    ["Saab 99 Turbo", require("../assets/saab99turbo.jpeg")],
    ["Honda S2000 (AP1)", require("../assets/hondas2000ap1.jpeg")],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/mercedesbenzclclassc216.jpeg")],
    ["Mercedes-Benz 500 E (W124)", require("../assets/mercedesbenz500ew124.jpeg")],
    ["Toyota GR Yaris (XP210)", require("../assets/toyotagryarisxp210.jpeg")],
    ["Alfa Romeo Giulia GTAm (Type 952)", require("../assets/alfaromeogiuliagtamtype952.jpeg")],
    ["BMW 1 Series M Coupe (E82)", require("../assets/bmw1seriesmcoupee82.jpeg")],
    ["Saab 9-5 (YS3E)", require("../assets/saab95ys3e.jpeg")],
    ["Lexus IS F (XE20)", require("../assets/lexusisfxe20.jpeg")],
    ["Dodge Challenger SRT-8 (LC)", require("../assets/dodgechallengersrt8lc.jpeg")],
    ["Lexus LS (XF40)", require("../assets/lexuslsxf40.jpeg")],
    ["Jaguar XJ (X351)", require("../assets/jaguarxjx351.jpeg")],
    ["Chevrolet Corvette C8", require("../assets/chevroletcorvettec8.jpeg")],
    ["Volkswagen Scirocco (Mk 3)", require("../assets/volkswagensciroccomk3.jpeg")],
    ["Rolls-Royce Phantom VII", require("../assets/rollsroycephantomvii.jpeg")],
    ["Ferrari 250 GTO", require("../assets/ferrari250gto.jpeg")],
    ["Pagani Zonda C12", "TODO"],
    ["BMW M3 (E30)", require("../assets/bmwm3e30.jpeg")],
    ["Nissan 350Z (Z33)", require("../assets/nissan350zz33.jpeg")],
    ["Jaguar XJ220", "TODO"],
    ["Ferrari Enzo", "TODO"],
    ["Subaru BRZ (ZC6)", require("../assets/subarubrzzc6.jpeg")],
    ["Mercedes-Benz 190 E 2.5-16 Evo II (W201)", require("../assets/mercedesbenz190e2516evoiiw201.jpeg")],
    ["Mercedes-Benz C-Class (W204)", "TODO"],
    ["Lamborghini Miura P400 SV", require("../assets/lamborghinimiurap400sv.jpeg")],
    ["Nissan Skyline 25GT (R34)", "TODO"],
    ["BMW 3.0 CS (E9)", "TODO"],
    ["Polestar 2", require("../assets/polestar2.jpeg")],
    ["Honda Civic Type-R (FL5)", "TODO"],
    ["Tesla Model S Plaid", require("../assets/teslamodelsplaid.jpeg")],
    ["Mercedes-Benz SLR McLaren", "TODO"],
    ["McLaren MP4-12C", require("../assets/mclarenmp412c.jpeg")],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.jpeg")],
    ["Audi Quattro (B2)", "TODO"],
    ["Lancia Stratos HF (Tipo 829)", "TODO"],
    ["Bugatti Veyron EB 16.4", "TODO"],
    ["Alfa Romeo Spider (Series 3)", "TODO"],
    ["Jaguar XF (X250)", "TODO"],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.jpeg")],
    ["Porsche 911 GT3 (992)", "TODO"],
    ["Volkswagen Golf GTI (Mk 6)", require("../assets/volkswagengolfgtimk6.jpeg")],
    ["Nissan Cube (Z11)", "TODO"],
    ["Aston Martin DB7", require("../assets/astonmartindb7.jpeg")],
    ["Renault 5 Turbo", "TODO"],
    ["Toyota Land Cruiser (URJ200)", require("../assets/toyotalandcruiserurj200.jpeg")],
    ["Pontiac Solstice (GMX020)", "TODO"],
    ["Volvo C70 II", "TODO"],
    ["Cadillac CTS (GMX320)", "TODO"],
    ["Lamborghini Aventador LP700-4", "TODO"],
    ["Chevrolet Cobalt SS (GMX001)", "TODO"],
    ["Holden Commodore HSV (VE)", "TODO"],
    ["Toyota Camry (XV20)", "TODO"],
    ["Toyota Prius (XW20)", "TODO"],
    ["Alpine A110 (2017)", "TODO"],
    ["Lamborghini Countach LP400", require("../assets/lamborghinicountachlp400.jpeg")],
    ["Honda S660 (JW5)", "TODO"],
    ["Chrysler 300 (LX)", "TODO"],
    ["Proton Saga Iswara (C20)", "TODO"],
    ["Nissan Tiida (C11)", "TODO"],
    ["Toyota Corolla (E160)", "TODO"],
    ["Toyota Alphard (AH20)", "TODO"],
    ["Honda Stream (RN6)", "TODO"],
    ["Lincoln Town Car (FN145)", "TODO"],
    ["Smart Fortwo (W451)", "TODO"],
    ["Ford Model-T", require("../assets/fordmodelt.jpeg")],
    ["Lexus ES (XV30)", require("../assets/lexusesxv30.jpeg")],
  ]);
  let carCards = Array
    .from(cars.entries())
    .slice(0, Math.min(cars.size, 100))
    .map((entry: [string, string], index: number) => {
        const [key, val] = entry;
        return (
          <Col key={key} xs={12} md={6}>
            <Top100CarCard
              key={key}
              imageSource={val}
              title={String(index + 1).padStart(3, "0") + ": " + key}
            />
          </Col>
        );
      }
    );

  return (
    <>
      <Col xs={12}>
        <Container className={"App"} fluid>
          <Row className={"g-0"}>
            {carCards}
          </Row>
        </Container>
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