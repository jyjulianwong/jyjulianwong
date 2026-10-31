interface BannerCardProps {
  imageSource?: string;
  title: string;
  labels: string[];
  darkened?: boolean;
}

/**
 * A hero card displaying a profile banner.
 * @param {BannerCardProps} props - A list of properties.
 * @constructor
 */
function BannerCard(props: BannerCardProps): JSX.Element {
  const labels = props.labels
    .filter((label: string) => label !== "")
    .map((label: string) => <li key={label} className="chip">{label}</li>);

  return (
    <section
      className="hero glass section"
      style={props.imageSource ? {
        backgroundImage: "url(" + props.imageSource + ")",
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : undefined}
    >
      <h1 className="hero-title">{props.title}</h1>
      <ul className="chip-row list-unstyled mb-0">{labels}</ul>
    </section>
  );
}

export default BannerCard;
