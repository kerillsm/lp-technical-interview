-- create postgis extension
CREATE EXTENSION postgis;
-- CreateTable
CREATE TABLE house (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rooms" INTEGER NOT NULL,
    "coords" geometry(Point, 4326) NOT NULL,
    "buildAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "house_pkey" PRIMARY KEY ("id")
);
-- CreateIndex
CREATE INDEX "location_idx" ON house USING GIST ("coords");
CREATE INDEX "rooms_idx" ON house("rooms");
