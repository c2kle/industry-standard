import { Event } from "../TypeDefs/Event";
import { Events } from "../../Entities/Events"
import { GraphQLString } from "graphql";

export const GET_EVENT = {
    type: Event,
    args: {
        code: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        return Events.findOne({
            where: {
                code: args.code,
            },
        });
    },
}