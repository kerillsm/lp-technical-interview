import { House, PrismaClient } from "@prisma/client";

export interface CreateHouseServiceDTO {
  name: string;
  rooms: number;
  price: number;
  lat: number;
  lng: number;
  buildAt: Date;
}

export class CreateHouseService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: CreateHouseServiceDTO): Promise<House> {
    try {
      return this.prisma.house.create({
        data,
      });
    } catch (err) {
      throw err;
    }
  }
}
