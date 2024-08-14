const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const connectToMongoDB = require('./db/connectToMongoDb');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});