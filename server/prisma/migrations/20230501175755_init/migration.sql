-- CreateTable
CREATE TABLE "Item" (
    "upc" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "ohHand" INTEGER NOT NULL,
    "salesTax" BOOLEAN NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("upc")
);
