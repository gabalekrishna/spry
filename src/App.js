import './App.scss';
import DarkMode from './Components/DarkMode';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState} from 'react'

function App() {
  const[darkMode,setDarkMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
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
