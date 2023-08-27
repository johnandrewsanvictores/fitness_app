import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}/>
          <Route path="/exercise/:id" element={<ExerciseDetail />}/> */}
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
