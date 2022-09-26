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

export const CREATE_EVENT = gql`

    mutation createEvent(
        $code: String!
        $title: String! 
        $label_1: String! 
        $label_2: String! 
        $label_3: String! 
        $label_4: String!
        $label_5: String! 
        $label_6: String! 
        $label_7: String!
        ) {
        createEvent(
            code: $code 
            title: $title 
            label_1: $label_1 
            label_2: $label_2
            label_3: $label_3
            label_4: $label_4
            label_5: $label_5 
            label_6: $label_6 
            label_7: $label_7) {
                code
                title
            }
    }

`