import React, {Fragment,useState} from 'react';
import styled from 'styled-components';
import {dataCarrito} from '../data/dataPoductos';

const Carrito = () => {
  const [carrito, setCarrito] = useState(dataCarrito);


  return (
    <Fragment>
      <h2>Carrito de compras</h2>
      
      {
        carrito.length > 0?
        carrito.map( (c) => <p key={c.id} > {c.nombre} </p> )
        :
        <p>Carrito vacío</p>
      }
    </Fragment>
  );
}
export default Carrito;