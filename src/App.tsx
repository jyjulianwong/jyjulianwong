import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FixedAnimatedNavbar from "./components/FixedAnimatedNavbar";
import Home from "./routes/Home";
import Top100Cars from "./routes/Top100Cars";
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
      <div className="ambient" aria-hidden="true">
        <span className="ambient-blob"/>
        <span className="ambient-blob"/>
        <span className="ambient-blob"/>
      </div>
      <FixedAnimatedNavbar
        imageSource={require("./assets/logo512.png")}
      />
      <main className="page">
        <RouterProvider router={router}/>
      </main>
      <footer className="site-footer">
        jyjulianwong v{process.env.REACT_APP_VERSION}
        <br/>
        Authored by Julian Wong in 2026
        <br/>
        <a
          href="https://www.flaticon.com/free-icons/landing-page"
          title="landing page icons"
        >
          Landing page icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
