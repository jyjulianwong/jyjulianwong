import {Col, Container, Row} from "react-bootstrap";

interface Top100CarCardProps {
  imageSource?: string;
  position: string;
  title: string;
}

/**
 * A card component displaying a Top 100 Car.
 * @param {Top100CarCardProps} props - A list of properties.
 * @constructor
 */
function Top100CarCard(props: Top100CarCardProps): JSX.Element {
  return (
    <Row className={"g-0"}>
      <Col xs={12} md={4} className={"d-flex align-items-center bg-black"}>
        <Container className={"p-3 text-start"}>
          <h2><b style={{fontFamily: "monospace"}}>{props.position}</b>: {props.title}</h2>
        </Container>
      </Col>
      <Col xs={12} md={8}>
        <div
          className={"d-flex justify-content-center align-items-center bg-black card-expandable"}
          style={{
            backgroundImage: "url(" + props.imageSource + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
        </div>
      </Col>
    </Row>
  );
}

export default Top100CarCard;