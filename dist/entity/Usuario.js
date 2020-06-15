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
exports.Usuarios_Risc = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_Risc = /** @class */ (function () {
    function Usuarios_Risc() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ type: "varchar", length: 8 }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "dni", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 16, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "apellido_paterno", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "apellido_materno", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "nombres", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "tipo_ambito", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 200, nullable: false }),
        __metadata("design:type", String)
    ], Usuarios_Risc.prototype, "descripcion_ambito", void 0);
    Usuarios_Risc = __decorate([
        typeorm_1.Entity()
    ], Usuarios_Risc);
    return Usuarios_Risc;
}());
exports.Usuarios_Risc = Usuarios_Risc;
