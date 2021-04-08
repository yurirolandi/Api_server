
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');
class FotoController {
   store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: [err.code],
        })
      }

      const foto = await Foto.create({
        originalName,
        fileName
      });



     return res.json(req.file)
    })
  }
}

export default new FotoController();