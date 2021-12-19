import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Channel", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      public : {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      teamId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        }
      }
    }
  );
};
