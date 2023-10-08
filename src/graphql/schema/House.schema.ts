export const HouseSchema = `#graphql
    type House {
        id:         Int!
        name:       String!
        rooms:      Int!
        lat:        Float!
        lng:        Float!
        buildAt:    String!
    }
`;

export const GetHousesInput = `
    input GetHousesInput {
        skip:   Int
        limit:  Int
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
        rooms:      Int!
        lat:        Float!
        lng:        Float!
        buildAt:    String!
    }
`;

export const UpdateHouseInput = `
    input UpdateHouseInput {
        id:         Int!
        name:       String!
        rooms:      Int!
        lat:        Float!
        lng:        Float!
        buildAt:    String!
    }
`;

export const DeleteHouseInput = `
    input DeleteHouseInput {
        id:     Int!
    }
`;
