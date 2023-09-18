import { BrowserRouter } from "react-router-dom"
//Removed feedbacks below will add later on.
import { About, Contact, Hero, Navbar,
 Works, } from './components'


const App = () => {
  return (
<BrowserRouter>
  <div className="relative z-0 bg-black">

<div className="bbg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar />
<Hero />

</div>
<About />
{/* <Experience /> */}
 {/* <Tech /> */}
 <Works />
 {/* <Feedbacks /> */}
 <div className="relative z-0">
  <Contact />

  {/* <StarsCanvas /> */}
 </div>
</div>
</BrowserRouter>
  )
}

export default App
