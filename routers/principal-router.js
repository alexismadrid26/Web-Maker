var express = require("express");
var router = express.Router();
var usuario = require("../models/usuario");
var proyecto = require("../models/proyecto");
var membresia = require("../models/membresia");


var mongoose = require("mongoose");

router.get("/", function (req, res) {
    usuario.find({ _id: req.session.codigoUsuario })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
});


router.get("/membresia", function (req, res) {
    usuario.aggregate([
        {
            $lookup: {
                from: "membresias",
                localField: "membresia",
                foreignField: "_id",
                as: "membresia"
            }
        },
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.session.codigoUsuario)
            }
        },
        {
            $project: { membresia: 1 }
        }
    ]).then(data => {
        //console.log(data);
        res.send(data);
    })
        .catch(error => {
            res.send(error);
        });


});


router.get("/proyectos", function (req, res) {
    usuario.aggregate([
        {
            $lookup: {
                from: "proyectos",
                localField: "proyectos",
                foreignField: "_id",
                as: "proyectos"
            }
        },
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.session.codigoUsuario)
            }
        },
        {
            $project: { proyectos: 1 }
        }
    ]).then(data => {
        res.send(data);
    })
        .catch(error => {
            res.send(error);
        });
});

router.post("/new-proyect", function (req, res) {
    var r = new proyecto({
        nombre : req.body.nombreProyect,
        descripcion : req.body.descripcionProyect,
        fecha : "05/05/2019",
        tamano : "0 MB",
        contenido : [],
        usuario : req.session.codigoUsuario,
        compartidos: []
    });

    r.save()
        .then(obj => {
            res.send(obj);
        })
        .catch(error => {
            res.send(obj);
        });
});
router.post("/:id/new-proyect-user", function (req, res) {
    usuario.update(
        {
            _id: mongoose.Types.ObjectId(req.session.codigoUsuario)
        },
        {
            $push:
            {
                proyectos: mongoose.Types.ObjectId(req.params.id)
            }
        })
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});
//Crear Carpeta
router.post("/new-carpeta-user", function (req, res) {
    usuario.update(
        {
            _id: mongoose.Types.ObjectId(req.session.codigoUsuario)
        },
        {
            $push:
            {
                contenido: {_id: mongoose.Types.ObjectId(), nombre: req.body.nombreCarpeta, tipo: "carpeta", nivel: 0, padre: "/"}
            }
        })
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});
//Crear Archivo
router.post("/new-archivo-user", function (req, res) {
    usuario.update(
        {
            _id: mongoose.Types.ObjectId(req.session.codigoUsuario)
        },
        {
            $push:
            {
                contenido: {_id: mongoose.Types.ObjectId(), nombre: req.body.nombreCarpeta, tipo: "carpeta", nivel: 0, padre: "/", extension: "js", informacion: " "}
            }
        })
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

router.get("/proyectos/:id/contenido", function (req, res) {
    proyecto.find({ _id : req.params.id }, {nombre: 1, contenido : 1}) //}
    .then(data => {
        //console.log("2: " + data[0].contenido[0].nombre);
        res.send(data);
    })
    .catch(error => {
        res.send(error);
    });
});

//Obtener los compartidos de un proyecto
router.get("/proyectos/:id/compartidos", function (req, res) {
    proyecto.find({ _id : req.params.id }, {compartidos: 1}) //}
    .then(data => {
        //console.log("2: " + data[0].contenido[0].nombre);
        res.send(data);
    })
    .catch(error => {
        res.send(error);
    });
});
//
router.post("/proyectos/:idProyecto/:idUsuario/new-shared", function (req, res) {
    proyecto.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idProyecto)
        },
        {
            $push:
            {
                compartidos: mongoose.Types.ObjectId(req.params.idUsuario)
            }
        })
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});


//Mostrar Compartidos
router.get("/compartidos", function (req, res) {
    usuario.aggregate([
        {
            $lookup: {
                from: "proyectos",
                localField: "_id",
                foreignField: "compartidos",
                as: "resultado"
            }
        },
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.session.codigoUsuario)
            }
        },
        {
            $project: { resultado: 1 }
        }
    ]).then(data => {
        res.send(data);
    })
        .catch(error => {
            res.send(error);
        });
});


module.exports = router;