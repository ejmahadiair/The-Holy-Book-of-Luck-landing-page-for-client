import "./App.css";
import Home from "./component/Home/Home";
import Favicon from "react-favicon";
import book from "./photos/taskimg.PNG";

function App() {
  return (
    <>
      <div className="app-container">
        <Favicon url={book} />
        <Home />
      </div>
    </>
  );
}

export default App;
