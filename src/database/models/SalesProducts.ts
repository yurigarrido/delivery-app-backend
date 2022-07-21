import { DataTypes, Model } from "sequelize";
import db from "../db";
import Product from "./ProductsModel";
import Sale from "./SalesModel";

class SaleProduct extends Model {
  public saleId: number;
  public productId: number;
  public quantity: number;
}

SaleProduct.init({
  saleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    // foreignKey: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: 'Sale',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    // foreignKey: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: 'Product',
      key: 'id',
    },
  },
  quantity: DataTypes.INTEGER,
},
{
  underscored: true,
  sequelize: db,
  modelName: 'SaleProduct',
  tableName: 'sales_products',
  timestamps: false,
},
)



  Sale.belongsToMany(Product, {
    foreignKey: 'saleId',
    otherKey: 'productId',
    as: 'products',
    through: SaleProduct,
  });

  Product.belongsToMany(Sale, {
    foreignKey: 'productId',
    otherKey: 'saleId',
    as: 'sales',
    through: SaleProduct,
  });

export default SaleProduct