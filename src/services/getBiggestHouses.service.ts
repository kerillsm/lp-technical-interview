import { House, PrismaClient } from "@prisma/client";

export class GetBiggestHousesService {
  constructor(private readonly prisma: PrismaClient) {}

  async get(): Promise<House[]> {
    try {
      return this.prisma.house.findMany({
        orderBy: {
          rooms: "desc",
        },
        take: 5,
      });
    } catch (err) {
      throw err;
    }
  }
}
