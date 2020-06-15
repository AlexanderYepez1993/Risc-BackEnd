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
exports.eliminarUsuario = exports.actualizarUsuario = exports.loginUsuario = exports.crearUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;
var typeorm_1 = require("typeorm");
var Usuario_1 = require("../entity/Usuario");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var SECRET_KEY = 'SecretKeyRISC';
exports.obtenerUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).find()];
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
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).findOne(req.params.dni)];
            case 1:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
        }
    });
}); };
exports.crearUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoUsuario, newUser, usuarioExistente, resultados, expiresIn, accessToken, dataUser, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                nuevoUsuario = {
                    dni: req.body.dni,
                    password: bcryptjs_1.default.hashSync(req.body.password),
                    email: req.body.email,
                    apellido_paterno: req.body.apellido_paterno,
                    apellido_materno: req.body.apellido_materno,
                    nombres: req.body.nombres,
                    tipo_ambito: req.body.tipo_ambito,
                    descripcion_ambito: req.body.descripcion_ambito
                };
                newUser = typeorm_1.getRepository(Usuario_1.Usuarios_Risc).create(nuevoUsuario);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).findOne({ where: { dni: newUser.dni } })];
            case 1:
                usuarioExistente = _a.sent();
                if (!((usuarioExistente === null || usuarioExistente === void 0 ? void 0 : usuarioExistente.dni) == newUser.dni)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(409).send({ message: 'USUARIO YA EXISTE' })];
            case 2: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).save(newUser)];
            case 3:
                resultados = _a.sent();
                expiresIn = 30 * 60;
                accessToken = jsonwebtoken_1.default.sign({ resultados: resultados }, SECRET_KEY, { expiresIn: expiresIn });
                dataUser = {
                    dni: resultados.dni,
                    email: resultados.email,
                    tipo_ambito: resultados.tipo_ambito,
                    descripcion_ambito: resultados.descripcion_ambito,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                };
                return [2 /*return*/, res.json(dataUser)];
            case 4: return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(409).send({ message: 'USUARIO YA EXISTE' })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.loginUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, resultPassword, expiresIn, accessToken, dataUser, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).findOne({ where: { dni: req.body.dni } })];
            case 1:
                userData = _a.sent();
                if (!userData) {
                    //DNI NO PERTENECE A NINGÚN USUARIO
                    return [2 /*return*/, res.status(409).send({ message: 'VERIDICAR SU USUARIO Y/O CONTRASEÑA' })];
                }
                else {
                    resultPassword = bcryptjs_1.default.compare(userData.password, req.body.password);
                    if (resultPassword) {
                        expiresIn = 30 * 60;
                        accessToken = jsonwebtoken_1.default.sign({ userData: userData }, SECRET_KEY, { expiresIn: expiresIn });
                        dataUser = {
                            dni: userData.dni,
                            email: userData.email,
                            tipo_ambito: userData.tipo_ambito,
                            descripcion_ambito: userData.descripcion_ambito,
                            accessToken: accessToken,
                            expiresIn: expiresIn
                        };
                        return [2 /*return*/, res.send({ dataUser: dataUser })];
                    }
                    else {
                        //CONTRASEÑA INCORRECTA
                        return [2 /*return*/, res.status(409).send({ message: 'VERIDICAR SU USUARIO Y/O CONTRASEÑA' })];
                    }
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(409).send({ message: 'VERIDICAR SU USUARIO Y/O CONTRASEÑA' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.actualizarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 3];
                typeorm_1.getRepository(Usuario_1.Usuarios_Risc).merge(usuario, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).save(usuario)];
            case 2:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
            case 3: return [2 /*return*/, res.status(404).json({ msg: 'USUARIO NO ENCONTRADO' })];
        }
    });
}); };
exports.eliminarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, resultados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).findOne(req.params.dni)];
            case 1:
                usuario = _a.sent();
                if (!usuario) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuarios_Risc).delete(req.params.dni)];
            case 2:
                resultados = _a.sent();
                return [2 /*return*/, res.json(resultados)];
            case 3: return [2 /*return*/, res.status(404).json({ msg: 'USUARIO NO ENCONTRADO' })];
        }
    });
}); };
