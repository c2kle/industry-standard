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
exports.Events = void 0;
const typeorm_1 = require("typeorm");
let Events = class Events extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Events.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_4", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_5", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_6", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Events.prototype, "label_7", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Events.prototype, "date", void 0);
Events = __decorate([
    (0, typeorm_1.Entity)()
], Events);
exports.Events = Events;
