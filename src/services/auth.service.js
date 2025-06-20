import prisma from "../common/prisma/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "your_jwt_secret";

const signup = async (data) => {
  const { email, pass_word, name, phone, birth_day, gender, role } = data;

  const existingUser = await prisma.nguoiDung.findUnique({ where: { email } });
  if (existingUser) throw new Error("Email already in use");

  const hashedPassword = await bcrypt.hash(pass_word, 10);

  const newUser = await prisma.nguoiDung.create({
    data: {
      email,
      pass_word: hashedPassword,
      name,
      phone,
      birth_day,
      gender,
      role: role || "USER",
    },
  });

  return {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  };
};

const signin = async ({ email, pass_word }) => {
  const user = await prisma.nguoiDung.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(pass_word, user.pass_word);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export default {
  signup,
  signin,
};
