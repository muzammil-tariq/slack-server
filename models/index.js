import { Sequelize } from "sequelize";
import applyExtraSetup from "./model_associations";
import User from "./user";
import Message from "./message";
import Team from "./team";
import Channel from "./channel";
import Channel_member from "./channel_member";
import Member from "./member";
import DirectMessage from "./directMessage";

const sequelize = new Sequelize(
  process.env.TEST_DB || "slack",
  "postgres",
  "postgres",
  {
    dialect: "postgres",
    // operatorsAliases: Sequelize.Op,
    define: {
      underscored: true,
    },
  }
);

const modelDefiners = [
  User,
  Message,
  Team,
  Channel,
  Member,
  Channel_member,
  DirectMessage,
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
export default sequelize;
