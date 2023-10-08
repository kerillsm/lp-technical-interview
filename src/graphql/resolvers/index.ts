import {
  createHouseService,
  deleteHouseService,
  getAllHousesService,
  getBestHousesInAreaService,
  getBiggestHousesService,
  getHouseService,
  updateHouseService,
} from "../../di";
import { GetAllHousesServiceDTO } from "../../services/getAllHouses.service";
import { CreateHouseDTO, UpdateHouseDTO } from "./types";

export const rootResolver = {
  Query: {
    house: (_: any, { args }: { args: { id: number } }) =>
      getHouseService.get(args.id),
    houses: (_: any, { args }: { args?: GetAllHousesServiceDTO }) =>
      getAllHousesService.getAll(args ?? {}),
    biggestHouses: () => getBiggestHousesService.get(),
    nearestBiggestNewsetHouses: (
      _: any,
      { args }: { args: { lat: number; lng: number } }
    ) => getBestHousesInAreaService.get(args),
  },
  Mutation: {
    createHouse: (_: any, { args }: { args: CreateHouseDTO }) =>
      createHouseService.create(args),
    updateHouse: (_: any, { args }: { args: UpdateHouseDTO }) => {
      const { id, ...rest } = args;
      return updateHouseService.update(id, rest);
    },
    deleteHouse: (_: any, { args }: { args: { id: number } }) =>
      deleteHouseService.delete(args.id),
  },
};
