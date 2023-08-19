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
  const description = Array
    .from(props.description.split("\\n"))
    .filter((descLine: string) => descLine !== "")
    .map((descLine: string, index: number) => {
        return (
          <h6 key={index}><mark>{descLine}</mark></h6>
        );
      }
    );
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
        {description}
      </Container>
    </div>
  );
}

export default BannerCard;
