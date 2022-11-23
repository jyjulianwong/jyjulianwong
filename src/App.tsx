import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedAnimatedNavbar from "./components/FixedAnimatedNavbar";
import ProfileCard from "./components/ProfileCard";
import PlaceholderCard from "./components/PlaceholderCard";

function App() {
  return (
    <div className="App">
      <FixedAnimatedNavbar />
      <ProfileCard
        imageSource="https://avatars.githubusercontent.com/u/33598849"
        title="Julian Wong"
        description="Final-Year M.Eng. Computing Student @ Imperial College London"
      />
      <PlaceholderCard />
    </div>
  );
}

export default App;
