"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var usuario_routers_1 = __importDefault(require("./routes/usuario.routers"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
typeorm_1.createConnection();
//middlewares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
console.log(__dirname);
app.use('/', express_1.default.static(__dirname + '/riscclien'));
app.get('/user/inicio', function (req, res) { return res.sendFile(path_1.default.join(__dirname + '/riscclien')); });
app.get('/home', function (req, res) { return res.sendFile(path_1.default.join(__dirname + '/riscclien')); });
//routes
app.use(usuario_routers_1.default);
app.listen(3000);
console.log('Server on Port', 3000);
