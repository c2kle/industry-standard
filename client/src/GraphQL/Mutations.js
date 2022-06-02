import { gql } from "@apollo/client";


export const CREATE_GUEST = gql`

    mutation createGuest(
        $first_name: String!
        $last_name: String! 
        $instagram: String! 
        $age: String! 
        $mobile: String! 
        $promoter: String!
        ) {
        createGuest(
            first_name: $first_name 
            last_name: $last_name 
            instagram: $instagram 
            age: $age 
            mobile: $mobile 
            promoter: $promoter) {
                id
                first_name
                last_name
            }
    }

`