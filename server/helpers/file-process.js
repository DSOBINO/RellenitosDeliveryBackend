


const loadBaseFile = async  => {

    console.log("Ingresó a Helpers/file-process");

    var productsFile;

    try
    {
        productsFile = require('../dataFiles/products.json');
    } 
    catch (error)
    {
        productsFile = [];
    }

    return productsFile;
}

module.exports = {
    loadBaseFile
}