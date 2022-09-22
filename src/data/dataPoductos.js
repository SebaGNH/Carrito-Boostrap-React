import shortid from 'shortid';

const dataProductos = [
  {id: shortid.generate(), descripcion: '#1 - Producto'},
  {id: shortid.generate(), descripcion: '#2 - Producto'},
  {id: shortid.generate(), descripcion: '#3 - Producto'},
  {id: shortid.generate(), descripcion: '#4 - Producto'},
  {id: shortid.generate(), descripcion: '#5 - Producto'},
  {id: shortid.generate(), descripcion: '#6 - Producto'},
];

const dataCarrito = [
  {id: shortid.generate(), cantidad: 2, nombre: 'Producto 1'},
  {id: shortid.generate(), cantidad: 2, nombre: 'Producto 2'},
  {id: shortid.generate(), cantidad: 2, nombre: 'Producto 3'}
];

export {dataProductos,dataCarrito};