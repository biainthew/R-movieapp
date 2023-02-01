import React from 'react';
import Home from './Routes/Home';
import Navigation from './component/Navigation';
import { BrowserRouter, Routes, Router, Link, Route } from 'react-router-dom';
import About from './Routes/About';
import Detail from './Routes/Detail';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;