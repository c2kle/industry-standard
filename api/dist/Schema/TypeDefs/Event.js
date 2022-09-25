"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const graphql_1 = require("graphql");
exports.Event = new graphql_1.GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        code: { type: graphql_1.GraphQLString },
    }),
});
