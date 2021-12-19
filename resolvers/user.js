import formatErrors from "../formatErrors";
export default {
  Query: {
    getUser: (parent, { userId }, { models }, info) =>
      models.User.findOne({ where: { id: userId } }),
    allUsers: (parent, args, { models }, info) => models.User.findAll(),
  },
  Mutation: {
    register: async (parent, args, { models }) => {
      debugger;
      try {
        const user = await models.User.create(args);
        return {
          ok: true,
          user,
        };
      } catch (err) {
        debugger;
        return {
          ok: false,
          errors: formatErrors(err),
        };
      }
    },
  },
};
