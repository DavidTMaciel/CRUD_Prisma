import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
    async createUser(req, res) {
        try {
            const { name, email } = req.body;

            let user = await prisma.user.findUnique({
                where: {
                    email
                }
            })//Caso já haja um usuario com este email cadastrado é retornado um erro
            if (user) {
                return res.json({ error: "There is already a user with that email" })
            }
            user = await prisma.user.create({
                data: {
                    name,
                    email
                }
            });
            return res.json(user);
        } catch (erro) {
            return res.json({ erro })
        }
    },
    async findAllUsers(req, res) {
        try {
            const user = await prisma.user.findMany();
            return res.json(user);
        } catch (erro) {
            return res.json({ erro });
        }

    },
};