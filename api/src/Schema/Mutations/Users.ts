import { LoginResponse } from "../TypeDefs/User";
import { GraphQLBoolean, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { hash, compare } from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import { MyContext } from "../TypeDefs/MyContext";

export const REGISTER_USER = {
    type: GraphQLBoolean,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString  },
    },
    async resolve(parent: any, args: any) {
        try {
            args.password = await hash(args.password,12)
            Users.insert(args)
        }
        catch (err) {
            console.log(err)
            return false;
        }
        return true;
    }

}

export const LOGIN_USER = {
    type: LoginResponse,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString  },
    },
    async resolve(parent: any, args: any, {req,res}: MyContext) {

        const user = await Users.findOne({where: {
            email: args.email,
        }});

        if (!user) {
            throw new Error ('invalid login credentials')
        }

        const valid = await compare(args.password, user.password)

        if (!valid) {
            throw new Error ('invalid login credentials')
        }

        res.cookie("gid",sign({ userEmail: args.email, }, "silkyroad", {
            expiresIn: "7d"}  ),{
                httpOnly: true,
            })

        return {
            accessToken: sign({ userEmail: user.email, }, "edd7b161ef6b97f3802683e0bce187db", {
                expiresIn: "15m"}  )
        };
    }

}