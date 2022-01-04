/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { NextApiRequest, NextApiResponse } from 'next';

import { getTodoList } from '../../../data/mock';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case 'GET': {
            const todos = getTodoList(5);
            res.status(200).json(todos.items);
            break;
        }
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
