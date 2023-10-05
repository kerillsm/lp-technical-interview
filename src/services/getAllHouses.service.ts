import { House, PrismaClient } from "@prisma/client";

export class GetAllHousesService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll(): Promise<House[]> {
    try {
      return this.prisma.house.findMany();
    } catch (err) {
      throw err;
    }
  }
}
