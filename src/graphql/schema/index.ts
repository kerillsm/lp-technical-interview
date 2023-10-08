import {
  CreateHouseInput,
  DeleteHouseInput,
  GetBestHousesInAreaInput,
  GetHouseInput,
  GetHousesInput,
  HouseSchema,
  UpdateHouseInput,
} from "./House.schema";

export const rootSchema = `#graphql
    ${HouseSchema}
    ${GetHouseInput}
    ${GetHousesInput}
    ${GetBestHousesInAreaInput}
    ${CreateHouseInput}
    ${UpdateHouseInput}
    ${DeleteHouseInput}

    type Query {
        house (args: GetHouseInput!): House!
        houses (args: GetHousesInput): [House!]!
        biggestHouses: [House!]!
        nearestBiggestNewsetHouses (args: GetBestHousesInAreaInput!): [House!]!
    }

    type Mutation {
        createHouse (args: CreateHouseInput!): House!
        updateHouse (args: UpdateHouseInput!): House!
        deleteHouse (args: DeleteHouseInput!): House!
    }
`;
