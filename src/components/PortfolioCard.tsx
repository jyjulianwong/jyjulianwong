import {Card, ListGroup} from 'react-bootstrap';

interface PortfolioCardProps {
  imageSource?: string;
  title: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  redirect?: string;
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

  return (
    <Card className={"terminal-homebrew shadow" + (props.redirect ? " zoomable" : "")} onClick={redirectToProj}>
      {props.imageSource && (
        <Card.Img variant="top" src={props.imageSource}/>
      )}
      <Card.Body>
        <Card.Title>
          <h1 className="terminal-head">{props.title}</h1>
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            className="terminal-ubuntu terminal-line">&#62; Company: <b>{props.company}</b>
          </ListGroup.Item>
          <ListGroup.Item
            className="terminal-ubuntu terminal-line">&#62; Position: <b>{props.position}</b>
          </ListGroup.Item>
          <ListGroup.Item
            className="terminal-ubuntu terminal-line">&#62; Location: <b>{props.location}</b>
          </ListGroup.Item>
          <ListGroup.Item
            className="terminal-ubuntu terminal-line">&#62; Duration: <b>{props.duration}</b>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
