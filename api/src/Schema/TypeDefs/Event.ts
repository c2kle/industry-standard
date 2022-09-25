import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql"

export const Event = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: GraphQLID },
        code: { type: GraphQLString },
        title: { type: GraphQLString },
        label_1: { type: GraphQLString },
        label_2: { type: GraphQLString },
        label_3: { type: GraphQLString },
        label_4: { type: GraphQLString },
        label_5: { type: GraphQLString },
        label_6: { type: GraphQLString },
        label_7: { type: GraphQLString },
    }),
});
