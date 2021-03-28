import User from '../models/User';

class HomeController {
  async index(req, res) {
    const { email } = req.body;
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
      });

      newUser.password = undefined;

      return res.send(newUser);
    } catch (error) {
      console.log('error => ', error);
      return res.status(400).send({ error: 'Register failed' });
    }
  }
}

export default new HomeController();
