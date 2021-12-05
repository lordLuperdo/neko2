import { Router } from "express";
import { agregarCarrito, confirmarPedido, eliminarCarrito, verCarrito } from "../controller/usuarios";

const clientesRoutes=(app)=>{

const router=Router();

app.use("/",router)

router.post("/agregarcarrito",agregarCarrito);
router.delete('/eliminarCarrito/id',eliminarCarrito);
router.get('/vercarrito',verCarrito);
router.post('/confirmarpedido/id',confirmarPedido);


}

export default clientesRoutes;