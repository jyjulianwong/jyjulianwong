// Dot colours cycle through the same hues as the ambient background.
const DOT_COLOURS = ["#6366f1", "#ec4899", "#06b6d4", "#10b981", "#f59e0b", "#8b5cf6"];

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
    .map((label: string, index: number) => (
      <li
        key={label}
        className="chip"
        style={{
          "--dot": DOT_COLOURS[index % DOT_COLOURS.length],
          "--delay": (index * 0.4) + "s",
        } as React.CSSProperties}
      >
        <span className="chip-dot" aria-hidden="true"/>
        {label}
      </li>
    ));

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
