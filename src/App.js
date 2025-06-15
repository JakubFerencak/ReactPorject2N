import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Recipes from './Pages/Recipes.js';
import EmojiCloud from './Components/Emoji.js';

function App() {
  return (
    <Router>
      <div class="app-container">
        <EmojiCloud />
        <Header name="Pridavaj recepty" />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/about" element={<About/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
