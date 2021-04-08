import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ message: 'Não autorizado!' });
  }

  if (authorization === 'Basic Og==') {
    return res.status(401).send({ message: 'Não autorizado!' });
  }

  console.log('authorization', authorization);

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.DATABASE_SECRET_KEY);
    console.log('dados', dados.id);
    const { id } = dados;

    console.log('req', req);
    req.userId = id;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido'
    })
  }

  ;
};
