import logo from "./logo.svg";
import "./App.css";
import LearnAPI from "./Component/LearnAPI";
import { FromContainer } from "./Component/FromContainer";

function App() {
  return (
    <FromContainer>
      <LearnAPI />
    </FromContainer>
  );
}

export default App;
