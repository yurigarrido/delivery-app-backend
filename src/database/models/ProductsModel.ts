import { DataTypes, Model } from "sequelize";
import db from "../db";

class Product extends Model {
  public id: number;
  public name: string;
  public price: number;
  public urlImage: string;

}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
    tableName: 'products',
    modelName: 'Product',
    underscored: true,
  },
);

const  initialize = async () => {
  await Product.sync();
}

initialize();

export default Product;