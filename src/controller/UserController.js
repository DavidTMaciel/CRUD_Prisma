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

    async findUser(req, res) {
        try {
            const { id } = req.params;

            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return res.json({ message: 'User not found' });
            } else {
                return res.json(user);
            }

        } catch (error) {
            return res.json({ error });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            let user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return res.json({ error: 'User not found' });
            } else {
                user = await prisma.user.update({
                    where: { id: Number(id) },
                    data: { name, email },
                })
                return res.json({ user })
            }
        } catch (error) {
            return res.json({ error });
        }

    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });

            if (!user) {
                return res.json({ message: 'User not found' });
            } else {
                await prisma.user.delete({ where: { id: Number(id) } });
                return res.json({ message: 'User deleted successfully' });
            }

        } catch (error) {
            return res.json({ error });
        }
    },
};