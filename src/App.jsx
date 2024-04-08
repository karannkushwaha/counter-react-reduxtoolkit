import "./App.css";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import FromControl from "./components/FormControl";
import Msg from "./components/Msg";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Msg /> : <DisplayCounter />}
            <Controls />
          </div>
        </div>
        <FromControl />
      </div>
    </>
  );
}

export default App;
