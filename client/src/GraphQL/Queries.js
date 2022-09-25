import { gql } from "@apollo/client"

export const GET_EVENT = gql`

    query getEvent (
        $code: String!
    ) {
        getEvent(
            code: $code
        ) {
            code
            title
            label_1
            label_2
            label_3
            label_4
            label_5
            label_6
            label_7
            
        }
    }

`