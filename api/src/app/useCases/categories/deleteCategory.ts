import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {

  try {
    const {catedoryId} = req.params;
    
    const categories = await Category.findByIdAndDelete(catedoryId);

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}