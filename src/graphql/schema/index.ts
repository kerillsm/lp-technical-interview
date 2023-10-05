import {
  CreateHouseInput,
  GetBestHousesInAreaInput,
  HouseSchema,
  UpdateHouseInput,
} from "./House.schema";

export const rootSchema = `#graphql
    ${HouseSchema}
    ${CreateHouseInput}
    ${UpdateHouseInput}
   ${GetBestHousesInAreaInput}

    type Query {
        house (args: Int!): House!
        houses: [House!]!
        biggestHouses: [House!]!
        nearestBiggestNewsetHouses (args: GetBestHousesInAreaInput!): [House!]!
    }

    type Mutation {
        createHouse (args: CreateHouseInput!): House!
        updateHouse (args: UpdateHouseInput!): House!
    }
`;
