const express=require("express");
const socket=require("socket.io");
const http=require("http");
const path=require("path");

const app=express();
const port=4000;

const server = http.createServer(app);
const io = socket(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.render("home");
    // res.send("Working");
});

app.get("/chat",(req,res)=>{
    res.render("chat")
})

server.listen(port,()=>{
    console.log(`App is running on ${port}`);
})