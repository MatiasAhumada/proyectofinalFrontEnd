
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'

function App() {
  return (
    <Container>
      <NavBar></NavBar>
   <BrowserRouter>
   <Routes>
    
   </Routes>
   </BrowserRouter>
   <Footer></Footer>
   </Container>
  );
}

export default App;
