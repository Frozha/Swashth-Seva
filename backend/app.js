import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';  // Import fileURLToPath
import path from 'path';

const __filename = fileURLToPath(import.meta.url);  // Convert import.meta.url to file path
const __dirname = path.dirname(__filename);  // Get the directory name

import { limit } from './constants.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(bodyParser.json());

app.use(express.json({
    limit: `${limit}`
}));

app.use(express.urlencoded({
    limit: `${limit}`,
    extended: true
}));

app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public')));

import userRoutes from './routes/user.routes.js';
app.use("/api/v1/users", userRoutes);

export { app };