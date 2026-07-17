-- AlterTable
ALTER TABLE "ContactMessage" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Pending';

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "authUserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'Admin',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_authUserId_key" ON "Profile"("authUserId");
