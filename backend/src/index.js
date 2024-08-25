import connectDB from '../config/dbconnect.js';
import { app } from './server.js';
const port = process.env.PORT || 5000;


connectDB()
    .then(() => {
        app.listen(port, () =>
            console.log(`Running fine at port ${port}`)
        )
    })
    .catch((err) => console.log("MongoDB connection failed::", err.message))
