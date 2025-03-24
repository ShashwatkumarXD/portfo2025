import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Projects from './components/Projects';
function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Skill/>
      <AboutMe/>
      <Projects/>
    </main>
  )
}

export default App
