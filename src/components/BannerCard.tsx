import {Badge, Container, Stack} from 'react-bootstrap';

interface BannerCardProps {
  imageSource?: string;
  title: string;
  labels: string[];
  darkened?: boolean;
}

/**
 * A card component displaying a profile banner.
 * @param {BannerCardProps} props - A list of properties.
 * @constructor
 */
function BannerCard(props: BannerCardProps): JSX.Element {
  const bgClassName = props.imageSource ? "bg-image" : props.darkened ? "bg-black" : "bg-white";
  const labels = Array
    .from(props.labels)
    .filter((label: string) => label !== "")
    .map((label: string, index: number) => {
        return (
          <Badge
            key={index}
            pill
            bg={props.darkened ? "light" : "dark"}
            text={props.darkened ? "dark" : "light"}
          >
            {label}
          </Badge>
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
      <Container className={"p-3"}>
        <h1><b>{props.title}</b></h1>
        <Stack
          className={"d-flex flex-wrap justify-content-center align-items-center"}
          direction={"horizontal"}
          gap={2}
        >
          {labels}
        </Stack>
      </Container>
    </div>
  );
}

export default BannerCard;
