import {createPool} from 'mysql2/promise';

const con=createPool({
    host:"containers-us-west-22.railway.app",
    port:"8075",
    password:"KpWhSALi3NCbnsh5Iy2P",
    user:"root",
    database:"Veterinaria2"  
})

export default con;