import React,{Fragment, useState} from 'react'
import styled from 'styled-components';
import {Routes,Route,NavLink,Navigate} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Blog from './pages/Blog';
import Tienda from './pages/Tienda';
import Carrito from './components/Carrito';


function App() {
  //Productos guardados
  const [productosGuardados, setProductosGuardados] = useState([])

  return (
    <Fragment>
      <div className="container mt-4">
        <Row className="row">

          <Nav className="navbar navbar-dark bg-primary justify-content-center col-12">
            <NavLink to={"/inicio"} className="navbar-brand btn btn-primary btn-lg" href="#">Inicio</NavLink>

            <NavLink to={"/blog"} className="navbar-brand btn btn-primary btn-lg" href="#">Blog</NavLink>

            <NavLink to={"/tienda"} className="navbar-brand btn btn-primary btn-lg" href="#">Tienda</NavLink>        
          </Nav>

          <DivMain className="col-8">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/blog" element={<Blog />} />
              {/* <Route path="/tienda" element={<Tienda />} /> */}
              <Route path="/tienda" element={<Tienda 
                productosGuardados={productosGuardados}
                setProductosGuardados={setProductosGuardados}
              />} />

              <Route path='*' element={<Inicio />} />
            </Routes>
          </DivMain>

          <Aside className='col-4'>
            <Carrito />
          </Aside>
        </Row>
      </div>
    </Fragment>
  );
}

export default App;



const Nav = styled.nav`
  border-radius: 5px 5px 0px 0px;
  a{
    border: 1px solid #0056b3;
  }
`;

const Row = styled.div`
  background-color: #404040;
`;


const DivMain = styled.div`
  padding: 40px;
`;

const Aside = styled.div`
  background-color: #454545;
`;
