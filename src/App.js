import React,{Fragment} from 'react'
import styled from 'styled-components';
import {Routes,Route,NavLink,Navigate} from 'react-router-dom';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Tienda from './components/Tienda';


function App() {
  return (
    <Fragment>
      <div className="container">
        <nav className="navbar navbar-dark bg-primary justify-content-center">
          <NavLink to={"/Inicio"}  className="navbar-brand btn btn-primary btn-lg" href="#">Inicio</NavLink>
          <NavLink to={"/blog"}  className="navbar-brand btn btn-primary btn-lg" href="#">Blog</NavLink>
          <NavLink to={"/tienda"}  className="navbar-brand btn btn-primary btn-lg" href="#">Tienda</NavLink>        
        </nav>

        <div className="">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path='*' element={<Inicio />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

