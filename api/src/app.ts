import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { DataSource } from "typeorm";
import { Guests } from "./Entities/Guests";
import { Events } from "./Entities/Events";
import { Users } from "./Entities/Users";
import * as dotenv from 'dotenv'

const main = async () => {
    
    dotenv.config();
    
    const dataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
        synchronize: false,
        entities: [Guests, Events, Users],
    });

    const connection = await dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", (req,res) => {
        return graphqlHTTP({
            schema,
            graphiql: true,
            context: {req,res}
        })(req,res);
    })

    app.listen(process.env.PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`)
    })
};

main().catch((err) => {
    console.log(err)
});