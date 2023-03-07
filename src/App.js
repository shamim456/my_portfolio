import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <div className="grid grid-cols-5">
      <Navbar></Navbar>
      <main className="col-span-4">
        <Banner></Banner>
      </main>
    </div>
  );
}

export default App;
