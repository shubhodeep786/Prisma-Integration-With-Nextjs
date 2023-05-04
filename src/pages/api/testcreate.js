import { PrismaClient } from "@prisma/client";
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const User = await prisma.User.create({
    data: {
      id: "3",
      email: "elsa@prisma.ios",
      name: "Elsa Prisma",
    },
  });
  res.status(200).json({ name: "Elsa Prisma" });
}
