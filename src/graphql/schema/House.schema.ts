export const HouseSchema = `#graphql
    type House {
        id:         Int!
        name:       String!
        price:      Float!
        rooms:      Int!
        lat:        Float!
        lng:        Float!
        buildAt:    String!
    }
`;

export const GetHouseInput = `
    input GetHouseInput {
        id:     Int!
    }
`;

export const GetBestHousesInAreaInput = `
    input GetBestHousesInAreaInput {
        lat:    Float!
        lng:    Float!
    }
`;

export const CreateHouseInput = `
    input CreateHouseInput {
        name:       String!
        price:      Float!
        rooms:      Int!
        lat:        Float!
        lng:        Float!
        buildAt:    String!
    }
`;

export const UpdateHouseInput = `
    input UpdateHouseInput {
        id:         Int!
        name:       String
        price:      Float
        rooms:      Int
        lat:        Float
        lng:        Float
        buildAt:    String
    }
`;

export const DeleteHouseInput = `
    input DeleteHouseInput {
        id:     Int!
    }
`;
