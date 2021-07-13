import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedNavbar from "./components/FixedNavbar";
import ProfileImageCard from "./components/ProfileImageCard";
import PlaceholderCard from "./components/PlaceholderCard";

function App() {
  return (
    <div className="App">
      <FixedNavbar />
      <ProfileImageCard
        imageSource="https://avatars.githubusercontent.com/u/33598849?v=4"
        title="Julian Wong"
        description="iOS Developer @ The Choral Hub &bull; M.Eng. Computing III @ Imperial College London"
      />
      <PlaceholderCard />
    </div>
  );
}

export default App;
