import bcrypt from "bcrypt";

const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export { encryptPassword, comparePassword };
