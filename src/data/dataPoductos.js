import shortid from 'shortid';

const dataProductos = [
  {id: shortid.generate(), descripcion: 'Agata'},
  {id: shortid.generate(), descripcion: 'Cuarzo'},
  {id: shortid.generate(), descripcion: 'Topacio'},
  {id: shortid.generate(), descripcion: 'Hematita'},
  {id: shortid.generate(), descripcion: 'Mármol'},
  {id: shortid.generate(), descripcion: 'Yeso'},
];

const dataCarrito = [
  {id: shortid.generate(), cantidad: 2, nombre: 'Producto 1'},
  {id: shortid.generate(), cantidad: 2, nombre: 'Producto 2'},
  {id: shortid.generate(), cantidad: 2, nombre: 'Producto 3'}
];

export {dataProductos,dataCarrito};