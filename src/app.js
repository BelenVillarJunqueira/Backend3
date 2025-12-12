import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import __dirname from "./utils/index.js";
import { createAdminUser } from "./config/createAdminUser.js";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';


import mocksRouter from "./routes/mocks.router.js";
import { addLogger } from "./middlewares/logger.middleware.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://BelenVillar:codercoder@belenvillar.ttbwsou.mongodb.net/adoptme?retryWrites=true&w=majority';



app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(addLogger);


app.use('/public', express.static(`${__dirname}/../public`));


app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);


app.use("/api/mocks", mocksRouter);
app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('✔ Connected to MongoDB');
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
createAdminUser();
start();
