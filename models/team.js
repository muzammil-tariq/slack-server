import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Team",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
    },
  );
};
