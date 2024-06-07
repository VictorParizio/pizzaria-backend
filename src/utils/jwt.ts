import jwt from "jsonwebtoken";

const generateToken = (data: object, validity: string) => {
  return jwt.sign(data, process.env.PASSWORD_JWT || "", {
    expiresIn: validity,
  });
};

const checkToken = (token: string) => {
  return jwt.verify(token, process.env.PASSWORD_JWT || "");
};

export { generateToken, checkToken };
