import { Router } from "express";
import { actaulizarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../controller/productoscontroller";

const  productosRoutes=(app)=>{

const router=Router();
app.use("/",router);

router.get('/obtenerProductos',obtenerProductos)
router.get('/obtenerProducto',obtenerProducto);
router.put('/actualizarProducto/id',actaulizarProducto);
router.post('/actualizarProducto',actaulizarProducto);
router.delete('/eliminarProducto',eliminarProducto);





}
export default productosRoutes;