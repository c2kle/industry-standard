import { Guest } from "../TypeDefs/Guest";
import { GraphQLString } from "graphql";
import { Guests } from "../../Entities/Guests"

export const CREATE_GUEST = {
    type: Guest,
    args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString  },
        instagram: { type: GraphQLString  },
        age: { type: GraphQLString  },
        mobile: { type: GraphQLString  },
        promoter: { type: GraphQLString  },
    },
    async resolve(parent: any, args: any) {
        Guests.insert(args)
        return args;
    }

}