import React,{Fragment} from 'react'
import styled from 'styled-components';
import {Routes,Route,NavLink,Navigate} from 'react-router-dom';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Tienda from './components/Tienda';


function App() {
  return (
    <Fragment>
      <DivContenedor className="container">
        <Nav className="navbar navbar-dark bg-primary justify-content-center">
          <NavLink to={"/"} className="navbar-brand btn btn-primary btn-lg" href="#">Inicio</NavLink>
          <NavLink to={"/blog"}  className="navbar-brand btn btn-primary btn-lg" href="#">Blog</NavLink>
          <NavLink to={"/tienda"}  className="navbar-brand btn btn-primary btn-lg" href="#">Tienda</NavLink>        
        </Nav>

        <div className="">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path='*' element={<Inicio />} />
          </Routes>
        </div>
      </DivContenedor>
    </Fragment>
  );
}

export default App;



const DivContenedor = styled.div`
  //background: #404040;
  //margin: 40px 0;
  //border-radius: 10px;
  //box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Nav = styled.nav`
  //width: 100%;
  //text-align: center;
  //background: #092c4c;
  //grid-column: span 2;
  border-radius: 3px;
//
  //a {
  //    color: #fff;
  //    display: inline-block;
  //    padding: 15px 20px;
  //}
//
  //a:hover {
  //    background: #1d85e8;
  //    text-decoration: none;
  //}
`;






const Contenedor2 = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
      color: #fff;
      display: inline-block;
      padding: 15px 20px;
  }

  a:hover {
      background: #1d85e8;
      text-decoration: none;
  }
`;