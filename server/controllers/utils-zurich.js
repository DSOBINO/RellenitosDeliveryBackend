
const { response } = require('express');
const { desplegarContratantesGestion, insertarContratantesGestion, actualizarContratantesGestion, eliminarContratantesGestion } = require('../helpers/zurich');

const desplegarCG = async ( req, res = response ) => {

//TODO : Obtener el Token
/*
    const token  = req.body.token;

    if ( !token )
    {
        return res.json({
            ok : false,
            msg : 'No hay Token en la peticion'
        });
    }
*/
    //const googleUser = await validarGoogleIdToken( token );
    const googleUser = "abc";
    const { recordset } = await desplegarContratantesGestion();
    const objResultado = recordset;
    console.dir(objResultado);
//    const { recordset } = objResultado;

/*    
    if ( !googleUser) {
        return res.status(400).json({
               ok : false         
        });
    }
*/

//    ok:true,
//    googleUser,
        res.status(200).json({
            objResultado
        });
}

const actualizarCG = async ( req, res = response ) => {
    const ID        = req.body.ID;
    const rut       = req.body.rut;
    const campo1    = req.body.campo1;
    const campo2    = req.body.campo2;
    const campo3    = req.body.campo3;
    if ( !ID )
    {
        return res.json({
            ok : false,
            msg : 'No hay ID en la peticion'
        });
    }
    const { recordset } = await actualizarContratantesGestion(ID, rut, campo1, campo2, campo3);
    const objResultado = recordset;
    console.dir(objResultado);
    res.status(200).json({
            ok : true,
            input : req.body,
            objResultado,
            fin : true         
    });
}

const insertarCG = async ( req, res = response ) => {
    const rut       = req.body.rut;
    const campo1    = req.body.campo1;
    const campo2    = req.body.campo2;
    const campo3    = req.body.campo3;
    if ( !rut )
    {
        return res.json({
            ok : false,
            msg : 'No hay rut en la peticion'
        });
    }
    const { recordset } = await insertarContratantesGestion(rut, campo1, campo2, campo3);
    const objResultado = recordset;
    console.dir(objResultado);
    res.status(200).json({
            ok : true,
            input : req.body,
            objResultado,
            fin : true         
    });
}

const eliminarCG = async ( req, res = response ) => {
    const ID        = req.body.ID;
    if ( !ID )
    {
        return res.json({
            ok : false,
            msg : 'No hay ID en la peticion'
        });
    }
    const { recordset } = await eliminarContratantesGestion(ID);
    const objResultado = recordset;
    console.dir(objResultado);
    res.status(200).json({
            ok : true,
            input : req.body,
            objResultado,
            fin : true         
    });
}

module.exports = { 
    desplegarCG,
    insertarCG,
    actualizarCG,
    eliminarCG
}
