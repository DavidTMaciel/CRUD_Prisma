import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.post("/user", async (req, res) => {
    try{
        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        return res.json(user);
    }catch(erro){
        
    }

});




export {router};