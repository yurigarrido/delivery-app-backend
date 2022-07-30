import Product from "../database/models/ProductsModel";
import IProduct from "../interfaces/Product";

class ProductsService {
  async findAll() {
    const products = await Product.findAll();
    return products;
  }

  async create(payload: any) {
    const newProduct = await Product.create(payload);
    return newProduct;
  }
}

export default new ProductsService();