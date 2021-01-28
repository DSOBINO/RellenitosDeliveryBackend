
const { response } = require('express');
const { validarGoogleIdToken } = require('../helpers/google-verify-token');

const googleAuth = async ( req, res = response ) => {

//TODO : Obtener el Token

    const token  = req.body.token;

    if ( !token )
    {
        return res.json({
            ok : false,
            msg : 'No hay Token en la peticion'
        });
    }

    const googleUser = await validarGoogleIdToken( token );

    if ( !googleUser) {
        return res.status(400).json({
               ok : false         
        });
    }

    res.json ({
        ok:true,
        googleUser 
    });

}

module.exports = { 
    googleAuth
}
