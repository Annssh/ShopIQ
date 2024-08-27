import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser'

dotenv.config({ path: ".env" });
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentaials: true
}));

// Earlier you have to use body parser for accepting json
app.use(express.json());

app.use(express.urlencoded({
    extended: true // for using objects under objects
}))

// Set up a cookie-parser
app.use(cookieParser());

app.use(helmet());

app.get('/', (req, res) => {
    res.send("ShopIQ API is running...");
});

export { app };
