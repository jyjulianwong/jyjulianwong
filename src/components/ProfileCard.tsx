import {Container} from 'react-bootstrap';

interface ProfileCardProps {
  imageSource?: string;
  title: string;
  description: string;
  darkened?: boolean;
}

/**
 * A card component displaying a user's profile.
 * @param {ProfileCardProps} props - A list of properties.
 * @constructor
 */
function ProfileCard(props: ProfileCardProps): JSX.Element {
  const bgClassName = props.imageSource ? "bg-image" : props.darkened ? "bg-black" : "bg-white";
  return (
    <div
      className={"d-flex justify-content-center align-items-center" + " " + bgClassName}
      style={{
        height: 360,
        backgroundImage: "url(" + props.imageSource + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Container className={"p-3 text-start"}>
        <h1><mark>{props.title}</mark></h1>
        <h6><mark>{props.description}</mark></h6>
      </Container>
    </div>
  );
}

export default ProfileCard;
