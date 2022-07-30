import { Request, Response } from'express';
import Product from '../database/models/ProductsModel';
import ProductsService from '../services/ProductsService';


class ProductsController {

  public  create = async (req: Request, res: Response) => {
    const {name, price, urlImage } = req.body;
    
    const product = await ProductsService.create({name, price, urlImage});
    if(!product) {
      return res.status(400).json({ message: "product already exists"})
    }
    return res.status(201).json(product)
  }

  public  getAll = async (req: Request, res: Response) => {
    const products = await ProductsService.findAll()
    return res.status(200).json(products)
  }
}

export default new ProductsController();