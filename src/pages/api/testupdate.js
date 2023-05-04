import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const createUser = await prisma.User.create({
      data: {
        id: '1',
        email: 'new_email@prisma.io',
        name: 'New Name',
      },
    })
    console.log(createUser);
    res.status(200).json({ name: createUser.name })
}
