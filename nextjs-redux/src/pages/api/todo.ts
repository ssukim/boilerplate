// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import _uniqueId from "lodash/uniqueId";
import { TodoState } from "../../components/todo/todoSlice";

const setTodoMockArr = () => {
  const mockArr: TodoState[] = [];

  for (let i = 0; i <= 10; i++) {
    mockArr.push({
      id: _uniqueId(),
      title: `mockData_${i}`,
    });
  }

  return mockArr;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoState[]>
) {
  const { method } = req;

  switch (method) {
    case "GET": {
      res.status(200).json(setTodoMockArr());
    }
  }
}
