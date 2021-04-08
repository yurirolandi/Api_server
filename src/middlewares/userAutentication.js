import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Não autorizado!' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401).send({ message: 'Token error!' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Token mal formatado!' });
  }

  return jwt.verify(token, process.env.DATABASE_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Token inválido!' });
    }

    req.userId = decoded.id;
    return next();
  });
};
