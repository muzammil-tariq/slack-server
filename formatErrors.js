import _ from "lodash";
import { ValidationError } from "sequelize";

export default (e) => {
  if (e instanceof ValidationError) {
    const errors = e.errors.map((x) => _.pick(x, ["message", "path"]));
    return errors;
  }
  return [{ path: "name", message: "something went wrong" }];
};
