import mysql from 'mysql2'
import config from '../config/config'

const getConecttion=()=>{
    const connection=mysql.createConnection({
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DATBASE,
        port: +config.DB_PORT,
        host: config.DB_HOST
    })
//ESTABLECER CONECCIÓN

   connection.connect((error)=>{
       if(error){
        console.log('conexión fallida')
            throw error
            
       }else{
           console.log('conexión exitosa')
       }
   })
   

return connection
   }


const  executeQuery= (Query : string):Promise<any> =>{

    return new Promise((resolve,reject)=>{
          try{
            const connection=getConecttion()
            connection.query(Query,(error,result)=>{
                 if(error){
                      reject(error)
                 }else{
                      resolve(result)
                 }
            })
          }catch(error){

          }
    })
// ejecutar el Query    
}

export default executeQuery;