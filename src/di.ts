import { PrismaClient } from "@prisma/client";
import { CreateHouseService } from "./services/createHouse.service";
import { GetAllHousesService } from "./services/getAllHouses.service";
import { GetHouseService } from "./services/getHouse.service";

let prisma: PrismaClient | null = null;

if (!prisma) {
  prisma = new PrismaClient();
}

export const getAllHousesService = new GetAllHousesService(prisma);
export const getHouseService = new GetHouseService(prisma);
export const createHouseService = new CreateHouseService(prisma);
