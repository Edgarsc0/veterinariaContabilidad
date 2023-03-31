import express from "express";
const app=express();
import getProductos from "./handlers/getProductos.js";
//import getCategorias from "./handlers/getCategorias.js";
app.get("/getProductos",getProductos);
//app.get("/getContabilidad",getContabilidad);
//app.get("/getCategorias",getCategorias);

const port=process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`server on port ${port}`);
})