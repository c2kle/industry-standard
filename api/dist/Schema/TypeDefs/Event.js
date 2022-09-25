"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const graphql_1 = require("graphql");
exports.Event = new graphql_1.GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        code: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        label_1: { type: graphql_1.GraphQLString },
        label_2: { type: graphql_1.GraphQLString },
        label_3: { type: graphql_1.GraphQLString },
        label_4: { type: graphql_1.GraphQLString },
        label_5: { type: graphql_1.GraphQLString },
        label_6: { type: graphql_1.GraphQLString },
        label_7: { type: graphql_1.GraphQLString },
    }),
});
