import React from 'react'
import Productos from '../components/Productos';


const Tienda = ({productosGuardados, setProductosGuardados}) => {
  return (
    <>
      <h1>Tienda</h1>
      <Productos
        productosGuardados={productosGuardados}
        setProductosGuardados={setProductosGuardados}
      />
    </>
  );
}
export default Tienda;