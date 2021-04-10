import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class HomeController {
  async index(req, res) {
    const { email } = req.query;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'Usuário inexistente',
      });
    }

    return res.json(user);
  }

  async createUser(req, res) {
    try {
      const {
        email,
        nome,
        idade,
        password,
        acesso,
      } = req.body;

      const userEmail = await User.findOne({ email });
      if (userEmail) {
        return res.status(400).json({
          message: 'Email já cadastrado!',
        });
      }

      const newUser = await User.create({
        email,
        nome,
        idade,
        password,
        acesso,
      });

      newUser.password = undefined;

      const token = jwt.sign({ id: newUser.id }, process.env.DATABASE_SECRET_KEY, {
        expiresIn: 86400,
      });

      return res.send({ newUser, token });
    } catch (error) {
      return res.status(400).send({ error: 'Register failed' });
    }
  }

  async autencicate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'Usuário inexistente',
      });
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({
        message: 'Senha Inválida',
      });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, process.env.DATABASE_SECRET_KEY, {
      expiresIn: 86400,
    });

    return res.send({ user, token });
  }
}

export default new HomeController();
