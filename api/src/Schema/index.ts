import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_GUESTS } from "./Queries/Guests";
import { CREATE_GUEST } from "./Mutations/Guests";
import { GET_EVENT } from "./Queries/Events";
import { CREATE_EVENT } from "./Mutations/Events";
import {LOGIN_USER, REGISTER_USER} from "./Mutations/Users";
import {GET_ALL_USERS} from "./Queries/Users";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllGuests: GET_ALL_GUESTS,
        getEvent: GET_EVENT,
        getAllUsers: GET_ALL_USERS,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createGuest: CREATE_GUEST,
        createEvent: CREATE_EVENT,
        registerUser: REGISTER_USER,
        loginUser: LOGIN_USER,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})