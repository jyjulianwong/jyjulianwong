import {Col, Row} from 'react-bootstrap';

interface ContactCardProps {
  title?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  darkened?: boolean;
}

/**
 * A card component displaying contact details.
 * @param {ContactCardProps} props - A list of properties.
 * @constructor
 */
function ContactCard(props: ContactCardProps): JSX.Element {
  const bgClassName = props.darkened ? "bg-black" : "bg-white";

  return (
    <div className={"px-3 py-5" + " " + bgClassName}>
      <Row className={"gx-1 gy-3"}>
        <Col xs={12}>
          {props.title && (
            <h1>{props.title}</h1>
          )}
        </Col>
        <Col xs={12} sm={6} md={4}>
          {props.email && (
            <img
              src={require("../assets/email.png")}
              alt={"ContactCard.email"}
              width={30}
              height={30}
              className={"d-inline-block align-center"}
              style={{marginBottom: 10}}
            />
          )}
          <br/>
          <p><a href={"mailto:" + props.email} style={{textDecoration: "none"}}>{props.email}</a></p>
        </Col>
        <Col xs={12} sm={6} md={4}>
          {props.linkedin && (
            <img
              src={require("../assets/linkedin.png")}
              alt={"ContactCard.linkedin"}
              width={30}
              height={30}
              className={"d-inline-block align-center"}
              style={{marginBottom: 10}}
            />
          )}
          <br/>
          <p><a href={"https://" + props.linkedin} style={{textDecoration: "none"}}>{props.linkedin}</a></p>
        </Col>
        <Col xs={12} sm={6} md={4}>
          {props.github && (
            <img
              src={require("../assets/github.png")}
              alt={"ContactCard.github"}
              width={30}
              height={30}
              className={"d-inline-block align-center"}
              style={{marginBottom: 10}}
            />
          )}
          <br/>
          <p><a href={"https://" + props.github} style={{textDecoration: "none"}}>{props.github}</a></p>
        </Col>
      </Row>
    </div>
  );
}

export default ContactCard;