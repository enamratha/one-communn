import Header from "./components/Header";
import Home from "./components/Home";
import InterirorDesgining from "./components/InteriorDesigning";
import AboutUs from "./components/AboutUs";
import OurProcess from './components/OurProcess'
import Standouts from './components/Standouts'
import Footer from './components/Footer'
import ProductCategories from './components/ProductCategories'

const App = () =>(
  <>
    <Header/>
    <Home/>
    <ProductCategories/>
    <InterirorDesgining/>
    <AboutUs/>
    <OurProcess/>
    <Standouts/>
    <Footer/>
  </>
)

export default App;