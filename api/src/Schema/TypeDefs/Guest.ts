import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql"

export const Guest = new GraphQLObjectType({
    name: "Guest",
    fields: () => ({
        id: { type: GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString  },
        instagram: { type: GraphQLString  },
        age: { type: GraphQLString  },
        mobile: { type: GraphQLString  },
        promoter: { type: GraphQLString  },

    }),
});

