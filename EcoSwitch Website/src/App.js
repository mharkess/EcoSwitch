import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2" href="#" aria-label="Product">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            class="d-block mx-auto" 
            role="img" 
            viewBox="0 0 24 24">
              <title>Product</title>
              <circle cx="12" cy="12" r="10"/>
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
          </svg>
        </a>

        <Link to="/" className="py-2 d-none d-md-inline-block"> Home </Link>
        <Link to="/signin" className="py-2 d-none d-md-inline-block"> Sign In </Link>
        <Link to="/main" className="py-2 d-none d-md-inline-block"> Main </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;