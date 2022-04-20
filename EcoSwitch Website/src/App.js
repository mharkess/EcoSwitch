import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import StudentAdd from "./pages/StudentAdd";
import ErrorPage from "./pages/ErrorPage";
import StudentApp from "./pages/StudentApp";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import ComponentReplace from "./pages/ComponentReplace";
import Profile from "./pages/Profile";
import DeviceAdjust from "./pages/DeviceAdjust";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/componentreplace" element={<ComponentReplace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/deviceadjust" element={<DeviceAdjust />} />
        <Route path="/studentadd" element={<StudentAdd />} />
        <Route path="/studentapp" element={<StudentApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;