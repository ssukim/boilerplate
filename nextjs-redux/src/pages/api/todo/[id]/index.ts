import type { NextApiRequest, NextApiResponse } from "next";
import { TodoState } from "../../../../components/todo/todoSlice";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id } = req.query
  
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const mockData = {
    id,
    title: "hello",
    contents: "helloWorld",
  };

  switch (method) {
    case "GET": {
      res.status(200).json(mockData);
    }
  }
}
