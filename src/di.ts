import { Pool } from "pg";
import { DeleteHouseService } from "./services/deleteHouse.service";
import { GetBiggestHousesService } from "./services/getBiggestHouses.service";
import { CreateHouseService } from "./services/createHouse.service";
import { GetAllHousesService } from "./services/getAllHouses.service";
import { GetHouseService } from "./services/getHouse.service";
import { UpdateHouseService } from "./services/updateHouse.service";
import { GetBestHousesInAreaService } from "./services/getBestHousesInArea.service";

let pool: Pool | null = null;
if (!pool) {
  pool = new Pool();
}

export const getAllHousesService = new GetAllHousesService(pool);
export const getHouseService = new GetHouseService(pool);
export const getBiggestHousesService = new GetBiggestHousesService(pool);
export const getBestHousesInAreaService = new GetBestHousesInAreaService(pool);
export const createHouseService = new CreateHouseService(pool);
export const updateHouseService = new UpdateHouseService(pool);
export const deleteHouseService = new DeleteHouseService(pool);
