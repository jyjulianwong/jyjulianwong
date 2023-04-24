import Top100CarCard from "../components/Top100CarCard";
import {Col, Container, Row} from "react-bootstrap";

/**
 * Top 100 Cars.
 * @constructor
 */

function Top100Cars() {
  let cars = new Map<string, string>([
    ["Toyota 2000GT", require("../assets/toyota2000gt.jpeg")],
    ["Honda NSX Type-R (NA1)", require("../assets/hondansxtyperna1.jpeg")],
    ["Jaguar E-Type (Series I)", require("../assets/jaguaretypeseriesi.jpeg")],
    ["Chevrolet Corvette C6", require("../assets/chevroletcorvettec6.jpeg")],
    ["Lotus Elise (Series 3)", require("../assets/lotuseliseseries3.jpeg")],
    ["Shelby AC Cobra 427", require("../assets/shelbyaccobra427.jpeg")],
    ["Porsche 911 Turbo (930)", require("../assets/porsche911turbo930.jpeg")],
    ["Toyota MR2 (AW10)", require("../assets/toyotamr2aw10.jpeg")],
    ["Toyota Corolla Levin (AE86)", require("../assets/toyotacorollalevinae86.jpeg")],
    ["Land Rover Range Rover (L322)", require("../assets/landroverrangeroverl322.jpeg")],
    ["Toyota Mirai (JPD10)", require("../assets/toyotamiraijpd10.jpeg")],
    ["Austin Mini (Mark I)", require("../assets/austinminimarki.jpeg")],
    ["Subaru Impreza 22B STI (GC)", require("../assets/subaruimpreza22bstigc.jpeg")],
    ["Mitsubishi Lancer Evo. V (CP9A)", require("../assets/mitsubishilancerevovcp9a.jpeg")],
    ["Honda Integra Type-R (DB8)", require("../assets/hondaintegratyperdb8.jpeg")],
    ["Lexus LFA", require("../assets/lexuslfa.jpeg")],
    ["Chevrolet Corvette C2", require("../assets/chevroletcorvettec2.jpeg")],
    ["Aston Martin DB5", require("../assets/astonmartindb5.jpeg")],
    ["BMW 02 Series (E10)", require("../assets/bmw02seriese10.jpeg")],
    ["Land Rover Defender (L316)", require("../assets/landroverdefenderl316.jpeg")],
    ["Lexus LC (URZ100)", require("../assets/lexuslcurz100.jpeg")],
    ["Volvo S90 II", require("../assets/volvos90ii.jpeg")],
    ["Toyota Crown Comfort (XS10)", require("../assets/toyotacrowncomfortxs10.jpeg")],
    ["Cadillac XLR (GMX215)", require("../assets/cadillacxlrgmx215.jpeg")],
    ["Mazda MX-5 (NA)", require("../assets/mazdamx5na.jpeg")],
    ["Alfa Romeo 4C (Type 960)", require("../assets/alfaromeo4c.jpeg")],
    ["Mercedes-Benz SLS AMG", require("../assets/mercedesbenzslsamg.jpeg")],
    ["Aston Martin Valkyrie", require("../assets/astonmartinvalkyrie.jpeg")],
    ["Mercedes-AMG ONE", require("../assets/mercedesamgone.jpeg")],
    ["Aston Martin DB9", require("../assets/astonmartindb9.jpeg")],
    ["Nissan GT-R (R35)", require("../assets/nissangtrr35.jpeg")],
    ["BMW M1 (E26)", require("../assets/bmwm1e26.jpeg")],
    ["McLaren F1", require("../assets/mclarenf1.jpeg")],
    ["Mini Hatch (R50)", require("../assets/minihatchr50.jpeg")],
    ["Volvo C30", require("../assets/volvoc30.jpeg")],
    ["Saab 99 Turbo", require("../assets/saab99turbo.jpeg")],
    ["Honda S2000 (AP1)", require("../assets/hondas2000ap1.jpeg")],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/mercedesbenzclclassc216.jpeg")],
    ["Mercedes-Benz 500 E (W124)", require("../assets/mercedesbenz500ew124.jpeg")],
    ["Nissan Fairlady Z (S30)", require("../assets/nissanfairladyzs30.jpeg")],
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
    ["Pagani Zonda C12", require("../assets/paganizondac12.jpeg")],
    ["Ford GT (2017)", require("../assets/fordgt2017.jpeg")],
    ["BMW M3 (E30)", require("../assets/bmwm3e30.jpeg")],
    ["Nissan 350Z (Z33)", require("../assets/nissan350zz33.jpeg")],
    ["Jaguar XJ220", require("../assets/jaguarxj220.jpeg")],
    ["Ferrari Enzo", require("../assets/ferrarienzo.jpeg")],
    ["Mercedes-Benz EQS (V297)", require("../assets/mercedesbenzeqsv297.jpeg")],
    ["Subaru BRZ (ZC6)", require("../assets/subarubrzzc6.jpeg")],
    ["Mercedes-Benz 190 E 2.5-16 Evo II (W201)", require("../assets/mercedesbenz190e2516evoiiw201.jpeg")],
    ["Mercedes-Benz C-Class (W204)", require("../assets/mercedesbenzcclassw204.jpeg")],
    ["Lamborghini Miura P400 SV", require("../assets/lamborghinimiurap400sv.jpeg")],
    ["Nissan Skyline 25GT (R34)", require("../assets/nissanskyline25gtr34.jpeg")],
    ["BMW 3.0 CS (E9)", require("../assets/bmw30cse9.jpeg")],
    ["Polestar 2", require("../assets/polestar2.jpeg")],
    ["Volvo EX90", require("../assets/volvoex90.jpeg")],
    ["Honda Civic Type-R (FL5)", require("../assets/hondacivictyperfl5.jpeg")],
    ["Tesla Model S Plaid", require("../assets/teslamodelsplaid.jpeg")],
    ["Mercedes-Benz SLR McLaren", require("../assets/mercedesbenzslrmclaren.jpeg")],
    ["McLaren MP4-12C", require("../assets/mclarenmp412c.jpeg")],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.jpeg")],
    ["Audi Quattro (B2)", require("../assets/audiquattrob2.jpeg")],
    ["Lancia Stratos HF (Tipo 829)", require("../assets/lanciastratoshftipo829.jpeg")],
    ["Bugatti Veyron EB 16.4", require("../assets/bugattiveyroneb164.jpeg")],
    ["Alfa Romeo Spider (Series 3)", require("../assets/alfaromeospiderseries3.jpeg")],
    ["Jaguar XF (X250)", require("../assets/jaguarxfx250.jpeg")],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.jpeg")],
    ["Porsche 911 GT3 (992)", require("../assets/porsche911gt3992.jpeg")],
    ["Volkswagen Golf GTI (Mk 6)", require("../assets/volkswagengolfgtimk6.jpeg")],
    ["Nissan Cube (Z11)", require("../assets/nissancubez11.jpeg")],
    ["Aston Martin DB7", require("../assets/astonmartindb7.jpeg")],
    ["Renault 5 Turbo", require("../assets/renault5turbo.jpeg")],
    ["Toyota Land Cruiser (URJ200)", require("../assets/toyotalandcruiserurj200.jpeg")],
    ["Pontiac Solstice (GMX020)", require("../assets/pontiacsolsticegmx020.jpeg")],
    ["Volvo C70 II", require("../assets/volvoc70ii.jpeg")],
    ["Cadillac CTS (GMX320)", require("../assets/cadillacctsgmx320.jpeg")],
    ["Lamborghini Aventador LP700-4", require("../assets/lamborghiniaventadorlp7004.jpeg")],
    ["Chevrolet Cobalt SS (GMX001)", require("../assets/chevroletcobaltssgmx001.jpeg")],
    ["Holden Commodore HSV (VE)", require("../assets/holdencommodorehsvve.jpeg")],
    ["Toyota Camry (XV20)", require("../assets/toyotacamryxv20.jpeg")],
    ["Toyota Prius (XW20)", require("../assets/toyotapriusxw20.jpeg")],
    ["Alpine A110 (2017)", require("../assets/alpinea1102017.jpeg")],
    ["Lamborghini Countach LP400", require("../assets/lamborghinicountachlp400.jpeg")],
    ["Honda S660 (JW5)", require("../assets/hondas660jw5.jpeg")],
    ["Chrysler 300 (LX)", require("../assets/chrysler300lx.jpeg")],
    ["Toyota Corolla (E160)", require("../assets/toyotacorollae160.jpeg")],
    ["Lincoln Town Car (FN145)", require("../assets/lincolntowncarfn145.jpeg")],
    ["Smart Fortwo (W451)", require("../assets/smartfortwow451.jpeg")],
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
            This is a list of my personal top 100 favourite cars ever made,
            determined on the basis of design, public reception, historical significance, and performance.
        </div>
      </Col>
    </>
  );
}

export default Top100Cars;