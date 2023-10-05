import {
  CreateHouseInput,
  HouseSchema,
  UpdateHouseInput,
} from "./House.schema";

export const rootSchema = `#graphql
    ${HouseSchema}
    ${CreateHouseInput}
    ${UpdateHouseInput}

    type Query {
        house (args: Int): House!
        houses: [House!]!
        biggestHouses: [House!]!
    }

    type Mutation {
        createHouse (args: CreateHouseInput!): House!
        updateHouse (args: UpdateHouseInput!): House!
    }
`;
