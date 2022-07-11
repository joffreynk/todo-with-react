import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import PopUp from './components/PopUp';
import Todos from './components/Todos';
import About from './components/About';
import AboutAuthor from './components/AboutAuthor';
import AboutApp from './components/AboutApp';


function App() {
  const [menu, setMenu] = useState(true)
  return (
    <div className = 'App'>
      <BrowserRouter>
        {menu ? <button onClick = { () => setMenu(false)} className = 'hamburger'><GiHamburgerMenu /></button> : <PopUp setMenu = {setMenu} />}
        <Routes>
          <Route path = '/' element = {<Todos/>} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/about/app' element = {<AboutApp />} />
          <Route path = '/about/author' element = {<AboutAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
