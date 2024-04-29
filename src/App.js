import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Chats from "./pages/Chats";
function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/chats" component={Chats}></Route>
    </div>
  );
}

export default App;
