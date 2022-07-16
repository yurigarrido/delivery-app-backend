import { DataTypes, Model } from "sequelize";
import db from "../db";
import User from "./UserModel";

class Sale extends Model {
  public id: number;
  public userId: number;
  public sellerId: number;
  public totalPrice: number;
  public deliveryAddress: string;
  public deliveryNumber: string;
  public saleDate: string;
  public status: string;
}

  Sale.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      // foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL(6, 2),
    },
    deliveryAddress: {
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    status: DataTypes.STRING,
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Sales',
    tableName: 'sales',
    timestamps: false,
  })



  Sale.belongsTo(User, {
    foreignKey: 'userId',
    // otherKey: 'id',
    as: 'user',
  });

  Sale.belongsTo(User, {
    foreignKey: 'sellerId',
    // otherKey: 'id',
    as: 'seller',
  });

  export default Sale;
