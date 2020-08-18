"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuarioLogged = exports.actualizarUsuario = exports.restablecerPassword = exports.actualizarPassword = exports.validarPassword = exports.validarDni = exports.loginUsuario = exports.crearUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = exports.obtenerIdPunto = exports.obtenerTipoAmbito = exports.obtenerDescripcionAmbito = exports.obtenerListaUsuarios = exports.obtenerRoles = exports.obtenerRolesUsuario = void 0;
var typeorm_1 = require("typeorm");
var Usuario_1 = require("../entity/Usuario");
var Tipo_Ambito_1 = require("../entity/Tipo_Ambito");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var mssql = require('mssql');
var dotenv = require('dotenv');
dotenv.config();
var cadena_conexion = process.env.conexion;
var SECRET_KEY = "SecretKeyRISC";
exports.obtenerRolesUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 1:
                conexion = _a.sent();
                script = "SELECT id_rol_risc, nombre_rol_risc, descripcion_rol_risc FROM USUARIOS_ROLES_RISC WHERE DNI = '" + req.params.dni + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 2:
                resultados = _a.sent();
                mssql.close();
                return [2 /*return*/, res.send(resultados.recordset)];
        }
    });
}); };
exports.obtenerRoles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 1:
                conexion = _a.sent();
                script = "EXEC DEVOLVER_ROLES '" + req.body.tipo_ambito_usuario + "' , '" + req.body.tipo_ambito_crear + "' , '" + req.body.roles_asignados + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 2:
                resultados = _a.sent();
                mssql.close();
                return [2 /*return*/, res.send(resultados.recordset)];
        }
    });
}); };
exports.obtenerListaUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 1:
                conexion = _a.sent();
                script = "EXEC DEVOLVER_LISTA_USUARIOS '" + req.body.tipo_ambito + "' , '" + req.body.descripcion_ambito + "' , '" + req.body.dni + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 2:
                resultados = _a.sent();
                mssql.close();
                return [2 /*return*/, res.send(resultados.recordset)];
        }
    });
}); };
exports.obtenerDescripcionAmbito = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 1:
                conexion = _a.sent();
                script = "EXEC DEVOLVER_DESCRIPCION_AMBITO '" + req.body.tipo_ambito_usuario + "' , '" + req.body.descripcion_ambito_usuario + "' , '" + req.body.tipo_ambito_crear + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 2:
                resultados = _a.sent();
                mssql.close();
                return [2 /*return*/, res.send(resultados.recordset)];
        }
    });
}); };
exports.obtenerTipoAmbito = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tipo_ambito_usuario, resultado;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Tipo_Ambito_1.TipoAmbito).findOne({ where: { descripcion_tipo_ambito: req.params.descripcion_ambito }, })];
            case 1:
                tipo_ambito_usuario = _a.sent();
                if (!!tipo_ambito_usuario) return [3 /*break*/, 2];
                //DATO NO ENCONTRADO
                return [2 /*return*/, res.status(409).send({ message: "DATO NO ENCONTRADO" })];
            case 2: return [4 /*yield*/, typeorm_1.getRepository(Tipo_Ambito_1.TipoAmbito).find({ where: { id_tipo_ambito: typeorm_1.MoreThan(tipo_ambito_usuario.id_tipo_ambito - 1) }, })];
            case 3:
                resultado = _a.sent();
                return [2 /*return*/, res.json(resultado)];
        }
    });
}); };
exports.obtenerIdPunto = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 1:
                conexion = _a.sent();
                script = "SELECT ID_PUNTO_DIG_HIS FROM PUNTOS_DIGITACION_HIS WHERE NOMBRE = '" + req.params.descripcion_ambito + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 2:
                resultados = _a.sent();
                mssql.close();
                return [2 /*return*/, res.send(resultados.recordset)];
        }
    });
}); };
exports.obtenerUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).find()];
            case 1:
                usuarios = _a.sent();
                return [2 /*return*/, res.json(usuarios)];
        }
    });
}); };
exports.obtenerUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne(req.params.dni)];
            case 1:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
        }
    });
}); };
exports.crearUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoUsuario, newUser, usuarioExistente, userData, expiresIn, accessToken, dataUser, conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nuevoUsuario = {
                    dni: req.body.dni,
                    password: bcryptjs_1.default.hashSync(req.body.password),
                    email: req.body.email,
                    apellido_paterno: req.body.apellido_paterno,
                    apellido_materno: req.body.apellido_materno,
                    nombres: req.body.nombres,
                    tipo_ambito: req.body.tipo_ambito,
                    descripcion_ambito: req.body.descripcion_ambito,
                    estado: req.body.estado,
                    isLogged: req.body.isLogged,
                    fecha_creacion: req.body.fecha_creacion,
                };
                newUser = typeorm_1.getRepository(Usuario_1.UsuariosRisc).create(nuevoUsuario);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne({ where: { dni: nuevoUsuario.dni }, })];
            case 1:
                usuarioExistente = _a.sent();
                if (!((nuevoUsuario === null || nuevoUsuario === void 0 ? void 0 : nuevoUsuario.dni) == (usuarioExistente === null || usuarioExistente === void 0 ? void 0 : usuarioExistente.dni))) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(409).send({ message: "EL USUARIO YA EXISTE" })];
            case 2: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).save(newUser)];
            case 3:
                userData = _a.sent();
                expiresIn = 30 * 60;
                accessToken = jsonwebtoken_1.default.sign({ nuevoUsuario: nuevoUsuario }, SECRET_KEY, {
                    expiresIn: expiresIn,
                });
                dataUser = {
                    dni: userData.dni,
                    email: userData.email,
                    tipo_ambito: userData.tipo_ambito,
                    descripcion_ambito: userData.descripcion_ambito,
                    accessToken: accessToken,
                    expiresIn: expiresIn,
                    estado: userData.estado,
                };
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 4:
                conexion = _a.sent();
                script = "EXEC ASIGNAR_ROLES '" + req.body.dni + "' , '" + req.body.roles_asignados + "' , '" + req.body.roles_removidos + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 5:
                resultados = _a.sent();
                mssql.close();
                return [2 /*return*/, res.json(dataUser)];
        }
    });
}); };
exports.loginUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, resultPassword, expiresIn, accessToken, dataUser, conexion, script, roles, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne({ where: { dni: req.body.dni }, })];
            case 1:
                userData = _a.sent();
                if (!!userData) return [3 /*break*/, 2];
                //DNI NO PERTENECE A NINGÚN USUARIO
                return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
            case 2:
                if (!(userData.estado == "INACTIVO")) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(409).send({ message: "EL USUARIO NO SE ENCUENTRA ACTIVO" })];
            case 3:
                if (!(userData.isLogged == "1")) return [3 /*break*/, 4];
                return [2 /*return*/, res.status(409).send({ message: "EL USUARIO YA SE ENCUENTRA LOGEADO" })];
            case 4:
                resultPassword = bcryptjs_1.default.compareSync(req.body.password, userData.password);
                if (!resultPassword) return [3 /*break*/, 7];
                expiresIn = 30 * 60;
                accessToken = jsonwebtoken_1.default.sign({ userData: userData }, SECRET_KEY, {
                    expiresIn: expiresIn,
                });
                dataUser = {
                    dni: userData.dni,
                    apellido_paterno: userData.apellido_paterno,
                    apellido_materno: userData.apellido_materno,
                    nombres: userData.nombres,
                    email: userData.email,
                    tipo_ambito: userData.tipo_ambito,
                    descripcion_ambito: userData.descripcion_ambito,
                    estado: userData.estado,
                    accessToken: accessToken,
                    expiresIn: expiresIn,
                };
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 5:
                conexion = _a.sent();
                script = "EXEC DEVOLVER_ROLES_USUARIO '" + req.body.dni + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 6:
                roles = _a.sent();
                mssql.close();
                return [2 /*return*/, res.send({ dataUser: dataUser, roles: roles.recordset })];
            case 7: 
            //CONTRASEÑA INCORRECTA
            return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
            case 8: return [3 /*break*/, 10];
            case 9:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.validarDni = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, conexion, script, Maestro_Registrador, conexion_1, script_1, Maestro_Personal, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 10, , 11]);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne({ where: { dni: req.body.dni }, })];
            case 1:
                userData = _a.sent();
                if (!!userData) return [3 /*break*/, 8];
                //DNI NO PERTENECE A NINGÚN USUARIO
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 2:
                conexion = _a.sent();
                script = "SELECT DISTINCT APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES FROM MST_REGISTRADOR WHERE NUMERO_DOCUMENTO = '" + req.body.dni + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 3:
                Maestro_Registrador = _a.sent();
                mssql.close();
                if (!(Maestro_Registrador.recordset == '')) return [3 /*break*/, 6];
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 4:
                conexion_1 = _a.sent();
                script_1 = "SELECT DISTINCT APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES FROM MST_PERSONAL WHERE NUMERO_DOCUMENTO = '" + req.body.dni + "'";
                return [4 /*yield*/, mssql.query(script_1)];
            case 5:
                Maestro_Personal = _a.sent();
                mssql.close();
                if (Maestro_Personal.recordset == '') {
                    return [2 /*return*/, res.status(409).send({ message: "EL DNI NO SE ENCUENTRA EN NUESTRA BASE DE DATOS" })];
                }
                else {
                    return [2 /*return*/, res.send(Maestro_Personal.recordset)];
                }
                return [3 /*break*/, 7];
            case 6: return [2 /*return*/, res.send(Maestro_Registrador.recordset)];
            case 7: return [3 /*break*/, 9];
            case 8: return [2 /*return*/, res.status(409).send({ message: "EL DNI YA SE ENCUENTRA REGISTRADO" })];
            case 9: return [3 /*break*/, 11];
            case 10:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(409).send({ message: "OCURRIO UN ERROR" })];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.validarPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, resultPassword, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne({ where: { dni: req.body.dni }, })];
            case 1:
                userData = _a.sent();
                if (!userData) {
                    //DNI NO PERTENECE A NINGÚN USUARIO
                    return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
                }
                else {
                    resultPassword = bcryptjs_1.default.compareSync(req.body.password, userData.password);
                    if (resultPassword && req.body.password == req.body.dni) {
                        return [2 /*return*/, res.status(409).send({ message: "CONTRASEÑA SIN ACTUALIZAR" })];
                    }
                    else {
                        //CONTRASEÑA YA ACTUALIZADA
                        return [2 /*return*/, res.status(409).send({ message: "CONTRASEÑA ACTUALIZADA" })];
                    }
                }
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.actualizarPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, datoRecibido, passwordAntigua, resultPassword, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                datoRecibido = {
                    password: bcryptjs_1.default.hashSync(req.body.passwordNuevo),
                };
                if (!(usuario == undefined)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(409).send({ message: "DNI NO PERTENECE A NINGUN USUARIO" })];
            case 2:
                passwordAntigua = bcryptjs_1.default.compareSync(req.body.passwordAntiguo, usuario.password);
                if (!passwordAntigua) return [3 /*break*/, 6];
                resultPassword = bcryptjs_1.default.compareSync(req.body.passwordNuevo, usuario.password);
                if (!resultPassword) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(409).send({ message: "CONTRASEÑA DEBE SER DIFERENTE DE LA ACTUAL" })];
            case 3:
                typeorm_1.getRepository(Usuario_1.UsuariosRisc).merge(usuario, datoRecibido);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).save(usuario)];
            case 4:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
            case 5: return [3 /*break*/, 7];
            case 6: return [2 /*return*/, res.status(409).send({ message: "INGRESAR CORRECTAMENTE LA CONTRASEÑA ANTIGUA" })];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.restablecerPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, datoRecibido, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                datoRecibido = {
                    password: bcryptjs_1.default.hashSync(req.body.passwordNuevo),
                };
                if (!(usuario == undefined)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(409).send({ message: "DNI NO PERTENECE A NINGUN USUARIO" })];
            case 2:
                typeorm_1.getRepository(Usuario_1.UsuariosRisc).merge(usuario, datoRecibido);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).save(usuario)];
            case 3:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
        }
    });
}); };
exports.actualizarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, datos_actualizados, resultados, conexion, script, datos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 5];
                datos_actualizados = {
                    email: req.body.email,
                    tipo_ambito: req.body.tipo_ambito,
                    descripcion_ambito: req.body.descripcion_ambito,
                    isLogged: req.body.isLogged,
                };
                typeorm_1.getRepository(Usuario_1.UsuariosRisc).merge(usuario, datos_actualizados);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).save(usuario)];
            case 2:
                resultados = _a.sent();
                mssql.close();
                return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 3:
                conexion = _a.sent();
                script = "EXEC ASIGNAR_ROLES '" + req.body.dni + "' , '" + req.body.roles_asignados + "' , '" + req.body.roles_removidos + "'";
                return [4 /*yield*/, mssql.query(script)];
            case 4:
                datos = _a.sent();
                mssql.close();
                return [2 /*return*/, res.json(resultados)];
            case 5: return [2 /*return*/, res.status(404).json({ msg: "USUARIO NO ENCONTRADO" })];
        }
    });
}); };
exports.actualizarUsuarioLogged = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 3];
                typeorm_1.getRepository(Usuario_1.UsuariosRisc).merge(usuario, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).save(usuario)];
            case 2:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
            case 3: return [2 /*return*/, res.status(404).json({ msg: "USUARIO NO ENCONTRADO" })];
        }
    });
}); };
exports.eliminarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.UsuariosRisc).delete(req.params.dni)];
            case 2:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
            case 3: return [2 /*return*/, res.status(404).json({ msg: "USUARIO NO ENCONTRADO" })];
        }
    });
}); };
