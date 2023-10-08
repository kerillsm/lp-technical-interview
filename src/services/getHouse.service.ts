import { Pool } from "pg";
import { House } from "../models/House.model";

export class GetHouseService {
  constructor(private readonly pool: Pool) {}

  async get(id: number): Promise<House> {
    try {
      const r = await this.pool.query(`
        SELECT *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat" FROM house
        WHERE id=${id}
      `);
      const house = r.rows[0];
      if (!house) {
        throw new Error(`House with id ${id} not found`);
      }
      return house;
    } catch (e) {
      throw e;
    }
  }
}
