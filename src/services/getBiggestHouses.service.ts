import { Pool } from "pg";
import { House } from "../models/House.model";

export class GetBiggestHousesService {
  constructor(private readonly pool: Pool) {}

  async get(): Promise<House[]> {
    try {
      const r = await this.pool.query<House>(
        `SELECT *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat" FROM house
        ORDER BY rooms DESC
        LIMIT 5;`
      );
      return r.rows;
    } catch (err) {
      throw err;
    }
  }
}
