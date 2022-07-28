import { rest } from "msw";
import bcrypt from "bcryptjs";
import getConfig from "next/config";
import jwt from "jsonwebtoken";
import { usersRepo } from "../helpers/api/users-repo";

const todos = Array.from({ length: 10 })
  .map((_, index) => ({
    id: index,
    title: `Log ${index}`,
  }))
  .reverse();

const { publicRuntimeConfig } = getConfig();

export const handlers = [
  rest.post("https://development/api/auth/login", (req, res, ctx) => {
    const { username, password } = req.body;
    const user = usersRepo.find((u) => u.username === username);

    // validate
    if (!(user && bcrypt.compareSync(password, user.hash))) {
      throw "Username or password is incorrect";
    }

    const token = jwt.sign(
      { sub: user.username },
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
      {
        expiresIn: "7d",
      }
    );

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        username,
        token,
      })
    );
  }),
  rest.post("https://development/api/auth/register", (req, res, ctx) => {
    // validate
    const { password, username } = req.body;
    if (usersRepo.find((x) => x.username === username))
      throw `User with the username "${username}" already exists`;

    const user = {
      username,
      hash: bcrypt.hashSync(password, 10),
    };

    usersRepo.create(user);

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("https://development/api/todos", (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.get("https://development/api/todos/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    return res(
      ctx.json({
        id: postId,
      })
    );
  }),
  rest.post("https://development/api/todos", async (req, res, ctx) => {
    todos.push(req.body);

    // loading delay test
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res(ctx.status(201));
  }),
];
