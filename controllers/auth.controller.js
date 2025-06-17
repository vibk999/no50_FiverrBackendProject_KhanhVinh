import AuthService from "../services/auth.service.js";

export const signup = async (req, res) => {
  try {
    const user = await AuthService.signup(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const token = await AuthService.signin(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
