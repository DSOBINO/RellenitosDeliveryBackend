

const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '617029984546-6gocltouqgigqikt9mn0g3kceg4003qo.apps.googleusercontent.com'

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async ( token ) => {

    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [ 
                CLIENT_ID,
                '617029984546-iodg3p4pllkq97msfop5j4gg5gpcmkn4.apps.googleusercontent.com'  // Specify the CLIENT_ID of the app that accesses the backend
            ],
            
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });

        const payload = ticket.getPayload();
    

        //const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        console.log(payload);

        return {
            name    : payload['name'],
            picture : payload['picture'],
            email   : payload['email'],
        }
    } catch (error)
    {
        return null;
    }
}

module.exports = {
    validarGoogleIdToken
}