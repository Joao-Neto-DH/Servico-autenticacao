/*
  Warnings:

  - You are about to alter the column `session_token` on the `Session` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE `Session` MODIFY `session_token` VARCHAR(150) NOT NULL;
