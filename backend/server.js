const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = 3000;
const cors = require("cors")


// Connexion à la db
connectDB();

const app = express();

//Auhtorisation CORS
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
})
) 


// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/post", require("./routes/post.routes"));


// Lancer le server
app.listen(port, () => console.log("Le serveur a démarré au port " + port));

