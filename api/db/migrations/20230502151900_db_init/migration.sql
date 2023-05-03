-- CreateTable
CREATE TABLE "Nonprofit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "numEmployees" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amountPaid" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "giftAided" BOOLEAN NOT NULL,
    "nonprofitId" INTEGER NOT NULL,
    CONSTRAINT "Payment_nonprofitId_fkey" FOREIGN KEY ("nonprofitId") REFERENCES "Nonprofit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
