import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  originalName: {
    type: String,
    unique: false,
  },
  fileName: {
    type: String,
  },

}, { timestamps: true });

export default model('Foto', UserSchema);