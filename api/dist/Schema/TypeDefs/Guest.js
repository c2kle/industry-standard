"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = void 0;
const graphql_1 = require("graphql");
exports.Guest = new graphql_1.GraphQLObjectType({
    name: "Guest",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        first_name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        instagram: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLString },
        mobile: { type: graphql_1.GraphQLString },
        promoter: { type: graphql_1.GraphQLString },
    }),
});
