import { GraphQLList } from "graphql";
import { User } from "../TypeDefs/User";
import { Users } from "../../Entities/Users"

export const GET_ALL_USERS = {
    type: new GraphQLList(User),
    async resolve() {
        return Users.find();
    },
}