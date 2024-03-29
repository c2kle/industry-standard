"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Guests_1 = require("./Queries/Guests");
const Guests_2 = require("./Mutations/Guests");
const Events_1 = require("./Queries/Events");
const Events_2 = require("./Mutations/Events");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllGuests: Guests_1.GET_ALL_GUESTS,
        getEvent: Events_1.GET_EVENT
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createGuest: Guests_2.CREATE_GUEST,
        createEvent: Events_2.CREATE_EVENT
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
