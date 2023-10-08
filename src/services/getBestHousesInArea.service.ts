import { Pool } from "pg";
import { House } from "../models/House.model";

export interface GetBestHousesInAreaServiceDTO {
  lat: number;
  lng: number;
}

export class GetBestHousesInAreaService {
  constructor(private readonly pool: Pool) {}

  async get({ lat, lng }: GetBestHousesInAreaServiceDTO): Promise<House[]> {
    try {
      const distance = 2000;
      const r = await this.pool.query<House>(
        `
          SELECT *, ST_X(coords) AS "lng", ST_Y(coords) AS "lat" FROM house as house
          WHERE ST_DWithin(
              house.coords::geography,
              ST_MakePoint(${lng},  ${lat})::geography,
              ${distance}
          )
          ORDER BY "rooms" DESC, "buildAt" 
          LIMIT 3
        `
      );
      return r.rows;
    } catch (err) {
      throw err;
    }
  }
}
