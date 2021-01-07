import mysql from 'mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err, connection) {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Conexión con la base de datos perdida');
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Conexión rechazada');
      }
    }
    if (connection) {
      console.log('Conexión realizada: ', keys.database.database);
      connection.release();
    }
  });
  
  export default pool;