interface ContactCardProps {
  title?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  darkened?: boolean;
}

/**
 * A glass card component displaying contact details.
 * @param {ContactCardProps} props - A list of properties.
 * @constructor
 */
function ContactCard(props: ContactCardProps): JSX.Element {
  const links: {key: string, icon: string, href: string, text: string}[] = [];
  if (props.email) {
    links.push({key: "email", icon: require("../assets/email.png"), href: "mailto:" + props.email, text: props.email});
  }
  if (props.linkedin) {
    links.push({key: "linkedin", icon: require("../assets/linkedin.png"), href: "https://" + props.linkedin, text: props.linkedin});
  }
  if (props.github) {
    links.push({key: "github", icon: require("../assets/github.png"), href: "https://" + props.github, text: props.github});
  }

  return (
    <section className="contact-card glass section">
      {props.title && <h2 className="section-title mb-0">{props.title}</h2>}
      <div className="contact-grid">
        {links.map((link) => (
          <a key={link.key} className="contact-link" href={link.href}>
            <img src={link.icon} alt="" width={28} height={28}/>
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactCard;
