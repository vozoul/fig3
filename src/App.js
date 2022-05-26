import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Sign, Servers, Members, Error } from "./pages"
import { Brand, Menu, Footer, Socials } from './components';
import {AppContext} from './services/contexts/AppContext';
import config from "./services/config/config.js"
import './styles/App.css';


function App() {

  const {theme, toggleTheme, sectionTitle} = useContext(AppContext)
  useEffect(() => {
    const style = config.style[theme]
    document.title = config.appName
    const root = document.documentElement
    
    for (var key in style) {
      if (style.hasOwnProperty(key)) {
        root.style.setProperty(key, style[key])
      }
    }
  }, [theme, toggleTheme])


  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Brand />
          <h2 className="sec-title">{sectionTitle}</h2>
          {(sectionTitle !== "Error") && <Socials />}
        </header>
        <div className="content">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
        {/* <Admin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
