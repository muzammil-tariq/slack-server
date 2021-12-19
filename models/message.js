import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Message",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      channelId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'channels',
          key: 'id'
        }
      }
    }
  );
};
