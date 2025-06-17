import prisma from "../common/prisma/prismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "your_jwt_secret";

const signup = async (data) => {
  const { email, pass_word } = data;
  const existingUser = await prisma.nguoiDung.findUnique({ where: { email } });
  if (existingUser) throw new Error("Email already in use");

  const hashedPassword = await bcrypt.hash(pass_word, 10);
  return await prisma.nguoiDung.create({
    data: {
      ...data,
      pass_word: hashedPassword,
    },
  });
};

const signin = async ({ email, pass_word }) => {
  const user = await prisma.nguoiDung.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(pass_word, user.pass_word);
  if (!isMatch) throw new Error("Invalid email or password");

  return jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1d" });
};

export default {
  signup,
  signin,
};
