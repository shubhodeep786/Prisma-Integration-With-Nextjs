import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: "2",
    },
  });
  console.log(user);
  res.status(200).json({ name: "Elsa Prisma" });
}
