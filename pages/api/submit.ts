import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from 'next/navigation';

type Data = {
  email: string;
  password: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let data = req.body;
  res.status(200).json({ email: data.email, password: data.password });
}
