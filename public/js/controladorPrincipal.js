function irPrincipal() {
    $.ajax({
        url: "/principal",
        method: "GET",
        dataType: "json",
        success: function (res) {
            document.getElementById("nav-usuario-perfil").innerHTML = `<button class="d-inline btn btn-sm btn-light" id="btn-foto-perfil" name="foto-perfil"
                type="button"><img src="img/${res[0].foto}" alt="${res[0].nombre}" class="rounded-circle" height="30"
                    width="30">
                <p class="d-inline text-secondary"><strong>${res[0].nombre} ${res[0].apellido}</strong></p>
            </button>`;
            DOM(res[0]);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function mostrarProyectos() {
    $.ajax({
        url: "/principal/proyectos",
        method: "GET",
        dataType: "json",
        success: function (res) {
            //console.log(res);
            var valor = '';
            valor += `<div class="text-right mb-3">
            <button class="btn btn-sm btn-success" id="btn-proyecto-1" data-toggle="modal"
                data-target="#modalNuevoProyecto" name="proyecto-1" type="button">
                <p class="d-inline"><strong>Nuevo Proyecto</strong></p>
            </button>

            <div class="modal fade" id="modalNuevoProyecto" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nueva Proyecto </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="formulario-new-proyect">
                                <div class="form-group">
                                    <label for="name-proyect"></label>
                                    <input type="text" class="form-control" name="nombreProyect" id="name-proyect"
                                        placeholder="Nombre">
                                </div>
                                <div class="form-group">
                                    <label for="id-descripcion-proyect"></label>
                                    <input type="text" class="form-control" name="descripcionProyect" id="id-descripcion-proyect"
                                        placeholder="Descripción">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal"
                                onclick="CrearProyecto();">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="row" id="id-proyectos-seccion">`;
            for (var i = 0; i < res[0].proyectos.length; i++) {
                valor += `<div class="col-xl-4 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xl-8">
                                            <button class="btn btn-sm btn-light" id="${res[0].proyectos[i]._id}" name="${res[0].proyectos[i]._id}"
                                                type="button" onclick='mostrarAbrirProyecto("${res[0].proyectos[i]._id}");'><i
                                                    class="fas fa-folder-open fa-2x"></i>
                                                <p class="d-inline text-dark"><strong>${res[0].proyectos[i].nombre}</strong></p>
                                            </button>
                                        </div>
                                        <div class="col-xl-4 text-right">
                                            <button type="button" onclick='elegirCompartir("${res[0].proyectos[i]._id}","${res[0].proyectos[i].usuario}");' class="btn btn-light" data-toggle="modal" data-target="#compartirModal" data-toggle="tooltip" data-placement="top" title="Compartir">
                                                <i class="fas fa-share-alt" style="color: black;"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer text-muted">
                                    <p class="text-secondary"><strong>Descripción: ${res[0].proyectos[i].descripcion}</strong></p>
                                    <p class="text-secondary"><strong>Tamaño: ${res[0].proyectos[i].tamano}</strong></p>
                                </div>
                            </div>
                        </div>`;
            }
            valor += `</div>
            </div>`;
            document.getElementById("id-principal").innerHTML = valor;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function elegirCompartir(idProyecto, idUserDuenoProyecto) {
    $.ajax({
        url: `/principal/proyectos/${idProyecto}/compartidos`,
        method: "GET",
        dataType: "json",
        success: function (respuesta) {
            $.ajax({
                url: "/usuarios",
                method: "GET",
                dataType: "json",
                success: function (res) {
                    var contenid = '';
                    for (var i = 0; i < res.length; i++) {
                        contenid += `<div class="px-1 py-2 story-card">
                                        <div class="fl">
                                            <img class="img-fluid img-thumbnail rounded-circle"  src="img/${res[i].foto}">
                                        </div>  
                                        <div class="py-1 px-1 fl">
                                            <small class="mr-md-auto"><b> ${res[i].nombre} ${res[i].apellido} </b></small>`;

                        var bandera = false;
                        for (var j = 0; j < respuesta[0].compartidos.length; j++) {
                            if (respuesta[0].compartidos[j] == res[i]._id) {
                                bandera = true;
                                break;
                            } else if(idUserDuenoProyecto == res[i]._id){
                                bandera = true;
                                break;
                            }
                        }

                        if (bandera) {
                            contenid += `<button id="btn-compartir-${res[i]._id}" onclick='compartir("${res[i]._id}", "${idProyecto}")' class="btn btn-outline-danger btn-sm disabled"><i class="fas fa-share-alt"></i></button><br>
                                            </div>
                                        </div>`;
                        } else {
                            contenid += `<button id="btn-compartir-${res[i]._id}" onclick='compartir("${res[i]._id}","${idProyecto}")' class="btn btn-outline-success btn-sm"><i class="fas fa-share-alt"></i></button><br>
                                            </div>
                                    </div>`;
                        }
                    }
                    document.getElementById("user-compartir").innerHTML = contenid;
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function compartir(idUsuario, idProyecto) {
    $.ajax({
        url: `/principal/proyectos/${idProyecto}/${idUsuario}/new-shared`,
        method: "POST",
        dataType: "json",
        success: function (res) {
            $(`#btn-compartir-${idUsuario}`).removeClass("btn-outline-success disabled");
            $(`#btn-compartir-${idUsuario}`).addClass("btn-outline-danger disabled");
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function mostrarProyectosCompartidos() {
    $.ajax({
        url: "/principal/compartidos",
        method: "GET",
        dataType: "json",
        success: function (res) {
            var valor = '';
            valor += `<div class="row" id="id-proyectos-seccion">`;

            for (var i = 0; i < res[0].resultado.length; i++) {
                valor += `<div class="col-xl-4 col-md-6 col-sm-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <button class="btn btn-sm btn-light" id="${res[0].resultado[i]._id}" name="${res[0].resultado[i]._id}"
                                    type="button" onclick='mostrarAbrirProyecto("${res[0].resultado[i]._id}");'><i
                                        class="fas fa-folder-open fa-2x"></i>
                                    <p class="d-inline text-dark"><strong>${res[0].resultado[i].nombre}</strong></p>
                                </button>
                            </div>
                            <div class="card-footer text-muted">
                                <p class="text-secondary"><strong>Descripción: ${res[0].resultado[i].descripcion}</strong></p>
                                <p class="text-secondary"><strong>Tamaño: ${res[0].resultado[i].tamano}</strong></p>
                            </div>
                        </div>
                    </div>`;
            }
            valor += `</div>
                </div>`;
            document.getElementById("id-principal").innerHTML = valor;
            //console.log(res);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function DOM(datos) {
    var urk = "/principal/membresia";
    $.ajax({
        url: urk,
        dataType: "json",
        method: "get",
        success: function (res) {
            document.getElementById("id-principal").innerHTML = `<div class="container-fluid mb-3">
                        <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header" style="background-color: white">
                                    <p class="h5">Autor</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Todo el contenido pertenece a ${datos.nombre} ${datos.apellido}. Derechos reservador por politicas de WebMaker.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header" style="background-color: white">
                                    <p class="h5">Tecnologías</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Javascript<br>Html<br>CSS</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header" style="background-color: white">
                                    <p class="h5">Consumo</p>
                                </div>
                                <div class="card-body text-center">
                                    <p class="display-3 card-text"><i class="fas fa-chart-pie" style="color: teal"></i>
                                        0.5GB/${res[0].membresia[0].almacenamiento}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header" style="background-color: white">
                                    <p class="h5">Anuncios</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Visita nuestra sección de noticias para estar al tanto de todo sobre WebMaker</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header text-center" style="background-color: white">
                                    <p class="h5">Tipo de Plan</p>
                                </div>
                                <div class="card-body text-center">
                                    <p class="card-text display-5"><strong>${res[0].membresia[0].tipoMembresia}</strong>
                                    </p>
                                    <p class="card-text">Compartir proyectos: 10 usuarios.
                                    </p>
                                    <p class="card-text">${res[0].membresia[0].almacenamiento} Almacenamiento.
                                    </p>
                                    <button class="btn btn-success" id="btn-nuevo-plan" name="nuevo-plan"
                                        type="button">Adquirir nuevo plan</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header" style="background-color: white">
                                    <p class="h5">Estadisticas</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text"><i class="fab fa-java fa-2x"></i> Registro alumnos</p>
                                    <p class="card-text"><i class="fab fa-js fa-2x"></i> Tarea-POO</p>
                                    <p class="card-text"><i class="fab fa-html5 fa-2x"></i> Trabajo-jefe</p>
                                    <p class="card-text"><i class="fab fa-css3-alt fa-2x"></i> Trabajo-jefe-style</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <div class="card-header" style="background-color: white">
                                    <p class="h5">Ultimo acceso</p>
                                </div>
                                <div class="card-body text-center">
                                    <p class="h4 card-text"><i class="fas fa-map-marker-alt fa-1x"
                                            style="color: rgb(62, 65, 231)"></i> Tegucigalpa, Francisco Morazán</p>
                                    <p class="display-4 card-text"><i class="far fa-clock fa-1x"></i> 9:20AM - 10:00AM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>`;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function obtenerContenido(array, ruta, mostrar, nivell) {
    for (var i = 0; i < array.length; i++) {

        if (array[i].tipo == 'carpeta') {
            var file = { nivel: nivell[0], tipo: array[i].tipo, nombre: array[i].nombre, padre: ruta[(ruta.length - 1)] };
            mostrar.push(file);
            ruta.push(array[i].nombre);
            nivell[0] = nivell[0] + 1;
            obtenerContenido(array[i].contenido, ruta, mostrar, nivell);

        } else if (array[i].tipo == 'archivo') {
            var file = { nivel: nivell[0], tipo: array[i].tipo, nombre: array[i].nombre + "." + array[i].extension, padre: ruta[(ruta.length - 1)], contenido: array[i].contenido };
            mostrar.push(file);
        } else {
            //return "No define";
        }

        if (i == (array.length - 1)) {
            console.log("Nivel: " + nivell);
            nivell[0] = (nivell[0] - 1);
            ruta.pop();
        }
    }
}

function mostrarAbrirProyecto(idProyecto) {
    $.ajax({
        url: "/principal/proyectos/" + idProyecto + "/contenido",
        method: "GET",
        dataType: "json",
        success: function (res) {
            var htm = `<div class="row">
                <div class="col-sm-3">
                    <div class="border-right text-white" id="sidebar-wrapper1">
                        <div class="row sidebar-heading1">
                            <div class="col-xl-6">
                                <p class="h5 text-dark">${res[0].nombre}</p>
                            </div>
                            <div class="col-xl-6">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#carpetaModal" data-toggle="tooltip" data-placement="top" title="Nueva Carpeta"><i class="fas fa-folder" style="color: black;"></i></button>
                                <button type="button" class="btn btn-light" data-toggle="tooltip" data-placement="top" title="Nuevo Archivo"><i class="far fa-sticky-note" style="color: black;"></i></button>
                            </div>
                        </div>
                        <div class="list-group1 list-group-flush1">`;
           nivelMax = 0;
            for (var i = 0; i < res[0].contenido.length; i++) {
                if (res[0].contenido[i].nivel > nivelMax) {
                    nivelMax = res[0].contenido[i].nivel;
                }
            }
            for (var j = 0; j < res[0].contenido.length; j++) {
                if (res[0].contenido[j].nivel == 0) {
                    if (res[0].contenido[j].tipo == 'carpeta') {
                        htm += `<p>
                                <button class="list-group-item list-group-item-action text-dark" type="button" data-toggle="collapse" data-target="#T${res[0].contenido[j]._id}" aria-expanded="false" aria-controls="collapseExample">
                                    <i class="fas fa-angle-right"></i> ${res[0].contenido[j].nombre} 
                                </button>
                            </p>
                            <div class="collapse" id="T${res[0].contenido[j]._id}">
                                <div class="card card-body" id='id-${res[0].contenido[j]._id}'>
                                    <div class="text-right">
                                        <button type="button" class="btn btn-light" data-toggle="modal" data-target="#carpetaModal" data-toggle="tooltip" data-placement="top" title="Nueva Carpeta"><i class="fas fa-folder" style="color: black;"></i></button>
                                        <button type="button" class="btn btn-light" data-toggle="modal" data-target="#archivoModal" data-toggle="tooltip" data-placement="top" title="Nuevo Archivo"><i class="far fa-sticky-note" style="color: black;"></i></button>
                                    </div> 
                                </div>
                            </div>`;
                    } else if (res[0].contenido[j].tipo == 'archivo') {
                        htm += `<button class="list-group-item list-group-item-action text-dark" type="button"
                                    id="btn-${res[0].contenido[j]._id}" data-toggle="modal" onclick='mostrarAbrirArchivo("${idProyecto}","${res[0].contenido[j]._id}");'><i class="fas fa-file-signature"></i>
                                        ${res[0].contenido[j].nombre}
                                </button>`;
                    }
                }
            }
            htm += `</div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <textarea name="text-editor" id="text-editor" cols="120" rows="100"></textarea>
                </div>
            </div>`;
            document.getElementById("id-principal").innerHTML = htm;
            for (var i = 1; i <= nivelMax; i++) {
                for (var j = 0; j < res[0].contenido.length; j++) {
                    if (res[0].contenido[j].nivel == i) {
                        if (res[0].contenido[j].tipo == 'carpeta') {
                            var b = "#id-" + res[0].contenido[j].padre;
                            //console.log(b);
                            $(b).append(`<p>
                                        <button class="list-group-item list-group-item-action text-dark" type="button" data-toggle="collapse" data-target="#T${res[0].contenido[j]._id}" aria-expanded="false" aria-controls="collapseExample">
                                            <i class="fas fa-angle-right"></i> ${res[0].contenido[j].nombre} 
                                        </button>
                                    </p>
                                    <div class="collapse" id="T${res[0].contenido[j]._id}">
                                         <div class="card card-body" id='id-${res[0].contenido[j]._id}'>
                                            <div class="text-right">
                                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#carpetaModal" data-toggle="tooltip" data-placement="top" title="Nueva Carpeta"><i class="fas fa-folder" style="color: black;"></i></button>
                                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#archivoModal" data-toggle="tooltip" data-placement="top" title="Nuevo Archivo"><i class="far fa-sticky-note" style="color: black;"></i></button>
                                            </div>
                                         </div>
                                    </div>`);
                        } else if (res[0].contenido[j].tipo == 'archivo') {
                            var b = "#id-" + res[0].contenido[j].padre;
                            //console.log(b);
                            $(b).append(`<button class="list-group-item list-group-item-action text-dark" type="button"
                                        id="btn-${res[0].contenido[j]._id}" onclick='mostrarAbrirArchivo("${idProyecto}","${res[0].contenido[j]._id}");'><i class="fas fa-file-signature"></i>
                                            ${res[0].contenido[j].nombre}
                                    </button>`);
                        } else {
        
                        }
                    }
                }
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function mostrarAbrirArchivo(idProyect, idArchi) {
    $.ajax({
        url: "/principal/proyectos/" + idProyect + "/contenido",
        method: "GET",
        dataType: "json",
        success: function (res) {
            for(var i = 0; i<res[0].contenido.length; i++){
                if(res[0].contenido[i].tipo == 'carpeta'){

                } else if(res[0].contenido[i].tipo == 'archivo') {
                    if(res[0].contenido[i]._id == idArchi){
                        if(res[0].contenido[i].informacion != ''){
                            document.getElementById("text-editor").value =res[0].contenido[i].informacion;
                            break;
                        } else {
                            document.getElementById("text-editor").value = "Archivo Vacio";
                            break;
                        }
                    }
                }
            }
            
        },
        error: function (error) {
            console.log(error);
        }
    }); 
}

//Creando nuevo proyecto
function CrearProyecto() {
    $.ajax({
        url: "/principal/new-proyect",
        method: "POST",
        data: $("#formulario-new-proyect").serialize(),
        dataType: "json",
        success: function (res) {
            $.ajax({
                url: `/principal/${res._id}/new-proyect-user`,
                dataType: "json",
                method: "post",
                success: function (rese) {
                    mostrarProyectos();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function crearCarpeta() {
    $.ajax({
        url: "/principal/new-carpeta-user",
        method: "POST",
        data: $("#formulario-carpeta").serialize(),
        dataType: "json",
        success: function (res) {
            
        },
        error: function (error) {
            console.log(error);
        }
    });
}


$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})