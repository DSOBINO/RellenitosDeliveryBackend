
var sql = require('mssql');

var config = {
            user              : 'HEXAR',
            password          : '9A4b3C2d1E',
            server            : 'mssql-19184-0.cloudclusters.net',
            port              : 19200,// You can use 'localhost\\instance' to connect to named instance
            database          : 'MOKASWORLDS',
            options           : {
                                enableArithAbort  : true
            }
        }

const desplegarContratantesGestion = async  => {

    const fnExec = async () => {
            try {
                let pool = await sql.connect(config)
    /*            
                let result1 = await pool.request()
                    .input('input_parameter', sql.Int, value)
                    .query('select * from mytable where id = @input_parameter')
                    
                console.dir(result1)
    */        
                // Stored procedure
                let result2 = await pool.request()
                    .input('p_TipoAccion', sql.Int, 1)
                    //.output('output_parameter', sql.VarChar(50))
                    .execute('spu_MFMobile_DesplegarContratantesGestion')
            return result2;

            } catch (err) {
                // ... error checks
                console.log(err);
                return null;
            }
        }
/*    
        sql.on('error', err => {
            // ... error handler
            console.log(err);
            return null;
        })
 */
    return fnExec();

}

const insertarContratantesGestion = async (p_rut, p_campo1, p_campo2, p_campo3)  => {

  const fnExec = async () => {
          try {
              let pool = await sql.connect(config)
              let result2 = await pool.request()
                  .input('rut', sql.Int, p_rut)
                  .input('campo1', sql.VarChar(20), p_campo1)
                  .input('campo2', sql.VarChar(20), p_campo2)
                  .input('campo3', sql.VarChar(20), p_campo3)
                  .execute('spu_MFMobile_InsertarContratantesGestion')
          return result2;

          } catch (err) {
              // ... error checks
              console.log(err);
              return null;
          }
      }
  return fnExec();
}

const actualizarContratantesGestion = async (p_ID, p_rut, p_campo1, p_campo2, p_campo3)  => {

  const fnExec = async () => {
          try {
              let pool = await sql.connect(config)
              let result2 = await pool.request()
                  .input('ID', sql.Int,  p_ID)
                  .input('rut', sql.Int, p_rut)
                  .input('campo1', sql.VarChar(20), p_campo1)
                  .input('campo2', sql.VarChar(20), p_campo2)
                  .input('campo3', sql.VarChar(20), p_campo3)
                  .execute('spu_MFMobile_ActualizarContratantesGestion')
          return result2;

          } catch (err) {
              // ... error checks
              console.log(err);
              return null;
          }
      }
  return fnExec();
}

const eliminarContratantesGestion = async (p_ID)  => {

  const fnExec = async () => {
          try {
              let pool = await sql.connect(config)
              let result2 = await pool.request()
                  .input('ID', sql.Int, p_ID)
                  .execute('spu_MFMobile_EliminarContratantesGestion')
          return result2;

          } catch (err) {
              // ... error checks
              console.log(err);
              return null;
          }
      }
  return fnExec();
}

module.exports = {
    desplegarContratantesGestion,
    insertarContratantesGestion,
    actualizarContratantesGestion,
    eliminarContratantesGestion
}