import './App.scss';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState} from 'react'
import { darkTheme,lightTheme } from './Theme';


function App() {
  const[darkMode,setDarkMode] = useState('light')
  const handleDarkModeClick = () => {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  }
  
  return (
    <ThemeProvider theme={darkMode === 'light' ? darkTheme : lightTheme}>
    <div className="App">
     <CssBaseline />
    <Navbar changeTheme={handleDarkModeClick} currentTheme={darkMode} />
    <Home />
     <h2>Hello Spryt</h2>
     <Footer/>
    </div>
    </ThemeProvider>
    
    
  );
}

export default App;
