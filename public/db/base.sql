DROP DATABASE IF EXISTS WebMaker;
CREATE DATABASE IF NOT EXISTS WebMaker DEFAULT CHARACTER SET utf8;

USE WebMaker;


CREATE TABLE tbl_tipo_usuario(
	id_tipo_usuario_pk INT AUTO_INCREMENT PRIMARY KEY,
	txt_tipo_usuario VARCHAR(10) NOT NULL,
    num_precio_tipo_usuario DOUBLE NOT NULL,
    num_almacenamiento_tipo_usuario INT NOT NULL,
    date_fechaInicio_tipo_usuario DATETIME NOT NULL
);

CREATE TABLE tbl_usuario(
	id_usuario_pk INT AUTO_INCREMENT,
    txt_nombre_persona_usuario VARCHAR(20) NOT NULL,
    txt_apellido_usuario VARCHAR(20) NOT NULL,
    txt_nombre_usuario VARCHAR(20) NOT NULL,
    txt_correo_usuario VARCHAR(50) NOT NULL,
    txt_contrasenia_usuario VARCHAR(10) NOT NULL,
    txt_genero_usuario VARCHAR(10) NOT NULL,
    date_fechaNacimiento_usuario DATE NOT NULL,
    id_tipo_usuario_fk INT NOT NULL,
    cod_usuario_pk VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_usuario_pk, cod_usuario_pk),
	FOREIGN KEY(id_tipo_usuario_fk) REFERENCES tbl_tipo_usuario(id_tipo_usuario_pk)
);


CREATE TABLE tbl_pago(
	id_pago_pk INT AUTO_INCREMENT PRIMARY KEY,
    txt_numero_tarjeta_pago VARCHAR(20) NOT NULL,
    num_ccv_pago INT NOT NULL,
    date_fechaVencimiento DATE NOT NULL,
    id_usuario_fk INT NOT NULL,
    FOREIGN KEY(id_usuario_fk) REFERENCES tbl_usuario(id_usuario_pk)
);

CREATE TABLE tbl_proyecto(
	txt_nombre_proyecto VARCHAR(50) NOT NULL,
    txt_descripcion_proyecto VARCHAR(200) NOT NULL,
    date_fecha_proyecto DATETIME NOT NULL,
    id_usuario_fk INT NOT NULL,
    txt_direccion_proyecto_pk VARCHAR(100) NOT NULL PRIMARY KEY,
    FOREIGN KEY(id_usuario_fk) REFERENCES tbl_usuario(id_usuario_pk)
);

CREATE TABLE tbl_carpeta(
	id_carpeta_pk INT AUTO_INCREMENT PRIMARY KEY,
    txt_nombre_carpeta VARCHAR(50) NOT NULL,
    txt_direccion_carpeta VARCHAR(100) NOT NULL,
    txt_direccion_proyecto_fk VARCHAR(100) NOT NULL,
    FOREIGN KEY(txt_direccion_proyecto_fk) REFERENCES tbl_proyecto(txt_direccion_proyecto_pk)
);

CREATE TABLE tbl_archivo(
	id_archivo_pk INT AUTO_INCREMENT PRIMARY KEY,
    txt_nombre_archivo VARCHAR(50) NOT NULL,
    txt_direccion_archivo VARCHAR(100) NOT NULL,
    id_carpeta_fk INT NOT NULL,
    FOREIGN KEY(id_carpeta_fk) REFERENCES tbl_carpeta(id_carpeta_pk)
);

CREATE TABLE tbl_compartir(
	id_usuario_fk INT NOT NULL,
    txt_direccion_proyecto_fk VARCHAR(100) NOT NULL,
    otro_usuario_fk INT NOT NULL,
    PRIMARY KEY(id_usuario_fk, txt_direccion_proyecto_fk, otro_usuario_fk),
    FOREIGN KEY(id_usuario_fk) REFERENCES tbl_usuario(id_usuario_pk),
    FOREIGN KEY(txt_direccion_proyecto_fk) REFERENCES tbl_proyecto(txt_direccion_proyecto_pk),
    FOREIGN KEY(otro_usuario_fk) REFERENCES tbl_usuario(id_usuario_pk)
);

CREATE TABLE tbl_sala_chat(
	id_sala_chat_pk INT AUTO_INCREMENT PRIMARY KEY,
	txt_direccion_compartir_fk VARCHAR(100) NOT NULL,
    FOREIGN KEY(txt_direccion_compartir_fk) REFERENCES tbl_compartir(txt_direccion_proyecto_fk)
);

CREATE TABLE tbl_consersacion_chat(
	id_consersacion_pk INT AUTO_INCREMENT PRIMARY KEY,
    txt_conversasion_chat VARCHAR(1000) NOT NULL,
    id_sala_chat_fk INT NOT NULL,
    FOREIGN KEY(id_sala_chat_fk) REFERENCES tbl_sala_chat(id_sala_chat_pk)
);