import Header from "./components/Header/Header.jsx"
import { Global } from "../../StyleGlobal.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Highlight from "./components/Highlight/Highlight.jsx"
import Sabores from "./components/Sabores/Sabores.jsx"




function App() {

  return (
    <>
   <Global/>
   <Header/>
  <Banner/>
  <Highlight/>
  <Sabores/>

<Footer/>

    </>
  )
}

export default App
