import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_GUESTS } from "./Queries/Guests";
import { CREATE_GUEST } from "./Mutations/Guests";
import { GET_EVENT } from "./Queries/Events";
import { CREATE_EVENT } from "./Mutations/Events";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllGuests: GET_ALL_GUESTS,
        getEvent: GET_EVENT
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createGuest: CREATE_GUEST,
        createEvent: CREATE_EVENT
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})