import mongoose from "mongoose";

// ! Creamos esquema (La descripción de como va a ser nuestro documento)

const ProductosEsquema = mongoose.Schema(
    {
       
        nombre: {
            type: String,
            require: true
        },
        precio: Number,
        stock: Number,
        detalles: String,
        foto: String,
        envio: Boolean
    },
    {
        timestamps: true, // createAt | updatedAt 
        versionKey: false
    }
    
)

export default ProductosEsquema