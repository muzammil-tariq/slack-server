export default `
type User{
  id:Int!
  email:String!
  username:String!
  teams:[Team!]!
}
type RegisterResponse {
  ok: Boolean!
  user: User
  errors: [Error!]
}
type Query {
  me: User!
  allUsers: [User!]!
  getUser(userId: Int!): User
}
type Mutation {
  register(username: String!, email: String!, password: String!):RegisterResponse
}
`;
