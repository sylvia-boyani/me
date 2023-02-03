import './App.css';
import AboutMe from './components/AboutMe';
import Home from "./sections/header/Home"
import Navbar from './sections/nav/Navbar'
import About from './sections/about/About'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import Faqs from './sections/faqs/Faqs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Services from './sections/services/Services'



function App() {
  return (
   <main>
    <Home/>
    <AboutMe/>
    <Navbar/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Faqs/>
    <Contact/>
    <Footer/>
   </main>
  );
}

export default App;
