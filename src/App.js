import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeroBanner } from './components/HeroBanner'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroBanner/>
    </div>
  );
}

export default App;
