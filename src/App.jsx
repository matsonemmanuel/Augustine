
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import About from './components/About'
import Teaching from './components/Teaching'
import Leadership from './components/Leadership'

import FootballLeadership from './components/FootballLeadership'
import CommunityImpact from './components/CommunityImpact'


import ContinuousLearning from './components/ContinuousLearning'
import Testimonials from './components/Testimonials'


import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'





export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <About />
        <Teaching />
        <Leadership />
        <FootballLeadership />
        <CommunityImpact />
        <ContinuousLearning />
        <Testimonials />  
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
