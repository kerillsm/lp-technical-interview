import { Pool } from "pg";
import { House } from "../models/House.model";

export class GetAllHousesService {
  constructor(private readonly pool: Pool) {}

  async getAll(): Promise<House[]> {
    try {
      const r = await this.pool.query<House>(
        `SELECT *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat" FROM house`
      );
      return r.rows;
    } catch (err) {
      throw err;
    }
  }
}
