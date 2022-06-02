import { GraphQLList } from "graphql";
import { Guest } from "../TypeDefs/Guest";
import { Guests } from "../../Entities/Guests"

export const GET_ALL_GUESTS = {
    type: new GraphQLList(Guest),
    async resolve() {
        return Guests.find();
    },
}