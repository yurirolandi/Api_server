import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  nome: {
    type: String,
    require: true,
    unique: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  idade: {
    type: Number,
    require: false,
    unique: false,
  },
  password: {
    type: String,
    require: true,
    unique: false,
  },

}, { timestamps: true });

// eslint-disable-next-line func-names
UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

export default model('User', UserSchema);
