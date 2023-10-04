import { House, PrismaClient } from "@prisma/client";

export class GetAllHousesService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll(): Promise<House[]> {
    return this.prisma.house.findMany();
  }
}
