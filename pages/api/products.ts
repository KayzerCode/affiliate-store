import { NextApiRequest, NextApiResponse } from "next";
import productsData from "@/products/products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(productsData);
}
