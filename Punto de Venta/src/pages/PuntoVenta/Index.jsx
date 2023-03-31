



function SalePoint() {


  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col gap-2 ">
      
    <div className="p-10 border-dashed border-4 border-[#6ED4A5] rounded-3xl">

      <h1 className="text-4xl pb-16 font-bold text-center"> Venta de Productos </h1>

      <form action="" className="grid grid-cols-2">
        
        <div className="p-2">
          <h3>Codigo de Barras: </h3>
        </div>
        <div className="p-2">
          <input type="text" className="border-2 border-[#44403c] rounded-lg" />
        </div>
        

        
        <div className="p-2">
          <h3>Precio del Producto: </h3>
        </div>
        <div className="p-2">
          <label htmlFor="" className="px-9 text-[#9ca3af] rounded-lg"> Precio del Producto </label>
        </div>

        <div className="p-2">
          <h3>Cantidad: </h3>
        </div>
        <div className="p-2">
          <select placeholder="CANTIDAD" className="w-full text-[#9ca3af] border-2 border-[#44403c] rounded-lg appearance-none" >
            <option className="text-center"> Cantidad de Productos </option>
          </select>
        </div>

        <div className="p-2">
          <h3>Subtotal: </h3>
        </div>
        <div className="p-2">
          <label htmlFor="" className="px-6 text-[#9ca3af] rounded-lg"> Subtotal </label>
        </div>

        <div className="p-2">
          <h3>IVA: </h3>
        </div>
        <div className="p-2">
          <label htmlFor="" className="px-11 text-[#9ca3af] rounded-lg"> IVA </label>
        </div>

        <div className="p-2">
          <h3>Total: </h3>
        </div>
        <div className="p-2">
          <label htmlFor="" className="px-10 text-[#9ca3af] rounded-lg"> Total </label>
        </div>
        
        <div className="pt-8">
          <button className="p-3 px-4 rounded-2xl bg-[#6ED4A5] font-medium" > Realizar Compra </button>
        </div>

      </form>

      </div>

    </div>
  )
}

export default SalePoint