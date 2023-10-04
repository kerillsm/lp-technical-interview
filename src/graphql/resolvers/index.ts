import {
  createHouseService,
  getAllHousesService,
  getHouseService,
} from "../../di";
import { CreateHouseServiceDTO } from "../../services/createHouse.service";

export const rootResolver = {
  Query: {
    house: (_: any, { ars: id }: { ars: number }) => {
      return getHouseService.get(id);
    },
    houses: () => getAllHousesService.getAll(),
  },
  Mutation: {
    createHouse: (_: any, { ars }: { ars: CreateHouseServiceDTO }) => {
      return createHouseService.create(ars);
    },
  },
};
