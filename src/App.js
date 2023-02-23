import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Singin from "./component/SingIn/Singin"
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import Register from "./component/Register/Register";
import RequirAuth from "./component/RequirAuth/RequirAuth";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/service" element={
        <RequirAuth>
          <Service />
        </RequirAuth>
      } />
      <Route path="/register" element={<Register />} />
      <Route path="/singin" element={<Singin />} />
    </Routes>
    </>
  );
}

export default App;
