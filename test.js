const extractUsernameAndPassword = () => {
  const string = "postgres://username:password@hostname:port/databasename";
  const usernameAndPassword = string.split("@")[0].split("postgres://")[1];
  const username = usernameAndPassword.split(":")[0];
  const password = usernameAndPassword.split(":")[1];
  return { username, password };
};
