interface PortfolioCardProps {
  imageSource?: string;
  title: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  redirect?: string;
  redirectText?: string;
  darkened?: boolean;
}

/**
 * A glass card component displaying a portfolio project.
 * @param {PortfolioCardProps} props - A list of properties.
 * @constructor
 */
function PortfolioCard(props: PortfolioCardProps): JSX.Element {
  const meta: [string, string][] = [
    ["Company", props.company],
    ["Position", props.position],
    ["Location", props.location],
    ["Duration", props.duration],
  ];

  return (
    <article className="portfolio-card glass">
      <h2 className="portfolio-title">{props.title}</h2>
      <p className="portfolio-description">{props.description}</p>
      {props.redirect && props.redirectText && (
        <a className="link-arrow" href={props.redirect}>{props.redirectText} &rarr;</a>
      )}
      {props.imageSource && (
        <div className="portfolio-media">
          <img src={props.imageSource} alt={props.title + " preview"} loading="lazy"/>
        </div>
      )}
      <dl className="meta-grid">
        {meta.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default PortfolioCard;
