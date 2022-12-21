import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedAnimatedNavbar from "./components/FixedAnimatedNavbar";
import ProfileCard from "./components/ProfileCard";
import PortfolioCard from "./components/PortfolioCard";
import {Col, Row} from 'react-bootstrap';

/**
 * Entry point of web app.
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <Row className="gx-0 gy-1">
        <Col xs={12}>
          <FixedAnimatedNavbar/>
        </Col>
        <Col xs={12}>
          <ProfileCard
            imageSource={require("./assets/julian.png").default}
            title="Hi! I'm Julian."
            description="Final-Year M.Eng. Computing (Artificial Intelligence and Machine Learning) Student @ Imperial College London"
            darkened
          />
        </Col>
        <Col xs={12}>
          <PortfolioCard
            imageSource={require("./assets/amphere.png").default}
            title="Amphere Web App"
            company="Amphere Ltd"
            position="Full-Stack Web Developer"
            location="London, England, UK"
            duration="Mar 2022 - Jun 2022"
            description="Led an engineering team of 3 creating an all-in-one professional social platform for musicians, as part of a project submission for the Venture Catalyst Challenge at the Imperial Enterprise Lab."
            redirect="https://github.com/Amphere-Ltd/Amphere-WebApp-React"
            redirectText="See the repository"
          />
        </Col>
        <Col xs={12}>
          <PortfolioCard
            imageSource={require("./assets/catapultsports.png").default}
            title="RaceWatch"
            company="Catapult Sports"
            position="Software Engineer Intern"
            location="London, England, UK"
            duration="Apr 2022 - Sep 2022"
            description="Developed performance analysis software for elite motorsport teams across 10+ series and championships, enabling teams to visualise trends, make in-race strategic decisions and review driver performance."
            redirect="https://sbgsportssoftware.com/product/racewatch-for-teams"
            redirectText="Learn more"
            darkened
          />
        </Col>
        <Col xs={12}>
          <PortfolioCard
            imageSource={require("./assets/biiah.png").default}
            title="Biiah for iOS"
            company="Biiah"
            position="iOS Developer"
            location="London, England, UK"
            duration="Jan 2021 - Aug 2021"
            description="Developed the Biiah (formerly Tchzant) iOS app, enabling people of all backgrounds to learn singing in a gamified format."
            redirect="https://biiah.com"
            redirectText="Learn more"
          />
        </Col>
        <Col xs={12}>
          <div className={"mt-5 mb-3"}>
            jyjulianwong.github.io v{process.env.REACT_APP_VERSION}.
            <br/>
            Authored by Julian Wong in 2022.
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
