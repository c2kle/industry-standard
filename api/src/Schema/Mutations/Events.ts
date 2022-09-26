import { Event } from "../TypeDefs/Event";
import { GraphQLString } from "graphql";
import { Events } from "../../Entities/Events"

export const CREATE_EVENT = {
    type: Event,
    args: {
        code: { type: GraphQLString },
        title: { type: GraphQLString  },
        label_1: { type: GraphQLString  },
        label_2: { type: GraphQLString  },
        label_3: { type: GraphQLString  },
        label_4: { type: GraphQLString  },
        label_5: { type: GraphQLString  },
        label_6: { type: GraphQLString  },
        label_7: { type: GraphQLString  },
    },
    async resolve(parent: any, args: any) {
        Events.insert(args)
        return args;
    }

}