/*
  Warnings:

  - Added the required column `location` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "location" TEXT NOT NULL;
