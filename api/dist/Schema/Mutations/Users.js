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
exports.LOGIN_USER = exports.REGISTER_USER = void 0;
const User_1 = require("../TypeDefs/User");
const graphql_1 = require("graphql");
const Users_1 = require("../../Entities/Users");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.REGISTER_USER = {
    type: graphql_1.GraphQLBoolean,
    args: {
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                args.password = yield (0, bcryptjs_1.hash)(args.password, 12);
                Users_1.Users.insert(args);
            }
            catch (err) {
                console.log(err);
                return false;
            }
            return true;
        });
    }
};
exports.LOGIN_USER = {
    type: User_1.LoginResponse,
    args: {
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args, { req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Users_1.Users.findOne({ where: {
                    email: args.email,
                } });
            if (!user) {
                throw new Error('invalid login credentials');
            }
            const valid = yield (0, bcryptjs_1.compare)(args.password, user.password);
            if (!valid) {
                throw new Error('invalid login credentials');
            }
            res.cookie("gid", (0, jsonwebtoken_1.sign)({ userEmail: args.email, }, "silkyroad", {
                expiresIn: "7d"
            }), {
                httpOnly: true,
            });
            return {
                accessToken: (0, jsonwebtoken_1.sign)({ userEmail: user.email, }, "edd7b161ef6b97f3802683e0bce187db", {
                    expiresIn: "15m"
                })
            };
        });
    }
};
