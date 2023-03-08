import "./App.css";
import AboutMe from "./Component/AboutMe/AboutMe";
import AboutMyWork from "./Component/AboutMyWork/AboutMyWork";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <div className="grid grid-cols-5">
      <div className="">
        <Navbar></Navbar>
      </div>

      <main className="col-span-4">
        <Banner></Banner>
        <AboutMe></AboutMe>
        <AboutMyWork></AboutMyWork>
      </main>
    </div>
  );
}

export default App;
