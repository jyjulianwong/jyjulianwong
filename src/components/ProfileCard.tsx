import {Card, Container, Image} from 'react-bootstrap';

interface ProfileCardProps {
  imageSource?: string;
  title: string;
  description: string;
}

/**
 * A card component displaying a user's profile.
 * @param {ProfileCardProps} props - A list of properties.
 * @constructor
 */
function ProfileCard(props: ProfileCardProps): JSX.Element {
  return (
    <Card className="terminal-homebrew shadow">
      <Card.Body>
        {props.imageSource && (
          <Container className="mb-3">
            <Image
              className="shadow"
              style={{width: '240px', height: '240px'}}
              src={props.imageSource}
              rounded
            />
          </Container>
        )}
        <Card.Title>
          <h1 className="terminal-head">{props.title}</h1>
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
