import AboutSection from "../components/home/AboutSection"
import Hero from "../components/home/hero/Hero"
import ServiceSection from "../components/home/servicios/ServiceSection"
import Footer from "../components/shared/Footer"



const Home = () => {
  return (
  <>
  <Hero></Hero>
  <ServiceSection/>
  <AboutSection></AboutSection>
  <Footer/>
  </>
  )
}

export default Home
