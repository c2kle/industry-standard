import { gql } from "@apollo/client"

export const GET_EVENT = gql`

    query getEvent (
        $code: String!
    ) {
        getEvent(
            code: $code
        ) {
            code
        }
    }

`