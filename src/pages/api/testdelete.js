import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient()      
    const deleteUser = await prisma.User.delete({
        where: {
            email: 'elsa@prisma.io',
          },
    })
    console.log(deleteUser);
    res.status(200).json({ email: "Elsa@Prisma.gmail" });
}
