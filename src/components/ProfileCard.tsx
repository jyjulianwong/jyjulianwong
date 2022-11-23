import { Card, Container, Image } from "react-bootstrap";

interface ProfileCardProps {
  imageSource?: string;
  title: string;
  description: string;
}

function ProfileCard(props: ProfileCardProps): JSX.Element {
  return (
    <Container className="my-3">
      <Card border="light" className="shadow">
        <Card.Body>
          {props.imageSource && (
            <Container className="mb-5">
              <Image
                className="shadow"
                style={{ width: "200px", height: "200px" }}
                src={props.imageSource}
                roundedCircle
              />
            </Container>
          )}
          <Card.Title>
            <h1>{props.title}</h1>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfileCard;
