import { DataTypes } from 'sequelize';

export default (sequelize) => {
	sequelize.define('Member', {
    admin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
		userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
		},
		teamId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id'
      }
    }
  }
  );
};