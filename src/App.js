import './App.css';
import Topbar from "./scenes/global/Topbar";
import Home from "./scenes/Home";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewPage from './scenes/ViewPage/View';

function App() {
  return (
    <div className="app">
      <main className="content">
        <Topbar />
        <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path='/View' element={<ViewPage/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
