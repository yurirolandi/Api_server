import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.DATABASE_PORT;

app.listen(port);
