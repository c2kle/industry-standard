"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_EVENT = void 0;
const Event_1 = require("../TypeDefs/Event");
const graphql_1 = require("graphql");
const Events_1 = require("../../Entities/Events");
exports.CREATE_EVENT = {
    type: Event_1.Event,
    args: {
        code: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        label_1: { type: graphql_1.GraphQLString },
        label_2: { type: graphql_1.GraphQLString },
        label_3: { type: graphql_1.GraphQLString },
        label_4: { type: graphql_1.GraphQLString },
        label_5: { type: graphql_1.GraphQLString },
        label_6: { type: graphql_1.GraphQLString },
        label_7: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            Events_1.Events.insert(args);
            return args;
        });
    }
};
