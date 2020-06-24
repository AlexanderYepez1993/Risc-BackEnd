"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USUARIOSRISC = void 0;
var typeorm_1 = require("typeorm");
var USUARIOSRISC = /** @class */ (function () {
    function USUARIOSRISC() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ type: "nvarchar", length: 8 }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "dni", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 250, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "apellido_paterno", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "apellido_materno", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "nombres", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "tipo_ambito", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "descripcion_ambito", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 8, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "estado", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 1, nullable: false }),
        __metadata("design:type", String)
    ], USUARIOSRISC.prototype, "isLogged", void 0);
    USUARIOSRISC = __decorate([
        typeorm_1.Entity()
    ], USUARIOSRISC);
    return USUARIOSRISC;
}());
exports.USUARIOSRISC = USUARIOSRISC;
