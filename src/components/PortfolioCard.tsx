import {Col, Container, Row} from 'react-bootstrap';

interface PortfolioCardProps {
  imageSource?: string;
  title: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  redirect?: string;
  darkened?: boolean;
}

/**
 * A card component displaying a portfolio project.
 * @param {PortfolioCardProps} props - A list of properties.
 * @constructor
 */
function PortfolioCard(props: PortfolioCardProps): JSX.Element {
  const redirectToProj = () => {
    if (props.redirect)
      window.open(props.redirect);
  };

  const bgClassName = props.darkened ? "bg-black" : "bg-white";

  return (
    <div className={"px-3 py-5" + " " + bgClassName} onClick={redirectToProj}>
      <Row className={"gx-1 gy-3"}>
        <Col xs={12}>
          <Container>
            <h1>{props.title}</h1>
            {props.description}
          </Container>
        </Col>
        <Col xs={12}>
          {props.imageSource && (
            <img src={props.imageSource} alt={""} style={{maxWidth: "100%"}}/>
          )}
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Company
            <h6>{props.company}</h6>
          </Container>
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Position
            <h6>{props.position}</h6>
          </Container>
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Location
            <h6>{props.location}</h6>
          </Container>
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Duration
            <h6>{props.duration}</h6>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioCard;
