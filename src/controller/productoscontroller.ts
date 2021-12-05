import { response } from "express";
import executeQuery from "../services/mysql.service";

const obtenerProductos=(req,res)=>{
executeQuery('SELECT * FROM productos').then((response)=>{
    const data={
        message:`${response.length} datos encontrados`,
        data: response.length>=0 ? response: null
    }
 res.json(data);
}).catch((error)=>{
    res.status(500).send(error)
})



}



const obtenerProducto= async(req,res)=>{
const esponse=await executeQuery(`SELECT * FROM productos WHERE idproducto = ${req.params.id}`)
res.send(esponse)

}

const eliminarProducto=(req,res)=>{
res.send("eliminar producto")    
}
const actaulizarProducto=(req,res)=>{
res.send("actualizar producto")    
}

export{obtenerProducto,obtenerProductos,eliminarProducto,actaulizarProducto}