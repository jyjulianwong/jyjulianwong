import {Container} from "react-bootstrap";

interface Top100CarCardProps {
  imageSource?: string;
  title: string;
}

/**
 * A card component displaying a Top 100 Car.
 * @param {Top100CarCardProps} props - A list of properties.
 * @constructor
 */
function Top100CarCard(props: Top100CarCardProps): JSX.Element {
  const gradientOverlay = "linear-gradient(to left, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 0.9))";
  return (
    <div
      className={"d-flex justify-content-center align-items-center bg-black card-expandable"}
      style={{
        backgroundImage: gradientOverlay + ", url(" + props.imageSource + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Container className={"p-3 text-start"}>
        <h2>{props.title}</h2>
      </Container>
    </div>
  );
}

export default Top100CarCard;