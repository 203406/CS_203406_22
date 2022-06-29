import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const son = getData.sequelizeClient.define('cat_sons', {
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
    validate: {
      notEmpty: true
  }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_dad:{
    allowNull:false,
    type:DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
}
},

);

export const getson = son;