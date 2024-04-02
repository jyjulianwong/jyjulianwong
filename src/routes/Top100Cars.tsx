import Top100CarCard from "../components/Top100CarCard";
import {useState} from "react";
import {Col, Modal, Row} from "react-bootstrap";

/**
 * Top 100 Cars.
 * @constructor
 */

function Top100Cars() {
  let cars = new Map<string, string>([
    ["Porsche 911 Turbo (930)", require("../assets/porsche911turbo930.jpeg")],
    ["Lotus Elise (Series 3)", require("../assets/lotuseliseseries3.jpeg")],
    ["Jaguar E-Type (Series I)", require("../assets/jaguaretypeseriesi.jpeg")],
    ["Toyota 2000GT", require("../assets/toyota2000gt.jpeg")],
    ["Chevrolet Corvette C2", require("../assets/chevroletcorvettec2.jpeg")],
    ["Saab 99 Turbo", require("../assets/saab99turbo.jpeg")],
    ["Honda NSX Type-R (NA1)", require("../assets/hondansxtyperna1.jpeg")],
    ["Toyota MR2 (AW10)", require("../assets/toyotamr2aw10.jpeg")],
    ["Toyota Corolla Levin (AE86)", require("../assets/toyotacorollalevinae86.jpeg")],
    ["Austin Mini (Mark I)", require("../assets/austinminimarki.jpeg")],
    ["Shelby AC Cobra 427", require("../assets/shelbyaccobra427.jpeg")],
    ["Land Rover Range Rover (L322)", require("../assets/landroverrangeroverl322.jpeg")],
    ["Toyota Land Cruiser (URJ200)", require("../assets/toyotalandcruiserurj200.jpeg")],
    ["Land Rover Defender (L316)", require("../assets/landroverdefenderl316.jpeg")],
    ["Lexus LFA", require("../assets/lexuslfa.jpeg")],
    ["Chevrolet Corvette C6", require("../assets/chevroletcorvettec6.jpeg")],
    ["Lotus Evora", require("../assets/lotusevora.jpeg")],
    ["Aston Martin DB5", require("../assets/astonmartindb5.jpeg")],
    ["BMW M1 (E26)", require("../assets/bmwm1e26.jpeg")],
    ["Subaru Impreza 22B STI (GC)", require("../assets/subaruimpreza22bstigc.jpeg")],
    ["Mitsubishi Lancer Evo. V (CP9A)", require("../assets/mitsubishilancerevovcp9a.jpeg")],
    ["Honda Integra Type-R (DB8)", require("../assets/hondaintegratyperdb8.jpeg")],
    ["Nissan 350Z (Z33)", require("../assets/nissan350zz33.jpeg")],
    ["Alfa Romeo 4C (Type 960)", require("../assets/alfaromeo4c.jpeg")],
    ["Subaru BRZ (ZC6)", require("../assets/subarubrzzc6.jpeg")],
    ["Mini Hatch (R50)", require("../assets/minihatchr50.jpeg")],
    ["Bugatti Veyron EB 16.4", require("../assets/bugattiveyroneb164.jpeg")],
    ["Aston Martin Valkyrie", require("../assets/astonmartinvalkyrie.jpeg")],
    ["Mercedes-AMG ONE", require("../assets/mercedesamgone.jpeg")],
    ["Ford GT (2017)", require("../assets/fordgt2017.jpeg")],
    ["McLaren F1", require("../assets/mclarenf1.jpeg")],
    ["Jaguar XJ220", require("../assets/jaguarxj220.jpeg")],
    ["Lexus LC (URZ100)", require("../assets/lexuslcurz100.jpeg")],
    ["Mercedes-Benz SLS AMG", require("../assets/mercedesbenzslsamg.jpeg")],
    ["Aston Martin DBS V12", require("../assets/astonmartindbsv12.jpeg")],
    ["Mercedes-Benz CL-Class (C210)", require("../assets/mercedesbenzclclassc216.jpeg")],
    ["Alfa Romeo Giulia GTAm (Type 952)", require("../assets/alfaromeogiuliagtamtype952.jpeg")],
    ["Nissan GT-R (R35)", require("../assets/nissangtrr35.jpeg")],
    ["Toyota GR Yaris (XP210)", require("../assets/toyotagryarisxp210.jpeg")],
    ["BMW 1 Series M Coupe (E82)", require("../assets/bmw1seriesmcoupee82.jpeg")],
    ["Lexus IS F (XE20)", require("../assets/lexusisfxe20.jpeg")],
    ["Ferrari 250 GTO", require("../assets/ferrari250gto.jpeg")],
    ["Lamborghini Miura P400 SV", require("../assets/lamborghinimiurap400sv.jpeg")],
    ["Lancia Stratos HF (Tipo 829)", require("../assets/lanciastratoshftipo829.jpeg")],
    ["Ferrari Enzo", require("../assets/ferrarienzo.jpeg")],
    ["Lexus LS (XF40)", require("../assets/lexuslsxf40.jpeg")],
    ["Maybach 62 (V240)", require("../assets/maybach62v240.jpeg")],
    ["Rolls-Royce Phantom VII", require("../assets/rollsroycephantomvii.jpeg")],
    ["Cadillac XLR (GMX215)", require("../assets/cadillacxlrgmx215.jpeg")],
    ["Volvo C30", require("../assets/volvoc30.jpeg")],
    ["Audi Quattro (B2)", require("../assets/audiquattrob2.jpeg")],
    ["Ferrari 308 GTS", require("../assets/ferrari308gts.jpeg")],
    ["Porsche 911 GT3 (992)", require("../assets/porsche911gt3992.jpeg")],
    ["Pagani Zonda C12", require("../assets/paganizondac12.jpeg")],
    ["Honda CX Clarity", require("../assets/hondafcxclarity.jpeg")],
    ["Honda e (ZC7)", require("../assets/hondaezc7.jpeg")],
    ["Tesla Model S (2012)", require("../assets/teslamodels2012.jpeg")],
    ["Polestar 2", require("../assets/polestar2.jpeg")],
    ["Nissan Cube (Z11)", require("../assets/nissancubez11.jpeg")],
    ["Dodge Challenger SRT-8 (LC)", require("../assets/dodgechallengersrt8lc.jpeg")],
    ["Honda S2000 (AP1)", require("../assets/hondas2000ap1.jpeg")],
    ["Mazda MX-5 (NA)", require("../assets/mazdamx5na.jpeg")],
    ["Volkswagen Golf GTI (Mk 6)", require("../assets/volkswagengolfgtimk6.jpeg")],
    ["Lancia Fulvia (Series 3)", require("../assets/lanciafulviaseries3.jpeg")],
    ["Honda Prelude (BA1)", require("../assets/hondapreludeba1.jpeg")],
    ["BMW 02 Series (E10)", require("../assets/bmw02seriese10.jpeg")],
    ["Porsche 356 Speedster", require("../assets/porsche356speedster.jpeg")],
    ["Mercedes-Benz 500 E (W124)", require("../assets/mercedesbenz500ew124.jpeg")],
    ["Mercedes-Benz 190 E 2.5-16 Evo II (W201)", require("../assets/mercedesbenz190e2516evoiiw201.jpeg")],
    ["BMW M3 (E30)", require("../assets/bmwm3e30.jpeg")],
    ["BMW 3.0 CS (E9)", require("../assets/bmw30cse9.jpeg")],
    ["Nissan Fairlady Z (S30)", require("../assets/nissanfairladyzs30.jpeg")],
    ["Alfa Romeo Spider (Series 3)", require("../assets/alfaromeospiderseries3.jpeg")],
    ["Peugeot 205 GTi", require("../assets/peugeot205gti.jpeg")],
    ["Mercedes-Benz SLR McLaren", require("../assets/mercedesbenzslrmclaren.jpeg")],
    ["Saab 9-3 (YS3D)", require("../assets/saab93ys3d.jpeg")],
    ["Saab 9-5 (YS3E)", require("../assets/saab95ys3e.jpeg")],
    ["Volvo C70 II", require("../assets/volvoc70ii.jpeg")],
    ["Volvo S90 II", require("../assets/volvos90ii.jpeg")],
    ["Mercedes-Benz C-Class (W204)", require("../assets/mercedesbenzcclassw204.jpeg")],
    ["Volvo EX90", require("../assets/volvoex90.jpeg")],
    ["Volkswagen Scirocco (Mk 3)", require("../assets/volkswagensciroccomk3.jpeg")],
    ["Nissan Skyline 25GT (R34)", require("../assets/nissanskyline25gtr34.jpeg")],
    ["Honda CR-X (EF8)", require("../assets/hondacrxef8.jpeg")],
    ["Ferrari 458 Italia", require("../assets/ferrari458italia.jpeg")],
    ["McLaren MP4-12C", require("../assets/mclarenmp412c.jpeg")],
    ["Jaguar XJ (X351)", require("../assets/jaguarxjx351.jpeg")],
    ["Jaguar XF (X250)", require("../assets/jaguarxfx250.jpeg")],
    ["Peugeot 405 Mi16", require("../assets/peugeot405mi16.jpeg")],
    ["Volvo V40 (1995)", require("../assets/volvov401995.jpeg")],
    ["Chrysler 300 (LX)", require("../assets/chrysler300lx.jpeg")],
    ["Ferrari 412", require("../assets/ferrari412.jpeg")],
    ["Alpine A110 (2017)", require("../assets/alpinea1102017.jpeg")],
    ["Lamborghini Countach LP400", require("../assets/lamborghinicountachlp400.jpeg")],
    ["Lamborghini Aventador LP700-4", require("../assets/lamborghiniaventadorlp7004.jpeg")],
    ["Pontiac Solstice (GMX020)", require("../assets/pontiacsolsticegmx020.jpeg")],
    ["Holden Commodore HSV (VE)", require("../assets/holdencommodorehsvve.jpeg")],
    ["Honda S660 (JW5)", require("../assets/hondas660jw5.jpeg")],
    ["Toyota Corolla (E160)", require("../assets/toyotacorollae160.jpeg")],
    ["Lexus ES (XV30)", require("../assets/lexusesxv30.jpeg")],
  ]);
  let carCards = Array
    .from(cars.entries())
    .slice(0, Math.min(cars.size, 100))
    .map((entry: [string, string], index: number) => {
        const [key, val] = entry;
        return (
          <Col key={key} xs={12} onClick={() => expandCard(key, val)}>
            <Top100CarCard
              key={key}
              imageSource={val}
              position={String(index + 1).padStart(3, "0")}
              title={key}
            />
          </Col>
        );
      }
    );

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [imageSource, setImageSource] = useState("");

  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);
  const expandCard = (name: string, imageSource: string) => {
    setName(name);
    setImageSource(imageSource);
    handleShow();
  };

  return (
    <>
      <Col xs={12}>
        <Row className={"g-0"}>
          {carCards}
        </Row>
      </Col>
      <Col xs={12}>
        <div className={"px-3 py-5 bg-white"}>
          This is a list of my personal top 100 favourite cars ever made,
          determined on the basis of design, public reception, historical
          significance, and performance.
        </div>
      </Col>
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{
              width: "100%",
              borderRadius: "5px"
            }}
            src={imageSource}
            alt={name}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Top100Cars;