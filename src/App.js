
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Category from './Components/Category/Category';
import ContactMini from './Components/Contact-mini/ContactMini';
import Footer from './Components/footer/Footer';
import Main from './main'
import Laptops from './pages/Laptops/Laptop'
import Support from './Components/support/Support';
import Card from './pages/card/Card'
import ContactUs from './pages/contact/ContactUs';
import Login from './pages/login/Login';
import Shopping from './pages/shopping/Shopping';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <div className="App">
          <ContactMini />
          <Category />
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/laptops' element={<Laptops/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/shopping' element={<Shopping/>}/>
            <Route path='*' element={ <Navigate to='/' replace={true}/>}/>
          </Routes>
          <Support/>
          <Footer/>











          {/* <ContactMini />
          <Category />
          <ImageBanner />
          <NewProduct />
          <Msi/>
          <Desktop/>
          <Gaming/>
          <Brand/>
          <Blogs/>
          <Comment/>
          <Support/>
          <Footer/> */}
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
