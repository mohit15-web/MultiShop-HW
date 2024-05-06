import Categories from "./components/Categories"
import FeaturedProduct from "./components/FeaturedProduct"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Search } from "./components/Search"


function App() {

  return (
    <div className="">
      <Search/>
    <Navbar/>
    <Categories/>
    <FeaturedProduct/>
    <Footer/>
    </div>
  )
}

export default App
