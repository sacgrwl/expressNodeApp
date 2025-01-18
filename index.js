const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require(http);
const server = http.createServer(app);

app.use(cors({origin:[" "], methods: ["GET", "POST"]}));
app.use(express.json()); 

app.get('/', (req, res)=> {
    res.send("server is running")
});

// connection to MongDB
mongoose
.connect("mongodb+srv://saacgirwel21:saacgirwel21@cluster0.czxmp.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if the database connection fails 
});

// Root route
app.get('/', (req, res) => {
    res.send("Server is running");
});

//Middleware
app.use(cors());
app.use(express.json());

// Import API folder
const submitTalentForm = require('./API/submit')

//API
app.use("/submit", submitWorkoutTracker);

// Start the server

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})