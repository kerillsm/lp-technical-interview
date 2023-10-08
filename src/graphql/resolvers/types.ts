export interface CreateHouseDTO {
  name: string;
  rooms: number;
  lat: number;
  lng: number;
  buildAt: Date;
}

export type UpdateHouseDTO = CreateHouseDTO & { id: number };
