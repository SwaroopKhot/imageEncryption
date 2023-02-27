import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './component/header/NavBar';
import Login from './component/auth/Login';
import Home from './component/Home';

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <Home />
          </>}>
          </Route>

          <Route path="/profile" element={<>
            <NavBar />
          </>}>
          </Route>

          <Route path="/login" element={<>
            <NavBar />
            <Login />
          </>}>
          </Route>
        
        </Routes>
        
    </div>
    </Router>
    
  );
}

export default App;
