import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.jsx'
import Navbar from './components/NavbarNav.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;