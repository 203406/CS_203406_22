/*import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { getdad } from "../model/dad.js";
import bcrypt from "bcrypt";

const login = getData.sequelizeClient.define(
  "login",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "login",
    freezeTableName: true,
    hooks: {
      beforeCreate: (login, options) => {
        {
          login.password =
            login.password && login.password != ""
              ? bcrypt.hashSync(login.password, 10)
              : "";
        }
      },
    },
  }
);

login.hasMany(getdad, {
  foreignKey: "id_login",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export const getlogin = login;*/
