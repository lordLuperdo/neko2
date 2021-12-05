import  Express  from "express";
import productosRoutes from "./routes/productos";
import clientesRoutes from "./routes/usuarios";
import config from "./config/config";
const app=Express();


productosRoutes(app);
clientesRoutes(app);
 

app.listen(config.PORT,()=>{
 return console.log(`servidor corriendo en el puerto ${config.PORT}`)
})



app.get("/",(req,res)=>{
res.send("proseco de inicio exitoso")
})
//body parsen

//fin bp

//importo las rutas de playlist


//app.get((req,res,next)=>{})
//traer el puerto



