import { Schema, model } from 'mongoose';

const ColunasGraus = new Schema(
  {
    "title": String,
    "grau3": String,
    "grau2": String,
    "grau1": String,
    "subtitle": String,
    "color": String,
    "backgroundColor": String
  }
);

export default model('Graus', ColunasGraus);
