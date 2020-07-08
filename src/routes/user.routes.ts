import { Router, request, response } from "express";
import { connection } from "../database/connection";
const userRouter = Router();
import { uuid } from "uuidv4";
import AppError from "../error/AppError";

userRouter.get("/", async (request, response) => {
  const users = await connection.select("*").from("anote_user");

  response.json({ users });
});

userRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  if (!email) throw new AppError(400, "Invalid or Missing email");

  if (!password) throw new AppError(400, "Invalid or Missing password");

  const newUser = {
    email,
    password,
    id: uuid(),
  };

  await connection.insert(newUser).into("anote_user");

  response.json({ newUser });
});

export default userRouter;
