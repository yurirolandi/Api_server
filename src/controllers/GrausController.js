import GrausColunas from '../models/GrausColunas';


class GrausController {
  async index(req, res) {
    const graus = await GrausColunas.find();
    if (!graus) {
      return res.status(404).json({
        message: 'Não conseguimos encontrar o grau!',
      });
    }

    return res.json(graus)
  }

  async create(req, res) {
    try {
      const {
        title,
        grau3,
        grau2,
        grau1,
        subtitle,
        color,
        backgroundColor,
      } = req.body;

      const graus = await GrausColunas.findOne({ title });

      if (graus) {
        return res.status(400).json({
          message: 'Coluna já cadastrada!',
        });
      }

      const newColluns = await GrausColunas.create(
        {
          title,
          grau3,
          grau2,
          grau1,
          subtitle,
          color,
          backgroundColor
        }
      );

      return res.send(newColluns)
    } catch (error) {
      return res.status(400).send({ error: 'Register Collums failed' });
    }
  }
}

export default new GrausController();