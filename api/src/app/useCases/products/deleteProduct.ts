import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {

  try {
    const {productId} = req.params;

    const categories = await Product.findByIdAndDelete(productId);

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}