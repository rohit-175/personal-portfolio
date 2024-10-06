import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeroBanner } from './components/HeroBanner'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroBanner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
