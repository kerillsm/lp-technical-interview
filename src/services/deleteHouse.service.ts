import { Pool } from "pg";
import { House } from "../models/House.model";

export class DeleteHouseService {
  constructor(private readonly pool: Pool) {}

  async delete(id: number): Promise<House> {
    try {
      const r = await this.pool.query(`
        DELETE FROM house WHERE id=${id}
        RETURNING *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat";
      `);
      if (!r.rows.length) {
        throw new Error(`House with id ${id} not found`);
      }
      return r.rows[0];
    } catch (err) {
      throw err;
    }
  }
}
