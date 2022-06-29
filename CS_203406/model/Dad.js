import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { getson } from "./son.js";
import bcrypt from "bcrypt";

const dad = getData.sequelizeClient.define('cat_dad', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ap_paternal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ap_maternal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
);

dad.hasMany(getson,{foreingKey:'catDadId'});
getson.belongsTo(dad);


export const getDad = dad;