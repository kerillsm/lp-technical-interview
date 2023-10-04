export const HouseSchema = `#graphql
    type House {
        id:         ID!
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
