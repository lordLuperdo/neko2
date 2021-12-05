import { response } from "express";

const agregarCarrito=(req,res)=>{
    res.send("agregar producto")
}

const eliminarCarrito=(req,res)=>{
    res.send("eliminar del carrito")
}

const verCarrito=(req,res)=>{
    res.send("ver carrito")
}

const confirmarPedido=(req,res)=>{
    res.send("pedido confirmado")
}


export{agregarCarrito,eliminarCarrito,verCarrito,confirmarPedido}