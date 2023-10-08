import { Pool } from "pg";
import { House } from "../models/House.model";

export interface CreateHouseServiceDTO {
  name: string;
  rooms: number;
  lat: number;
  lng: number;
  buildAt: Date;
}

export class CreateHouseService {
  constructor(private readonly pool: Pool) {}

  async create(data: CreateHouseServiceDTO): Promise<House> {
    try {
      const r = await this.pool.query<House>(
        `INSERT INTO house ("name", "rooms", "coords", "buildAt")
        VALUES ($1, $2, ST_GeomFromText('POINT(${data.lng} ${data.lat})', 4326), to_timestamp($3, 'YYYY-MM-DD"T"HH24:MI:SS.USSTZH'))
        RETURNING *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat";`,
        [data.name, data.rooms, data.buildAt]
      );
      return r.rows[0];
    } catch (err: unknown) {
      throw err;
    }
  }
}
