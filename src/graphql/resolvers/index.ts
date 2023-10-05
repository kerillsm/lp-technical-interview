import {
  createHouseService,
  getAllHousesService,
  getBestHousesInAreaService,
  getBiggestHousesService,
  getHouseService,
  updateHouseService,
} from "../../di";
import { CreateHouseServiceDTO } from "../../services/createHouse.service";
import { UpdateHouseServiceDTO } from "../../services/updateHouse.service";

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
    createHouse: (_: any, { args }: { args: CreateHouseServiceDTO }) => {
      return createHouseService.create(args);
    },
    updateHouse: (
      _: any,
      { args }: { args: UpdateHouseServiceDTO & { id: number } }
    ) => {
      const { id, ...rest } = args;
      return updateHouseService.update(id, rest);
    },
  },
};
