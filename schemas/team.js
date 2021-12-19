export default `
type Team{
  owner:User!
  members:[User!]!
  public:Boolean!
  channels:[Channel!]!
}
`;
