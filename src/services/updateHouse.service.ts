import { House } from "../models/House.model";
import { CreateHouseServiceDTO } from "./createHouse.service";
import { Pool } from "pg";

type UpdateHouseServiceDTO = CreateHouseServiceDTO;

export class UpdateHouseService {
  constructor(private readonly pool: Pool) {}

  async update(id: number, data: UpdateHouseServiceDTO): Promise<House> {
    try {
      const r = await this.pool.query<House>(
        `
        UPDATE house
        SET
          "name" = $1,
          "rooms" = $2,
          "coords" = ST_GeomFromText('POINT(${data.lng} ${data.lat})', 4326),
          "buildAt" = to_timestamp($3, 'YYYY-MM-DD"T"HH24:MI:SS.USSTZH'),
        WHERE "id" = $4
        RETURNING *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat";
      `,
        [data.name, data.rooms, data.buildAt, id]
      );
      if (!r.rows.length) {
        throw new Error(`Error while updating house with id: ${id}`);
      }
      return r.rows[0];
    } catch (err) {
      throw err;
    }
  }
}
