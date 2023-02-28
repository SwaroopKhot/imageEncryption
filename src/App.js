import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './component/header/NavBar';
import Login from './component/auth/Login';
import Home from './component/Home';
import Profile from './component/Profile';
import History from './History';

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
            <Profile />
          </>}>
          </Route>

          <Route path="/storage" element={<>
            <NavBar />
            <History />
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
