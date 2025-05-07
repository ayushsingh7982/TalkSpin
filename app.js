// server.js
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const port = 4000;

// Create HTTP server
const server = http.createServer(app);

// Initialize socket.io
const io = socketIO(server);

// View engine
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/chat",(req,res)=>{
    res.render("chat");
})

// Socket.IO logic
io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

// Start server
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
