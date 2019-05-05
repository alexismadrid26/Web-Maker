
$("#btn-iniciar-sesion").click(function () {
    $.ajax({
        url: "/usuarios/comprobar-sesion",
        method: "GET",
        dataType: "json",
        success: function (res) {
            if (res.comprobacion == 1) {
                // console.log(res.mensaje);
                window.location.href = "/principal.html";
            } else {
                // console.log(res.mensaje);
                window.location.href = "/login.html";
            }
        },
        error: function (error) {
            console.error(error);
        }
    });
});

$("#btn-login").click(function () {
    console.log($("#formulario-login").serialize());
    $.ajax({
        url: "/usuarios/login",
        method: "POST",
        data: $("#formulario-login").serialize(),
        dataType: "json",
        success: function (res) {
            if (res.status == 1) {
                //console.log(res);
                //console.log(res.usuario.nombre);
                window.location.href = "/principal.html";
            }
            else {
                document.getElementById("mensaje-error").innerHTML = `<div class="alert alert-danger" role="alert">
                ${res.mensaje}</div>`;
                console.log(res.mensaje)
            }
        },
        error: function (error) {
            console.error(error);
        }
    });
});
$("#Email").click(function () {
    document.getElementById("mensaje-error").innerHTML = '';
});
$("#password").click(function () {
    document.getElementById("mensaje-error").innerHTML = '';
});






$("#btn-registrarse").click(function () {
    window.location.href = "/registro.html";
});

$("#btn-registro").click(function () {
    if ($("#first-name").val() != '' && $("#last-name").val() != '' && $("#username").val() != '' && $("#E-mail").val() != '' && $("#passwordR").val() != '' && $("#gender").val() != '0' && $("#birthdate").val() != '') {
        var parametros = $("#formulario-registro").serialize();
        console.log("Información a guardar: " + parametros);
        $.ajax({
            url: "/usuarios/registro",
            method: "POST",
            data: $("#formulario-registro").serialize(),
            dataType: "json",
            success: function (res) {
                console.log("Se ha registrado:");
                document.getElementById("mensaje-error-registro").innerHTML = `<div class="alert alert-success" role="alert">
                Se ha Registrado con exito </div>`;
                window.location.href = "/login.html";
            },
            error: function (error) {
                console.error(error);
            }
        });
    } else {
        document.getElementById("mensaje-error-registro").innerHTML = `<div class="alert alert-danger" role="alert">
                Llene todos los campos </div>`;
    }
});
$("#first-name").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
$("#last-name").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
$("#username").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
$("#E-mail").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
$("#password").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
$("#gender").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
$("#birthdate").click(function () {
    document.getElementById("mensaje-error-registro").innerHTML = '';
});
