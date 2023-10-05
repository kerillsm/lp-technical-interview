import { House, PrismaClient } from "@prisma/client";

export interface GetBestHousesInAreaServiceDTO {
  lat: number;
  lng: number;
}

export class GetBestHousesInAreaService {
  constructor(private readonly prisma: PrismaClient) {}

  async get({ lat, lng }: GetBestHousesInAreaServiceDTO): Promise<House[]> {
    try {
      const distance = 0.02; // +- 2.2km radius
      return this.prisma.house.findMany({
        where: {
          lat: {
            gte: lat - distance,
            lte: lat + distance,
          },
          lng: {
            gte: lng - distance,
            lte: lng + distance,
          },
        },
        orderBy: [
          {
            rooms: "desc",
          },
          {
            buildAt: "desc",
          },
        ],
        take: 3,
      });
    } catch (err) {
      throw err;
    }
  }
}
