import {
  createHouseService,
  getAllHousesService,
  getBestHousesInAreaService,
  getBiggestHousesService,
  getHouseService,
  updateHouseService,
} from "../../di";
import { CreateHouseDTO, UpdateHouseDTO } from "./types";

export const rootResolver = {
  Query: {
    house: (_: any, { args: id }: { args: number }) => getHouseService.get(id),
    houses: () => getAllHousesService.getAll(),
    biggestHouses: () => getBiggestHousesService.get(),
    nearestBiggestNewsetHouses: (
      _: any,
      { args }: { args: { lat: number; lng: number } }
    ) => getBestHousesInAreaService.get(args),
  },
  Mutation: {
    createHouse: (_: any, { args }: { args: CreateHouseDTO }) => {
      return createHouseService.create(args);
    },
    updateHouse: (_: any, { args }: { args: UpdateHouseDTO }) => {
      const { id, ...rest } = args;
      return updateHouseService.update(id, rest);
    },
  },
};
