import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql"

export const User = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString  },
    }),
});

export const LoginResponse = new GraphQLObjectType({
    name: "LoginResponse",
    fields: () => ({
        accessToken: { type: GraphQLString}
    })
})