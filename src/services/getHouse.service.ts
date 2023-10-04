import { House, PrismaClient } from "@prisma/client";

export class GetHouseService {
  constructor(private readonly prisma: PrismaClient) {}

  async get(id: number): Promise<House> {
    try {
      const house = await this.prisma.house.findUnique({
        where: {
          id,
        },
      });
      if (!house) {
        throw new Error(`House with id ${id} not found`);
      }
      return house;
    } catch (e) {
      throw e;
    }
  }
}
