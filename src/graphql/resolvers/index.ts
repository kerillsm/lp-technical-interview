import {
  createHouseService,
  getAllHousesService,
  getHouseService,
  updateHouseService,
} from "../../di";
import { CreateHouseServiceDTO } from "../../services/createHouse.service";
import { UpdateHouseServiceDTO } from "../../services/updateHouse.service";

export const rootResolver = {
  Query: {
    house: (_: any, { args: id }: { args: number }) => {
      return getHouseService.get(id);
    },
    houses: () => getAllHousesService.getAll(),
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
