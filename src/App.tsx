import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedAnimatedNavbar from "./components/FixedAnimatedNavbar";
import Home from "./routes/Home";
import Top100Cars from "./routes/Top100Cars";
import {Col, Row} from 'react-bootstrap';
import {createHashRouter, RouterProvider} from 'react-router-dom';

/**
 * Entry point of web app.
 * @constructor
 */
function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Home/>,
    },
    {
      path: "top100cars",
      element: <Top100Cars/>,
    },
  ]);

  return (
    <div className="App">
      <Row className="gx-0 gy-1">
        <Col xs={12}>
          <FixedAnimatedNavbar
            imageSource={require("./assets/logo512.png")}
          />
        </Col>
        <RouterProvider router={router}/>
        <Col xs={12}>
          <div className={"mt-5 mb-3"}>
            jyjulianwong v{process.env.REACT_APP_VERSION}.
            <br/>
            Authored by Julian Wong in 2024.
            <br/>
            <a
              href="https://www.flaticon.com/free-icons/landing-page"
              title="landing page icons"
              style={{textDecoration: "none"}}
            >
              Landing page icons created by Freepik - Flaticon.
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
