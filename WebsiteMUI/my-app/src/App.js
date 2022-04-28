import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./Component/MyNavbar";
import Content from "./Component/Content";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Content />
    </BrowserRouter>
  );
}

export default App;
