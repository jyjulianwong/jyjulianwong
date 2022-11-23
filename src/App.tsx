import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedAnimatedNavbar from "./components/FixedAnimatedNavbar";
import ProfileCard from "./components/ProfileCard";
import PlaceholderCard from "./components/PlaceholderCard";
import PortfolioCard from "./components/PortfolioCard";
import {Col, Container, Row} from 'react-bootstrap';

/**
 * Entry point of web app.
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <FixedAnimatedNavbar/>
      <Container className="my-4">
        <Row className="g-3">
          <Col xs={12}>
            <ProfileCard
              imageSource="https://avatars.githubusercontent.com/u/33598849"
              title="Julian Wong"
              description="Final-Year M.Eng. Computing (Artificial Intelligence and Machine Learning) Student @ Imperial College London"
            />
          </Col>
          <Col xs={6}>
            <PortfolioCard
              imageSource={require("./assets/amphere.png").default}
              title="Amphere Web App"
              company="Amphere Ltd"
              position="Full-Stack Web Developer"
              location="London, UK"
              duration="Mar 2022 - Jun 2022"
              description="Led an engineering team of 3 creating an all-in-one professional social platform for musicians, as part of a project submission for the Venture Catalyst Challenge at the Imperial Enterprise Lab."
              redirect="https://github.com/jyjulianwong/Amphere-WebApp-React"
            />
          </Col>
          <Col xs={6}>
            <PortfolioCard
              imageSource={require("./assets/catapultsports.png").default}
              title="RaceWatch"
              company="Catapult Sports"
              position="Software Engineer Intern"
              location="London, UK"
              duration="Apr 2022 - Sep 2022"
              description="Developed performance analysis software for elite motorsport teams across 10+ series and championships, enabling teams to visualise trends, make in-race strategic decisions and review driver performance."
              redirect="https://sbgsportssoftware.com/product/racewatch-for-teams"
            />
          </Col>
          <Col xs={6}>
            <PortfolioCard
              imageSource={require("./assets/biiah.png").default}
              title="Biiah for iOS"
              company="Biiah"
              position="iOS Developer"
              location="London, UK"
              duration="Jan 2021 - Aug 2021"
              description="Developed the Biiah (formerly Tchzant) iOS app, enabling people of all backgrounds to learn singing in a gamified format."
              redirect="https://biiah.com"
            />
          </Col>
          <Col xs={6}>
            <PlaceholderCard/>
          </Col>
        </Row>
        <Row className="mt-5 mb-3">
          <Col xs={12}>
            <p className="terminal-ubuntu">
              jyjulianwong.github.io/jyjulianwong v{process.env.REACT_APP_VERSION}. Authored by Julian Wong in 2022.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
