import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RestauratDetails from './Components/RestauratDetails';
import { Container } from 'react-bootstrap'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<RestauratDetails />} />
          </Routes>
        </Container>
      </main>
    </Router>

  );
}

export default App;
