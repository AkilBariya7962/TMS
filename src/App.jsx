import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Aboutus from './components/Aboutus'
import Form from './components/Booktour'
import Footer from './components/Footer'
import AboutUs from './components/Gallery'
import HomePage from './components/Homepage'
import Navbar from './components/Navbar'
import TourPackageSelect from './components/Shortly';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/book-tour" element={<Form />} />
          <Route path='/gallery' element={<Aboutus />} />
          <Route path='/Book' element={<Form />} />
          <Route path='/our-mission' element={<AboutUs />} />
          <Route path='/trending' element={<TourPackageSelect />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
