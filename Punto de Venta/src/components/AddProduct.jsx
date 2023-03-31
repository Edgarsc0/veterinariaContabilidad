
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

const AddProduct = () => {
//   const URL = "https://veterinariabackend-production-51eb.up.railway.app/api";
  const { register, handleSubmit } = useForm();

  const [Categorias, setCategorias] = useState([]);
  /**
   * [{
    id_cat:1,
    nombre_cat:"Hola"
  }]
   */
  
  useEffect(() => {
    const getData=async()=>{
        const response=await axios.get("http://localhost:8000/getCategorias")
        console.log(response);
    }
    
    setCategorias[getData()];
  }, []);

  const onSubmit = async (data) => {
    const newData = {
      nombreM_Producto: data.nombre_pro,
      marcaM_Producto: data.marca_pro,
      precio_pro: parseInt(data.precio_pro),
      stock_pro: parseInt(data.stock_pro),
      descripcion_pro: data.descripcion_pro,
      estado_pro: data.estado_pro,
      id_cat: parseInt(data.id_cat),
    };
    console.log(data);
    // await axios
    //   .post(`${URL}/productos`, newData)
    //   .then(() => {
    //     alert("Producto Agregado");
    //   })
    //   .catch(() => {
    //     alert("Error al agregar el producto");
    //   });

    location.replace("http://localhost:5173/Inventario");
  };

  return (
    <div className="z-0 flex h-screen w-full flex-col items-center justify-center gap-5 MuiBox-root css-0">
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <table className="table-auto border-separate border border-slate-400 border-[#6ED4A5] ">
          <tbody>
            <tr>
              <th>
                <h1 className="p-8 text-2xl font-Inter font-bold">
                  Agregar Productos:
                </h1>
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left">
                  {" "}
                  Nombre del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Nombre del Producto"
                  type="text"
                  {...register("nombre_pro", { required: true })}
                />
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left	">
                  {" "}
                  Marca del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Marca del Producto"
                  type="text"
                  {...register("marca_pro", { required: true })}
                />
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left"> Categoría: </p>
              </th>
              <th>
                <select
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  defaultValue="1"
                  {...register("id_cat", { required: true })}
                >
                  {Categorias &&
                    Categorias.map((categoria) => {
                      return (
                        <option key={categoria.id_cat} value={categoria.id_cat}>
                          {categoria.nombre_cat}
                        </option>
                      );
                    })}
                </select>
              </th>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left">
                  {" "}
                  Precio del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Precio del Producto"
                  type="text"
                  {...register("precio_pro", { required: true })}
                />
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left">
                  {" "}
                  Descripción del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Descripción del Producto"
                  type="text"
                  {...register("descripcion_pro", { required: true })}
                />
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left	">
                  {" "}
                  Stock Inicial:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Cantidad"
                  type="text"
                  {...register("stock_pro", { required: true })}
                />
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left	"> Estado: </p>
              </th>
              <th>
                <select
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  defaultValue="1"
                  {...register("estado_pro", { required: true })}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No Disponible</option>
                </select>
              </th>
            </tr>
            <tr>
              <th className="p-2">
                <div className="border-4 rounded-full border-[#6ED4A5] bg-[#6ED4A5] w-2/3">
                  <button className="p-2" type="submit">
                    <p className="text-center p-1"> + Agregar Producto </p>
                  </button>
                </div>
              </th>
              <th className="p-2">
                <div className="border-4 rounded-full border-[#6ED4A5] bg-[#6ED4A5] w-2/3">
                  <button className="p-2" onClick={returnBtn => location.replace("http://localhost:5173/Inventario")}>
                    <p className="text-center p-1"> Cancelar </p>
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddProduct;
