"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = exports.User = void 0;
const graphql_1 = require("graphql");
exports.User = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    }),
});
exports.LoginResponse = new graphql_1.GraphQLObjectType({
    name: "LoginResponse",
    fields: () => ({
        accessToken: { type: graphql_1.GraphQLString }
    })
});
