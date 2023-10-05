import { House, PrismaClient } from "@prisma/client";

export class DeleteHouseService {
  constructor(private readonly prisma: PrismaClient) {}

  delete(id: number): Promise<House> {
    try {
      return this.prisma.house.delete({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
