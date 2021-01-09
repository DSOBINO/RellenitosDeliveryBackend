
const { response } = require('express');
const { loadBaseFile } = require('../helpers/file-process');

const dataLoader = async ( req, res = response ) => {

    console.log("Ingresó a Controllers/utils");
//TODO : Obtener el Token

    const token  = req.body.token;

    if ( !token )
    {
        return res.json({
            ok : false,
            msg : 'No hay Token en la peticion'
        });
    }

    //const googleUser = await validarGoogleIdToken( token );

    const googleUser = "abc";

    const baseFile = await loadBaseFile();

    if ( !googleUser) {
        return res.status(400).json({
               ok : false         
        });
    }

    res.json ({
        ok:true,
        googleUser,
        baseFile 
    });

}

module.exports = { 
    dataLoader
}
