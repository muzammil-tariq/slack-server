function applyExtraSetup(sequelize) {
  const {
    User,
    Team,
    Message,
    Channel,
    Member,
    Channel_member,
    DirectMessage,
  } = sequelize.models;

  User.belongsToMany(Team, {
    through: Member,
    foreignKey: "userId",
  });
  Team.belongsToMany(User, {
    through: Member,
    foreignKey: "teamId",
  });
  // There is a little problem in DB models,
  // I am getting user_id in teams, but it shouldn't be there.
  User.belongsToMany(Channel, {
    through: Channel_member,
    foreignKey: "userId",
  });
  Channel.belongsToMany(User, {
    through: Channel_member,
    foreignKey: "channelId",
  });
  Message.belongsTo(Channel, {
    foreignKey: "channelId",
  });
  Message.belongsTo(User);
  Channel.belongsTo(Team);
  DirectMessage.belongsTo(User, {
    foreignKey: "senderId",
  });
  DirectMessage.belongsTo(User, {
    foreignKey: "receiverId",
  });
  DirectMessage.belongsTo(Team);
}

export default applyExtraSetup;
