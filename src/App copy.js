import './App.css';
import { Box, CssBaseline } from '@mui/material';

import NavBar from './components/NavBar.jsx'
import LeftMenu from "./components/LeftMenu.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <Box bgcolor="skyblue" padding={2} >
      <CssBaseline />
      <NavBar />
      
        <LeftMenu />
        <Content />
      
    </Box>
  );
}

export default App;
