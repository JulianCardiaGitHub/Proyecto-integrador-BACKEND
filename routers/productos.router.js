import express from 'express'
const routerProductos = express.Router()
import controladores from '../controllers/productos.controllers.js'


// ! GET ALL (READ) 

routerProductos.get('/', controladores.getAll)

// ! GET ONE (READ)
routerProductos.get('/:id', controladores.getOne)

// ! POST (CREATE) 

routerProductos.post('/', controladores.create) 

// ! PUT (UPDATE) 

routerProductos.put('/:id', controladores.update)

// ! DELETE (DELETE) 
routerProductos.delete('/:id', controladores.remove)

export default routerProductos