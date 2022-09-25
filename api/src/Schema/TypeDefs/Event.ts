import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql"

export const Event = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: GraphQLID },
        code: { type: GraphQLString },
    }),
});
