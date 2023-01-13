import BannerCard from "../components/BannerCard";
import PortfolioCard from "../components/PortfolioCard";
import {Col} from "react-bootstrap";

/**
 * Home.
 * @constructor
 */
function Home() {
  return (
    <>
      <Col xs={12}>
        <BannerCard
          imageSource={require("../assets/julian.png").default}
          title="Hi! I'm Julian."
          description="Final-Year M.Eng. Computing (Artificial Intelligence and Machine Learning) Student @ Imperial College London"
          darkened
        />
      </Col>
      <Col xs={12}>
        <PortfolioCard
          imageSource={require("../assets/amphere.png").default}
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
          imageSource={require("../assets/catapultsports.png").default}
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
          imageSource={require("../assets/biiah.png").default}
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
    </>
  );
}

export default Home;