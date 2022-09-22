import React,{Fragment, useState} from 'react';
import styled from 'styled-components';
import {dataProductos} from '../data/dataPoductos';

const Productos = ({productosGuardados, setProductosGuardados}) => {

  const btnAgregarHandler = (prod) => {
    //console.log(prod)
    if (productosGuardados.length === 0) {
      setProductosGuardados(   
      [ 
        ...productosGuardados, 
        {id: prod.id, descripcion: prod.descripcion, cantidad: 1}  
      ] );

    }else{
      //Clonamos productos guardados
      const clonProductos = [...productosGuardados];

      //Verificamos si ID existe
      const idEnCarrito = clonProductos.filter( (clon) => ( clon.id === prod.id)).length > 0; //Devuelve true si está ese producto

      //Si ya está el producto actualizamos
      if (idEnCarrito) {
        //Buscamos posición y actualizamos la cantidad
        clonProductos.forEach((clonProd, idx) => {
          if (clonProd.id === prod.id) {    
            clonProductos[idx] = {
              id: prod.id, 
              descripcion: prod.descripcion,
              cantidad: clonProductos[idx].cantidad +1 //Sumamos 1 a la cantidad existente
            }
          }          
        });
        //Si no existe el producto lo agregamos
      }else{
        clonProductos.push( { 
          id: prod.id, 
          descripcion: prod.descripcion,
          cantidad: 1})
      }
      //Actualizamos carrito
      setProductosGuardados(clonProductos);
    }
  }


  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Productos</h3>
          </div>

          {
            dataProductos.map( (producto, i)=>(
              <DivProducto key={producto.id} className="col-6">
                <p>{producto.descripcion}</p>
                <button type="button" className="btn btn-outline-primary mb-3 btn-lg" onClick={() => btnAgregarHandler(producto)}>Guardados</button>
              </DivProducto>
            ))
          }
        </div>
      </div>
    </Fragment>
  );
}
export default Productos;


const DivProducto = styled.div`
  border: 1px solid #ebeef3;
  border-radius: 5px;
  text-align: center;
  p {
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
`;



const ContenedorProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 columnas
  gap: 20px;
  padding: 20px 0;
`;

const Producto2 =  styled.div`
  padding: 20px;
  border: 1px solid #ebeef3;
  border-radius: 5px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const Boton = styled.button`
  border: none;
  background: #1c85e8;
  color: #fff;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  border-radius: 3px;
  transition: .3s ease all;

  &:hover {
    background: #1c6ab9;
  }
`;