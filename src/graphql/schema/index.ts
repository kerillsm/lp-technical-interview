import { CreateHouseInput, HouseSchema } from "./House.schema";

export const rootSchema = `#graphql
    ${HouseSchema}
    ${CreateHouseInput}

    type Query {
        house (ars: Int): House!
        houses: [House!]!
    }

    type Mutation {
        createHouse (ars: CreateHouseInput!): House!
    }
`;
