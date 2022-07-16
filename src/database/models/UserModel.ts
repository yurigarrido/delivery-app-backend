import { Model, DataTypes } from "sequelize";
import db from "../db";

class User extends Model {
  public id: number;

  public name: string;

  public email: string;

  public password: string;

  public role: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    underscored: true,
    sequelize: db,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

export default User;
