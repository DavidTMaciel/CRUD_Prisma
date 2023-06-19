import { Router } from "express";
import UserController from "../controller/UserController";
const router = Router();

router.post("/user", UserController.createUser);
router.get("/users", UserController.findAllUsers);
router.get("/user/:id", UserController.findUser);
router.post("/user/update/:id", UserController.updateUser);




export { router };