import './App.css';
import Drive from './assets/components/Drive';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import Hiring from './assets/components/Hiring';
import Maintenance from './assets/components/Maintenance';
import Offers from './assets/components/Offers';
import Section3 from './assets/components/Section3';
import Serving from './assets/components/Serving';
import Slider from './assets/components/Slider';

function App() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Slider/>
    <Section3/>
    <Drive/>
    <Offers/>
    <Maintenance/>
    <Hiring/>
    <Serving/>
    <Footer/>
    </div>
  );
}

export default App;
