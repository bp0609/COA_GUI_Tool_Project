import Navbar from './components/Navbar';
import ToolBox from './components/ToolBox';
// import About from './components/About';
import PerformanceMetricAnalyser from './components/PMA';
import NumberConverter from './components/NC';
import CacheSimulator from './components/CS';
import IEEE from './components/IEEE.js';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/Alert'

function App() {

  document.body.style.transition = "all 0.2s linear"
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(38 42 55)"
      document.body.style.color = "white"
    } else {
      setMode('light')
      document.body.style.backgroundColor = "whitesmoke"
      document.body.style.color = "#000"
    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar title='COA-GUITool' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path={'/'} element={<ToolBox mode={mode} />} />
            {/* <Route exact path={'/about'} element={<About />} /> */}
            <Route exact path={'/performacemetricanalyser'} element={<PerformanceMetricAnalyser mode={mode} showAlert={showAlert} />} />
            <Route exact path={'/cachesimulator'} element={<CacheSimulator mode={mode} showAlert={showAlert} />} />
            <Route exact path={'/numberconverter'} element={<NumberConverter mode={mode} showAlert={showAlert} />} />
            <Route exact path='/ieee' element={<IEEE mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
