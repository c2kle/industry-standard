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
exports.CREATE_GUEST = void 0;
const Guest_1 = require("../TypeDefs/Guest");
const graphql_1 = require("graphql");
const Guests_1 = require("../../Entities/Guests");
exports.CREATE_GUEST = {
    type: Guest_1.Guest,
    args: {
        first_name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        instagram: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLString },
        mobile: { type: graphql_1.GraphQLString },
        promoter: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            Guests_1.Guests.insert(args);
            return args;
        });
    }
};
