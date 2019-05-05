var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        tipoMembresia : String,
        precio : Number,
        almacenamiento : String,
        fechaInicio : String,
        usuarios : Array
    }
);

module.exports = mongoose.model('membresias',esquema);