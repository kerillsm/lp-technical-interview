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
