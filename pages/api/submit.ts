import type { NextApiRequest, NextApiResponse } from "next";

// Define data name and type
type Data = {
  email: string;
  password: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let data = req.body;
  // Respond with user data
  res.status(200).json({ email: data.email, password: data.password });
}
