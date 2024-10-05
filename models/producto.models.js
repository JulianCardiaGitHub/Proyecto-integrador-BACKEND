import mongoose from "mongoose";
import ProductosEsquema from "./esquemas/ProductosEsquemas.js";

// ! MODELO MONGOOSE
const ProductosModelo = mongoose.model("productos", ProductosEsquema);

const obtenerTodos = async () => {
  try {
    const productos = await ProductosModelo.find();
    //console.log(productos)
    return productos;
  } catch (error) {
    console.log("[obtenerTodos]", error);
  }
};

const obtenerUnProducto = async (id) => {
  try {
    const producto = await ProductosModelo.findById(id);
    console.log(producto);
    return producto;
  } catch (error) {
    console.log("[obtenerUnProducto]", error);
  }
};

const crearProducto = async (producto) => {
  try {
    const productoCreado = await ProductosModelo.create(producto);
    //console.log(productoCreado)
    return productoCreado;
  } catch (error) {
    //console.log('[crearProducto]', error)
    throw error;
  }
};

const updateProducto = async (id, productoPorEditado) => {
  try {
    const options = { new: true };
    const productoYaEditado = await ProductosModelo.findByIdAndUpdate(
      id,
      productoPorEditado,
      options
    );
    return productoYaEditado;
  } catch (error) {
    throw error;
  }
};

const deleteProducto = async (id) => {
  try {
    const productoBorrado = await ProductosModelo.findByIdAndDelete(id);
    //console.log(productoBorrado)
    return productoBorrado;
  } catch (error) {
    console.log("[deleteProducto]", error);
  }
};

export default {
  obtenerTodos,
  obtenerUnProducto,
  crearProducto,
  updateProducto,
  deleteProducto,
};
