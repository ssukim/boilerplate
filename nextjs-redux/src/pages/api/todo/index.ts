// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const setTodoMockArr = () => {
  const mockArr: any[] = [];

  for (let i = 0; i <= 10; i++) {
    mockArr.push({
      id: `${i}`,
      title: `mockData_${i}`,
    });
  }

  return mockArr;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  // console.log(req.body);
  // loading delay test
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  switch (method) {
    case "GET": {
      res.status(200).json(setTodoMockArr());
    }
    case "POST": {
      res.status(200).json(req.body);
    }
  }
}
