import { Pool } from "pg";
import { House } from "../models/House.model";

export interface GetAllHousesServiceDTO {
  skip?: number;
  limit?: number;
}

export class GetAllHousesService {
  constructor(private readonly pool: Pool) {}

  async getAll({ skip, limit }: GetAllHousesServiceDTO): Promise<House[]> {
    try {
      const r = await this.pool.query<House>(
        `
          SELECT *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat" FROM house
          ${limit ? "LIMIT " + limit : ""}
          ${skip ? "OFFSET " + skip : ""}
        `
      );
      return r.rows;
    } catch (err) {
      throw err;
    }
  }
}
