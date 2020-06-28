import { Request, Response, response, query } from "express";
import { getRepository, AdvancedConsoleLogger, createConnection, Any, MoreThan } from "typeorm";
import { USUARIOSRISC } from "../entity/Usuario";
import jwt from "jsonwebtoken";
import bycrypt from "bcryptjs";
import { TIPOAMBITO } from "../entity/Tipo_Ambito";

var mssql = require('mssql');
var dotenv = require('dotenv');
dotenv.config();
const cadena_conexion = process.env.conexion;

const SECRET_KEY = "SecretKeyRISC";

export const obtenerListaUsuarios = async (req: Request, res: Response): Promise<Response> => {
  let conexion = await mssql.connect(cadena_conexion);
  let script = `EXEC DEVOLVER_LISTA_USUARIOS '${req.body.tipo_ambito}' , '${req.body.descripcion_ambito}'`;
  const resultados = await mssql.query(script);
  mssql.close();
  return res.send(resultados.recordset);
}

export const obtenerDescripcionAmbito = async (req: Request, res: Response): Promise<Response> => {
  let conexion = await mssql.connect(cadena_conexion);
  let script = `EXEC DEVOLVER_DESCRIPCION_AMBITO '${req.body.tipo_ambito_usuario}' , '${req.body.descripcion_ambito_usuario}' , '${req.body.tipo_ambito_crear}'`;
  const resultados = await mssql.query(script);
  mssql.close();
  return res.send(resultados.recordset);
}

export const obtenerTipoAmbito = async (req: Request, res: Response): Promise<Response> => {
  const tipo_ambito_usuario = await getRepository(TIPOAMBITO).findOne({ where: { descripcion_tipo_ambito: req.params.tipo_ambito }, });
  if (!tipo_ambito_usuario) {
    //DATO NO ENCONTRADO
    return res.status(409).send({ message: "DATO NO ENCONTRADO" });
  } else {
    const resultado = await getRepository(TIPOAMBITO).find({ where: { id_tipo_ambito: MoreThan(tipo_ambito_usuario.id_tipo_ambito) }, });
    return res.json(resultado);
  }
}

/* export const obtenerTipoAmbito = async (req: Request, res: Response): Promise<Response> => {
  let conexion = await mssql.connect(cadena_conexion);
  let script = `EXEC DEVOLVER_AMBITO ${req.params.tipo_ambito}`;
  const resultados = await mssql.query(script);
  mssql.close();
  return res.send(resultados.recordset);
} */

export const obtenerIdPunto = async (req: Request, res: Response): Promise<Response> => {
  let conexion = await mssql.connect(cadena_conexion);
  let script = `SELECT ID_PUNTO_DIG_HIS FROM PUNTOS_DIGITACION_HIS WHERE NOMBRE = '${req.params.descripcion_ambito}'`;
  const resultados = await mssql.query(script);
  mssql.close();
  return res.send(resultados.recordset);
}

export const obtenerUsuarios = async (req: Request, res: Response): Promise<Response> => {
  const usuarios = await getRepository(USUARIOSRISC).find();
  return res.json(usuarios);
};

export const obtenerUsuario = async (req: Request, res: Response): Promise<Response> => {
  const resultados = await getRepository(USUARIOSRISC).findOne(req.params.dni);
  return res.json(resultados);
};

export const crearUsuario = async (req: Request, res: Response): Promise<Response> => {
  const nuevoUsuario = {
    dni: req.body.dni,
    password: bycrypt.hashSync(req.body.password),
    email: req.body.email,
    apellido_paterno: req.body.apellido_paterno,
    apellido_materno: req.body.apellido_materno,
    nombres: req.body.nombres,
    tipo_ambito: req.body.tipo_ambito,
    descripcion_ambito: req.body.descripcion_ambito,
    estado: req.body.estado,
    isLogged: req.body.isLogged,
  };
  const newUser = getRepository(USUARIOSRISC).create(nuevoUsuario);
  const usuarioExistente = await getRepository(USUARIOSRISC).findOne({ where: { dni: nuevoUsuario.dni }, });
  if (nuevoUsuario?.dni == usuarioExistente?.dni) {
    return res.status(409).send({ message: "EL USUARIO YA EXISTE" });
  } else {
    const userData = await getRepository(USUARIOSRISC).save(newUser);
    const expiresIn = 30 * 60;
    const accessToken = jwt.sign({ nuevoUsuario }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    const dataUser = {
      dni: userData.dni,
      email: userData.email,
      tipo_ambito: userData.tipo_ambito,
      descripcion_ambito: userData.descripcion_ambito,
      accessToken: accessToken,
      expiresIn: expiresIn,
      estado: userData.estado,
    };
    return res.json(dataUser);
  }
};

export const loginUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData = await getRepository(USUARIOSRISC).findOne({
      where: { dni: req.body.dni },
    });
    if (!userData) {
      //DNI NO PERTENECE A NINGÚN USUARIO
      return res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" });
    } else {
      if (userData.estado == "INACTIVO") {
        return res.status(409).send({ message: "EL USUARIO NO SE ENCUENTRA ACTIVO" });
      } else {
        if (userData.isLogged == "1") {
          return res.status(409).send({ message: "EL USUARIO YA SE ENCUENTRA LOGEADO" });
        } else {
          const resultPassword = bycrypt.compareSync(req.body.password, userData.password);
          if (resultPassword) {
            const expiresIn = 30 * 60;
            const accessToken = jwt.sign({ userData }, SECRET_KEY, {
              expiresIn: expiresIn,
            });
            const dataUser = {
              dni: userData.dni,
              email: userData.email,
              tipo_ambito: userData.tipo_ambito,
              descripcion_ambito: userData.descripcion_ambito,
              estado: userData.estado,
              accessToken: accessToken,
              expiresIn: expiresIn,
            };
            return res.send({ dataUser });
          } else {
            //CONTRASEÑA INCORRECTA
            return res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" });
          }
        }
      }
    }
  } catch (err) {
    return res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" });
  }
};

export const validarDni = async (req: Request, res: Response): Promise<Response> => {
  try {

    const userData = await getRepository(USUARIOSRISC).findOne({
      where: { dni: req.body.dni },
    });
    if (!userData) {
      //DNI NO PERTENECE A NINGÚN USUARIO
      let conexion = await mssql.connect(cadena_conexion);
      let script = `SELECT DISTINCT APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES FROM MST_REGISTRADOR WHERE NUMERO_DOCUMENTO = '${req.body.dni}'`;
      const Maestro_Registrador = await mssql.query(script);
      mssql.close();
      if (Maestro_Registrador.recordset == '') {
        let conexion = await mssql.connect(cadena_conexion);
        let script = `SELECT DISTINCT APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES FROM MST_PERSONAL WHERE NUMERO_DOCUMENTO = '${req.body.dni}'`;
        const Maestro_Personal = await mssql.query(script);
        mssql.close();
        if (Maestro_Personal.recordset == '') {
          return res.status(409).send({ message: "EL DNI NO SE ENCUENTRA EN NUESTRA BASE DE DATOS" });
        } else {
          return res.send(Maestro_Personal.recordset);
        }
      } else {
        return res.send(Maestro_Registrador.recordset);
      }
    } else {
      return res.status(409).send({ message: "EL DNI YA SE ENCUENTRA REGISTRADO" });
    }
  } catch (err) {
    return res.status(409).send({ message: "OCURRIO UN ERROR" });
  }
};

export const validarPassword = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData = await getRepository(USUARIOSRISC).findOne({
      where: { dni: req.body.dni },
    });
    if (!userData) {
      //DNI NO PERTENECE A NINGÚN USUARIO
      return res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" });
    } else {
      const resultPassword = bycrypt.compareSync(req.body.password, userData.password);
      if (resultPassword && req.body.password == req.body.dni) {
        return res.status(409).send({ message: "CONTRASEÑA SIN ACTUALIZAR" });
      } else {
        //CONTRASEÑA YA ACTUALIZADA
        return res.status(409).send({ message: "CONTRASEÑA ACTUALIZADA" });
      }
    }
  } catch (err) {
    return res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" });
  }
};

export const actualizarPassword = async (req: Request, res: Response): Promise<Response> => {
  const usuario = await getRepository(USUARIOSRISC).findOne(req.params.dni);
  const datoRecibido = {
    password: bycrypt.hashSync(req.body.password),
  }
  if (usuario == undefined) {
    return res.status(409).send({ message: "DNI NO PERTENECE A NINGUN USUARIO" });
  } else {
    getRepository(USUARIOSRISC).merge(usuario, datoRecibido);
    const resultados = await getRepository(USUARIOSRISC).save(usuario);
    return res.json(resultados);
  }
};

export const actualizarUsuario = async (req: Request, res: Response): Promise<Response> => {
  const usuario = await getRepository(USUARIOSRISC).findOne(req.params.dni);
  if (usuario) {
    getRepository(USUARIOSRISC).merge(usuario, req.body);
    const resultados = await getRepository(USUARIOSRISC).save(usuario);
    return res.json(resultados);
  }
  return res.status(404).json({ msg: "USUARIO NO ENCONTRADO" });
};

export const eliminarUsuario = async (req: Request, res: Response): Promise<Response> => {
  const usuario = await getRepository(USUARIOSRISC).findOne(req.params.dni);
  if (usuario) {
    const resultados = await getRepository(USUARIOSRISC).delete(
      req.params.dni
    );
    return res.json(resultados);
  }
  return res.status(404).json({ msg: "USUARIO NO ENCONTRADO" });
};
