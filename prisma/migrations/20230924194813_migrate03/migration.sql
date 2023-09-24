/*
  Warnings:

  - The primary key for the `advertisment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `galleryimages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `kidstosponsor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `teammembers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `testimonies` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `galleryimages` DROP FOREIGN KEY `GalleryImages_categoryId_fkey`;

-- AlterTable
ALTER TABLE `advertisment` DROP PRIMARY KEY,
    ADD COLUMN `topic` VARCHAR(191) NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `event` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `galleryimages` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `categoryId` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `kidstosponsor` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `teammembers` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `testimonies` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `GalleryImages` ADD CONSTRAINT `GalleryImages_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
