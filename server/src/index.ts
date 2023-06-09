import { PrismaClient } from '@prisma/client';
import express, { RequestHandler, Response, urlencoded } from 'express';
import { json } from 'stream/consumers';
import Cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(Cors());
app.use(express.json());

app.post('/', (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const { upc, quantity, onHand, salesTax, location } = req.body;

  if (!upc || !quantity || !onHand || !location) {
    res.status(400).send(JSON.stringify({ message: 'missing values' }));
    return;
  }

  prisma.$connect();
  prisma.item
    .update({
      where: { upc: `${upc}` },
      data: {
        quantity: quantity,
        location: location,
        onHand: onHand,
        salesTax: salesTax,
      },
    })
    .then((d) => {
      res.status(200).send(JSON.stringify(d));
    })
    .catch(() => {
      return prisma.item.create({
        data: {
          upc: upc,
          quantity: quantity,
          onHand: onHand,
          salesTax: salesTax,
          location: location,
        },
      });
    })
    .then((d) => res.status(200).send(JSON.stringify(d)))
    .finally(() => {
      prisma.$disconnect();
    });
});

app.post('/find', async (req: express.Request, res: express.Response) => {
  const { upc, location } = req.body;
  console.log(upc);
  await prisma.$connect();
  const data = await prisma.item.findFirst({
    where: { upc: upc, location: location },
  });
  console.log(data);
  res.send(JSON.stringify(data));
  await prisma.$disconnect();
});

app.post('/find2', (req: express.Request, res: express.Response) => {
  const { upc, location } = req.body;
  prisma
    .$connect()
    .then((res) => {
      console.log(res);
      return prisma.item.findFirst({
        where: { upc: upc, location: location },
      });
    })
    .then((data) => {
      console.log(data);
    })
    .finally(() => prisma.$disconnect());
});

app.listen(12000, () => {
  console.log('listening on port ', 12000);
});
