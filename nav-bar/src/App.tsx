import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/About/About';
import { Location } from './pages/Location/Location';
import { News } from './pages/News/News';
import { GetStarted } from './pages/GetStarted/GetStarted';
import { NavBar } from './components/NavBar/NavBar';
import { Favorite } from './pages/Favorite/Favorite';

function App() {
  return (
    <Router>
     
        <NavBar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About-us' element={<AboutUs/>}/>
            <Route path='/location' element={<Location/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/get-started' element={<GetStarted/>} />
            <Route path='/favorite' element={<Favorite/>} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
