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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_GUESTS = void 0;
const graphql_1 = require("graphql");
const Guest_1 = require("../TypeDefs/Guest");
const Guests_1 = require("../../Entities/Guests");
exports.GET_ALL_GUESTS = {
    type: new graphql_1.GraphQLList(Guest_1.Guest),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            return Guests_1.Guests.find();
        });
    },
};
