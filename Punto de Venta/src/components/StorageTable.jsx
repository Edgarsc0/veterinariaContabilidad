import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";

const disponibility = (boolean) =>{
  if(boolean){
    return "Disponible"
  } else{
    return "No disponible"
  }
}

 
const columns = [
  { id: 'nomProduct', label: 'Nombre del Producto', minWidth: 200, align: 'left', format: (value) => value.toLocaleString('en-US') },
  { id: 'marc', label: 'Marca', minWidth: 100, align: 'left', format: (value) => value.toLocaleString('en-US') },
  { id: 'prec', label: 'Precio', minWidth: 50, align: 'center', format: (value) => value.toLocaleString('en-US') },
  { id: 'stk', label: 'Stock', minWidth: 50, align: 'center', format: (value) => value.toLocaleString('en-US') },
  { id: 'edo', label: 'Estado', minWidth: 150, align: 'left', format: (value) => value.toLocaleString('en-US') },
  { id: 'cat', label: 'Categoria', minWidth: 100, align: 'left', format: (value) => value.toLocaleString('en-US') },
  // {
  //   id: 'nomProduct',
  //   label: 'Nombre del Producto',
  //   minWidth: 200,
  //   align: 'Center',
  //   format: (value) => value.toLocaleString('en-US'),
  // }
];

function createData(nomProduct, marc, prec, stk, edo, cat) {
  // const density = population / size;
  return { nomProduct, marc, prec, stk, edo, cat };
}

const rows = [
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
  createData('Purina', 'Purina', '$200', 4, 'Activo', 'Alimento'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
});


const StorageTable = () => {
  // const URL = "https://veterinariabackend-production-51eb.up.railway.app/api";
  // const setCategoria = async (id_cat) =>{
  //   return await axios.get(`${URL}/categorias/${id_cat}`).then((res) => {
  //     return res.data.nombre_cat;
  //   });
  // }
  const [Productos, setProductos] = useState([]);
  
  useEffect(() => {
    const getData=async()=>{
      const response=await axios.get("http://localhost:8000/getProductos")
      console.log(response);
  }
  }, []);

  Productos.map((producto) => {
    rows.push(createData(producto.nombre_pro, producto.marca_pro, `$ ${producto.precio_pro}`, producto.stock_pro, disponibility(producto.estado_pro), producto.id_cat))
  })

  const classes = useStyles();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='z-0 flex h-full w-full flex-col items-center justify-center gap-5 MuiBox-root css-0'>

      <div className='p-2'>
        <h1 className='font-Inter text-center text-4xl text-[#6ED4A5] p-8'>Inventario</h1>
      </div>

      <div className='border-4 rounded-full border-[#6ED4A5] bg-[#6ED4A5]'>
        <a href='./AddProduct'>
          <button className='p-2' >+ Agregar Producto</button>
        </a>

      </div>

      <div className='h-[26rem] w-[1000px] MuiBox-root'>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );

}

export default StorageTable;