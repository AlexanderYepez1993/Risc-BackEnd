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
exports.eliminarUsuario = exports.actualizarUsuario = exports.actualizarPassword = exports.loginUsuario = exports.crearUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = exports.obtenerTipoAmbito = exports.obtenerDescripcionAmbito = void 0;
var typeorm_1 = require("typeorm");
var Usuario_1 = require("../entity/Usuario");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var mssql = require('mssql');
var dotenv = require('dotenv');
dotenv.config();
var cadena_conexion = process.env.conexion;
var SECRET_KEY = "SecretKeyRISC";
exports.obtenerDescripcionAmbito = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mssql.connect(cadena_conexion)];
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
    var conexion, script, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mssql.connect(cadena_conexion)];
            case 1:
                conexion = _a.sent();
                script = "EXEC DEVOLVER_AMBITO " + req.params.tipo_ambito;
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
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).find()];
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
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).findOne(req.params.dni)];
            case 1:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
        }
    });
}); };
exports.crearUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoUsuario, newUser, usuarioExistente, userData, expiresIn, accessToken, dataUser;
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
                };
                newUser = typeorm_1.getRepository(Usuario_1.USUARIOSRISC).create(nuevoUsuario);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).findOne({ where: { dni: nuevoUsuario.dni }, })];
            case 1:
                usuarioExistente = _a.sent();
                if (!((nuevoUsuario === null || nuevoUsuario === void 0 ? void 0 : nuevoUsuario.dni) == (usuarioExistente === null || usuarioExistente === void 0 ? void 0 : usuarioExistente.dni))) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(409).send({ message: "EL USUARIO YA EXISTE" })];
            case 2: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).save(newUser)];
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
                return [2 /*return*/, res.json(dataUser)];
        }
    });
}); };
exports.loginUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, resultPassword, expiresIn, accessToken, dataUser, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).findOne({
                        where: { dni: req.body.dni },
                    })];
            case 1:
                userData = _a.sent();
                if (!userData) {
                    //DNI NO PERTENECE A NINGÚN USUARIO
                    return [2 /*return*/, res
                            .status(409)
                            .send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
                }
                else {
                    if (userData.estado == "INACTIVO") {
                        return [2 /*return*/, res.status(409).send({ message: "EL USUARIO NO SE ENCUENTRA ACTIVO" })];
                    }
                    else {
                        if (userData.isLogged == "1") {
                            return [2 /*return*/, res.status(409).send({ message: "EL USUARIO YA SE ENCUENTRA LOGEADO" })];
                        }
                        else {
                            resultPassword = bcryptjs_1.default.compareSync(req.body.password, userData.password);
                            if (resultPassword) {
                                if (req.body.dni == req.body.password) {
                                    return [2 /*return*/, res.status(409).send({ message: "ACTUALIZAR CONTRASEÑA" })];
                                }
                                else {
                                    expiresIn = 30 * 60;
                                    accessToken = jsonwebtoken_1.default.sign({ userData: userData }, SECRET_KEY, {
                                        expiresIn: expiresIn,
                                    });
                                    dataUser = {
                                        dni: userData.dni,
                                        email: userData.email,
                                        tipo_ambito: userData.tipo_ambito,
                                        descripcion_ambito: userData.descripcion_ambito,
                                        estado: userData.estado,
                                        accessToken: accessToken,
                                        expiresIn: expiresIn,
                                    };
                                    return [2 /*return*/, res.send({ dataUser: dataUser })];
                                }
                            }
                            else {
                                //CONTRASEÑA INCORRECTA
                                return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
                            }
                        }
                    }
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(409).send({ message: "VERIFICAR SU USUARIO Y/O CONTRASEÑA" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.actualizarPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, datoRecibido, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                datoRecibido = {
                    password: bcryptjs_1.default.hashSync(req.body.password),
                };
                if (!(usuario == undefined)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(409).send({ message: "DNI NO PERTENECE A NINGUN USUARIO" })];
            case 2:
                typeorm_1.getRepository(Usuario_1.USUARIOSRISC).merge(usuario, datoRecibido);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).save(usuario)];
            case 3:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
        }
    });
}); };
exports.actualizarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 3];
                typeorm_1.getRepository(Usuario_1.USUARIOSRISC).merge(usuario, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).save(usuario)];
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
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.USUARIOSRISC).delete(req.params.dni)];
            case 2:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
            case 3: return [2 /*return*/, res.status(404).json({ msg: "USUARIO NO ENCONTRADO" })];
        }
    });
}); };
