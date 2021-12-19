import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("DirectMessage", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    teamId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "teams",
        key: "id",
      },
    },
    senderId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    receiverId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  });
};
