import React, {Fragment,useState} from 'react';
import styled from 'styled-components';
import {dataCarrito} from '../data/dataPoductos';

const Carrito = ({productosGuardados}) => {
  //console.log(productosGuardados)
  //const [carrito, setCarrito] = useState(productosGuardados);

  return (
    <Fragment>
      <h2>Carrito de compras</h2>
      
      {
        productosGuardados.length > 0?
        productosGuardados.map( (c, idx) => (
          <DivProductos key={idx} className='py-3'>
            <P> {c.descripcion} </P>
            Cantidad: {c.cantidad}
          </DivProductos>
        ) )
        :
        <p>Carrito vacío</p>
      }
    </Fragment>
  );
}
export default Carrito;


const DivProductos = styled.div`
  border-bottom: 1px solid #ebebf3;
  font-size: .9rem;
`;

const P = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;