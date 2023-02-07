import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home/Home'
import Characters from './Characters/Characters'
import Character from './Character/Character'

import About from'./About/About'



function App() {
  return (
    <div className='app_container'>
      <div className='navigation_container'>
        <nav>
          <img src="https://media0.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif?cid=790b76117074725b54534c935b6397c985684a3747dc24c9&rid=giphy.gif&ct=s" alt="" />
          <div className='navigation_container__nav_links'>
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </div>
      <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path='/characters' element={<Characters />} />
          <Route path='/character/:id' element={<Character />} />          
          <Route path='/about' element={<About />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}
//router

export default App;