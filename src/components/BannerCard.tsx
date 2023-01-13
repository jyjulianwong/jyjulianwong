import {Container} from 'react-bootstrap';

interface BannerCardProps {
  imageSource?: string;
  title: string;
  description: string;
  darkened?: boolean;
}

/**
 * A card component displaying a profile banner.
 * @param {BannerCardProps} props - A list of properties.
 * @constructor
 */
function BannerCard(props: BannerCardProps): JSX.Element {
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

export default BannerCard;
