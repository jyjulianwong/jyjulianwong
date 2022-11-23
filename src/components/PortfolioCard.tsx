import {Card, ListGroup} from 'react-bootstrap';

interface PortfolioCardProps {
  imageSource?: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
}

/**
 * A card component displaying a portfolio project.
 * @param {PortfolioCardProps} props - A list of properties.
 * @constructor
 */
function PortfolioCard(props: PortfolioCardProps): JSX.Element {
  return (
    <Card border="light" className="shadow">
      {props.imageSource && (
        <Card.Img variant="top" src={props.imageSource}/>
      )}
      <Card.Body>
        <Card.Title>
          <h1>{props.title}</h1>
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.company}</ListGroup.Item>
          <ListGroup.Item>{props.location}</ListGroup.Item>
          <ListGroup.Item>{props.duration}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
