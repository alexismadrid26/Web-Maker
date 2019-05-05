db.usuarios.insertMany([
    {
        "_id": ObjectId("5ccb852674b526acc53679b4"),
        "nombre": "Alexis",
        "apellido": "Madrid",
        "nombreUsuario": "alexis.madrid",
        "correo": "alexemadrid@hotmail.com",
        "contrasena": "asd.123",
        "genero": "Masculino",
        "fechaNacimiento": "26/09/1995",
        "foto": "img-51.jpg",
        "proyectos": [
            ObjectId("5ccb889b74b526acc53679bb"),
            ObjectId("5ccb889b74b526acc53679bd"),
            ObjectId("5ccb889b74b526acc53679be")
        ],
        "membresia": ObjectId("5ccb839374b526acc53679b0"),
        "tarjeta": ObjectId("5ccb84a674b526acc53679b3")
    },
    {
        "_id": ObjectId("5ccb852674b526acc53679b5"),
        "nombre": "",
        "apellido": "Madrid",
        "nombreUsuario": "francisco.madrid",
        "correo": "famt@gmail.com",
        "contrasena": "asd.123",
        "genero": "Masculino",
        "fechaNacimiento": "21/09/1999",
        "foto": "img-50.jpg",
        "proyectos": [
            ObjectId("5ccb889b74b526acc53679bc")
        ],
        "membresia": ObjectId("5ccb839374b526acc53679b1"),
        "tarjeta": ObjectId("5ccb86a374b526acc53679b8")
    },
    {
        "_id": ObjectId("5ccb852674b526acc53679b6"),
        "nombre": "Teffy",
        "apellido": "Aguilar",
        "nombreUsuario": "teffy.aguilar",
        "correo": "teffyA@hotmail.com",
        "contrasena": "asd.123",
        "genero": "Femenino",
        "fechaNacimiento": "16/04/2000",
        "foto": "img-52.jpg",
        "proyectos": [
        ],
        "membresia": ObjectId("5ccb839374b526acc53679b2"),
        "tarjeta": ObjectId("5ccb86a374b526acc53679b9")
    },
    {
        "_id": ObjectId("5ccb852674b526acc53679b7"),
        "nombre": "Yoo",
        "apellido": "Kim",
        "nombreUsuario": "you_r_love",
        "correo": "kimyoo@gmail.com",
        "contrasena": "asd.123",
        "genero": "Femenino",
        "fechaNacimiento": "01/07/1980",
        "foto": "img-53.jpg",
        "proyectos": [
            ObjectId("5ccb889b74b526acc53679bf")
        ],
        "membresia": ObjectId("5ccb839374b526acc53679b0"),
        "tarjeta": ObjectId("5ccb86a374b526acc53679ba")
    }
]);



db.membresias.insertMany([
    {
        "_id": ObjectId("5ccb839374b526acc53679b0"),
        "tipoMembresia": "Free",
        "precio": 0,
        "almacenamiento": "10 GB",
        "fechaInicio": "06/04/2019",
        "usuarios": [
            ObjectId("5ccb852674b526acc53679b4"),
            ObjectId("5ccb852674b526acc53679b7")
        ]
    },
    {
        "_id": ObjectId("5ccb839374b526acc53679b1"),
        "tipoMembresia": "Premium",
        "precio": 30,
        "almacenamiento": "50 GB",
        "fechaInicio": "06/06/2020",
        "usuarios": [
            ObjectId("5ccb852674b526acc53679b5")
        ]
    },
    {
        "_id": ObjectId("5ccb839374b526acc53679b2"),
        "tipoMembresia": "Pro",
        "precio": 50,
        "almacenamiento": "ilimitado",
        "fechaInicio": "10/10/2022",
        "usuarios": [
            ObjectId("5ccb852674b526acc53679b6")
        ]
    }
]);



db.tarjetas.insertMany([
    {
        "_id": ObjectId("5ccb84a674b526acc53679b3"),
        "propietario": ObjectId("5ccb852674b526acc53679b4"),
        "numeroTarjeta": "1223 3457 8564 8947",
        "ccv": "123",
        "fechaVencimiento": "01/01/2001"
    },
    {
        "_id": ObjectId("5ccb86a374b526acc53679b8"),
        "propietario": ObjectId("5ccb852674b526acc53679b5"),
        "numeroTarjeta": "2233 4567 1927 7462",
        "ccv": "123",
        "fechaVencimiento": "03/03/2003"
    },
    {
        "_id": ObjectId("5ccb86a374b526acc53679b9"),
        "propietario": ObjectId("5ccb852674b526acc53679b6"),
        "numeroTarjeta": "3213 8371 4938 1345",
        "ccv": "345",
        "fechaVencimiento": "01/02/2009"
    },
    {
        "_id": ObjectId("5ccb86a374b526acc53679ba"),
        "propietario": ObjectId("5ccb852674b526acc53679b7"),
        "numeroTarjeta": "1223 8725 7372 1238",
        "ccv": "123",
        "fechaVencimiento": "02/01/2001"
    }
]);




db.proyectos.insertMany([
    {
            "_id" : ObjectId("5ccb889b74b526acc53679bb"),
            "nombre" : "Desarrollo web",
            "descripcion" : "Este es el proyecto de experto uwu",
            "fecha" : "06/06/6666",
            "tamano" : "50 MB",
            "contenido" : [
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f302"),
                    "nombre" : "public",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f303"),
                    "nombre" : "css",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f304"),
                    "nombre" : "estilos",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f303"),
                    "extension" : "css",
                    "informacion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum?"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f305"),
                    "nombre" : "bootstrap.min",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f303"),
                    "extension" : "css",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f306"),
                    "nombre" : "img",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f307"),
                    "nombre" : "img-01",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f306"),
                    "extension" : "jpg",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f308"),
                    "nombre" : "img-02",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f306"),
                    "extension" : "jpg",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f309"),
                    "nombre" : "img-03",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f306"),
                    "extension" : "jpg",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f30a"),
                    "nombre" : "img-04",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f306"),
                    "extension" : "jpg",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f30b"),
                    "nombre" : "js",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f30c"),
                    "nombre" : "controlador",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f30b"),
                    "extension" : "js",
                    "informacion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores, architecto maxime unde nihil, tenetur accusamus ratione doloremque, voluptates ab expedita voluptas ad? Quasi sequi quod ratione alias sapiente? Sapiente labore quidem voluptas tempora aliquid voluptatum similique repudiandae, libero dolores veniam dignissimos accusamus iure ipsum nobis facere. Minima, quis praesentium."
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f30d"),
                    "nombre" : "jquery-3.3.1",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f30b"),
                    "extension" : "js",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f30e"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302"),
                    "extension" : "html",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f30f"),
                    "nombre" : "login",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302"),
                    "extension" : "html",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f310"),
                    "nombre" : "principal",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302"),
                    "extension" : "html",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f311"),
                    "nombre" : "registro",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f302"),
                    "extension" : "html",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f312"),
                    "nombre" : "router",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f313"),
                    "nombre" : "usuario-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f312"),
                    "extension" : "js",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f314"),
                    "nombre" : "proyecto-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f312"),
                    "extension" : "js",
                    "informacion" : "Lorem ipsum dolor sit amet"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f315"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "informacion" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit voluptate mnis repellat!"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f316"),
                    "nombre" : "package-lock",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "informacion" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f317"),
                    "nombre" : "package",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "informacion" : ""
                }
            ],
            "usuario" : ObjectId("5ccb852674b526acc53679b4"),
            "compartidos" : [
                ObjectId("5ccb852674b526acc53679b4"),
                ObjectId("5ccb852674b526acc53679b7")
            ]
        },
        {
            "_id": ObjectId("5ccb889b74b526acc53679bc"),
            "nombre": "Industria del Software",
            "descripcion": "Este es el proyecto de Industria",
            "fecha": "02/01/1900",
            "tamano": "100 MB",
            "contenido" : [
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f318"),
                    "nombre" : "public",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f319"),
                    "nombre" : "css",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f31a"),
                    "nombre" : "estilos",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f319"),
                    "extension" : "css",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum?"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f31b"),
                    "nombre" : "bootstrap.min",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f319"),
                    "extension" : "css",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f31c"),
                    "nombre" : "img",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f31d"),
                    "nombre" : "img-01",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f31c"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f31e"),
                    "nombre" : "img-02",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f31c"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f31f"),
                    "nombre" : "img-03",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f31c"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f320"),
                    "nombre" : "img-04",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f31c"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f321"),
                    "nombre" : "js",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f322"),
                    "nombre" : "controlador",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f321"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores, architecto maxime unde nihil, tenetur accusamus ratione doloremque, voluptates ab expedita voluptas ad? Quasi sequi quod ratione alias sapiente? Sapiente labore quidem voluptas tempora aliquid voluptatum similique repudiandae, libero dolores veniam dignissimos accusamus iure ipsum nobis facere. Minima, quis praesentium."
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f323"),
                    "nombre" : "jquery-3.3.1",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f321"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f324"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f324"),
                    "nombre" : "login",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f326"),
                    "nombre" : "principal",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f327"),
                    "nombre" : "registro",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f318"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f328"),
                    "nombre" : "router",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f329"),
                    "nombre" : "usuario-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f328"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f32a"),
                    "nombre" : "proyecto-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f328"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f32b"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit voluptate mnis repellat!"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f32c"),
                    "nombre" : "package-lock",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f32d"),
                    "nombre" : "package",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                }
            ],
            "usuario": ObjectId("5ccb852674b526acc53679b5"),
            "compartidos": [
                ObjectId("5ccb852674b526acc53679b5"),
                ObjectId("5ccb852674b526acc53679b6")
            ]
        },
        {
            "_id" :  ObjectId("5ccb889b74b526acc53679bd"),
            "nombre" : "Ingenieria en Software",
            "descripcion" : "Este es el proyecto de ingenieria",
            "fecha" : "03/02/1233",
            "tamano" : "24 MB",
            "contenido" : [
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f32e"),
                    "nombre" : "public",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f32f"),
                    "nombre" : "css",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e")
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f330"),
                    "nombre" : "estilos",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32f"),
                    "extension" : "css",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum?"
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f331"),
                    "nombre" : "bootstrap.min",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32f"),
                    "extension" : "css",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f332"),
                    "nombre" : "img",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e")
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f333"),
                    "nombre" : "img-01",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f332"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f334"),
                    "nombre" : "img-02",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f332"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f335"),
                    "nombre" : "img-03",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f332"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f336"),
                    "nombre" : "img-04",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f332"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f337"),
                    "nombre" : "js",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e")
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f338"),
                    "nombre" : "controlador",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f337"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores, architecto maxime unde nihil, tenetur accusamus ratione doloremque, voluptates ab expedita voluptas ad? Quasi sequi quod ratione alias sapiente? Sapiente labore quidem voluptas tempora aliquid voluptatum similique repudiandae, libero dolores veniam dignissimos accusamus iure ipsum nobis facere. Minima, quis praesentium."
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f339"),
                    "nombre" : "jquery-3.3.1",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f337"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f33a"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f33b"),
                    "nombre" : "login",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f33c"),
                    "nombre" : "principal",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f33d"),
                    "nombre" : "registro",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f32e"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f33e"),
                    "nombre" : "router",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f33f"),
                    "nombre" : "usuario-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f33e"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f340"),
                    "nombre" : "proyecto-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f33e"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet"
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f341"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur,adipisicing elit voluptate mnis repellat!"
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f342"),
                    "nombre" : "package-lock",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" :  ObjectId("5ccea7d1d53cd9ba7202f343"),
                    "nombre" : "package",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                }
            ],
            "usuario" :  ObjectId("5ccb852674b526acc53679b4"),
            "compartidos" : [
                ObjectId("5ccb852674b526acc53679b4"),
                ObjectId("5ccb852674b526acc53679b5")
            ]
        },
        {
            "_id" : ObjectId("5ccb889b74b526acc53679be"),
            "nombre" : "Economia Digital",
            "descripcion" : "Este es el proyecto de Economia Digital",
            "fecha" : "02/03/1998",
            "tamano" : "33 MB",
            "contenido" : [
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f344"),
                    "nombre" : "public",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f345"),
                    "nombre" : "css",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f346"),
                    "nombre" : "estilos",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f345"),
                    "extension" : "css",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum?"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f347"),
                    "nombre" : "bootstrap.min",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f345"),
                    "extension" : "css",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f348"),
                    "nombre" : "img",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f349"),
                    "nombre" : "img-01",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f348"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f34a"),
                    "nombre" : "img-02",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f348"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f34b"),
                    "nombre" : "img-03",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f348"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f34c"),
                    "nombre" : "img-04",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f348"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f34d"),
                    "nombre" : "js",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f34e"),
                    "nombre" : "controlador",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f34d"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores, architecto maxime unde nihil, tenetur accusamus ratione doloremque, voluptates ab expedita voluptas ad? Quasi sequi quod ratione alias sapiente? Sapiente labore quidem voluptas tempora aliquid voluptatum similique repudiandae, libero dolores veniam dignissimos accusamus iure ipsum nobis facere. Minima, quis praesentium."
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f34f"),
                    "nombre" : "jquery-3.3.1",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f34d"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f350"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f351"),
                    "nombre" : "login",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f352"),
                    "nombre" : "principal",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f353"),
                    "nombre" : "registro",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f344"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f354"),
                    "nombre" : "router",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"},
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f355"),
                    "nombre" : "usuario-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f354"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f356"),
                    "nombre" : "proyecto-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f354"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet"},
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f357"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit voluptate mnis repellat!"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f358"),
                    "nombre" : "package-lock",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f359"),
                    "nombre" : "package",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                }
            ],
            "usuario" : ObjectId("5ccb852674b526acc53679b4"),
            "compartidos" : [
                ObjectId("5ccb852674b526acc53679b4"),
                ObjectId("5ccb852674b526acc53679b6"),
                ObjectId("5ccb852674b526acc53679b7")
            ]
        },
        {
            "_id" : ObjectId("5ccb889b74b526acc53679bf"),
            "nombre" : "POO",
            "descripcion" : "Este es el proyecto de POO",
            "fecha" : "09/09/1997",
            "tamano" : "400 MB",
            "contenido" : [
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f35a"),
                    "nombre" : "public",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f35b"),
                    "nombre" : "css",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f35c"),
                    "nombre" : "estilos",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35b"),
                    "extension" : "css",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum?"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f35d"),
                    "nombre" : "bootstrap.min",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35b"),
                    "extension" : "css",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f35e"),
                    "nombre" : "img",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f35f"),
                    "nombre" : "img-01",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35e"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f360"),
                    "nombre" : "img-02",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35e"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f361"),
                    "nombre" : "img-03",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35e"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f362"),
                    "nombre" : "img-04",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35e"),
                    "extension" : "jpg",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f363"),
                    "nombre" : "js",
                    "tipo" : "carpeta",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a")
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f364"),
                    "nombre" : "controlador",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f363"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores, architecto maxime unde nihil, tenetur accusamus ratione doloremque, voluptates ab expedita voluptas ad? Quasi sequi quod ratione alias sapiente? Sapiente labore quidem voluptas tempora aliquid voluptatum similique repudiandae, libero dolores veniam dignissimos accusamus iure ipsum nobis facere. Minima, quis praesentium."
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f365"),
                    "nombre" : "jquery-3.3.1",
                    "tipo" : "archivo",
                    "nivel" : 2,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f363"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f366"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f367"),
                    "nombre" : "login",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f368"),
                    "nombre" : "principal",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f369"),
                    "nombre" : "registro",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f35a"),
                    "extension" : "html",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f36a"),
                    "nombre" : "router",
                    "tipo" : "carpeta",
                    "nivel" : 0,
                    "padre" : "/"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f36b"),
                    "nombre" : "usuario-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f36a"),
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f36c"),
                    "nombre" : "proyecto-router",
                    "tipo" : "archivo",
                    "nivel" : 1,
                    "padre" : ObjectId("5ccea7d1d53cd9ba7202f36a"),
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f36d"),
                    "nombre" : "index",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit voluptate mnis repellat!"
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f36e"),
                    "nombre" : "package-lock",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                },
                {
                    "_id" : ObjectId("5ccea7d1d53cd9ba7202f36f"),
                    "nombre" : "package",
                    "tipo" : "archivo",
                    "nivel" : 0,
                    "padre" : "/",
                    "extension" : "js",
                    "contenido" : ""
                }
            ],
            "usuario" : ObjectId("5ccb852674b526acc53679b7"),
            "compartidos" : [
                ObjectId("5ccb852674b526acc53679b7"),
                ObjectId("5ccb852674b526acc53679b6")
            ]
        }
    ]);









