import { DataTypes } from 'sequelize';

export default (sequelize) => {
	sequelize.define('Channel_member', {
		userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
		},
		channelId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.model.Channel,
        key: 'id'
      }
    }
  }
  );
};