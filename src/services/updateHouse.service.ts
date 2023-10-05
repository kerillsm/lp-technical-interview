import { House, PrismaClient } from "@prisma/client";
import { CreateHouseServiceDTO } from "./createHouse.service";

export type UpdateHouseServiceDTO = Partial<CreateHouseServiceDTO>;

export class UpdateHouseService {
  constructor(private readonly prisma: PrismaClient) {}

  async update(id: number, data: UpdateHouseServiceDTO): Promise<House> {
    try {
      return this.prisma.house.update({
        data,
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
