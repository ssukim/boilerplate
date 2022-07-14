import { rest } from "msw";

const todos = Array.from({ length: 10 })
  .map((_, index) => ({
    id: index,
    title: `Log ${index}`,
  }))
  .reverse();

export const handlers = [
  rest.get("https://development/api/posts", (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.get("https://development/api/posts/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    return res(
      ctx.json({
        id: postId,
      })
    );
  }),
  rest.post("https://development/api/posts", async (req, res, ctx) => {
    todos.push(req.body);

    // loading delay test
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res(ctx.status(201));
  }),
];
