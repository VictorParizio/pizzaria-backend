import { Request, Response } from "express";
import { addData, getData } from "../repositories/queries";
import { comparePassword, encryptPassword } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";

const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const foundEmail = await getData("users", { email });

    if (foundEmail) {
      return res
        .status(409)
        .json({ message: "Usuário ou Email já Cadastrado" });
    }

    const encryptedPassword = await encryptPassword(password.toString());
    const newUser = { name, email, password: encryptedPassword };
    const [registererUser] = await addData("users", newUser);
    delete registererUser.password;

    const access_token = generateToken(
      { user_id: registererUser.user_id },
      "8h"
    );

    return res.status(201).json({
      registererUser,
      access_token,
      message: "Usuário cadastrado com sucesso",
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await getData("users", { email });

    if (!user) {
      return res.status(401).json({ message: "Email e/ou Senha inválido(s)" });
    }

    const validPassword = await comparePassword(
      password.toString(),
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Email e/ou Senha inválido(s)" });
    }

    const access_token = generateToken({ id: user.user_id }, "8h");
    delete user.password;

    return res.status(200).json({ user, access_token });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export { registerUser, loginUser };
