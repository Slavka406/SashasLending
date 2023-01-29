import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Body from "./Components/Body";
import Header from "./Components/Header";
import Login from "./domains/Auth/Login";
import Modal from "./Components/Modal";
import SignUp from "./domains/Auth/SignUp";

function App() {
  return (
    <div>
      <div>
        <Header />

        <Body />
      </div>
      <div>
        <SignUp />
        <Login />
        <Modal />
      </div>
    </div>
  );
}

export default App;
