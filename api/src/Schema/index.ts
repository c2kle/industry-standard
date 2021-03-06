import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_GUESTS } from "./Queries/Guests";
import { CREATE_GUEST } from "./Mutations/Guests";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllGuests: GET_ALL_GUESTS
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createGuest: CREATE_GUEST
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})