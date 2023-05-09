-- CreateTable
CREATE TABLE "Item" (
    "upc" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "onHand" TEXT NOT NULL,
    "salesTax" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("upc")
);
