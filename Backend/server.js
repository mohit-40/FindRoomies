const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500||process.env.PORT;

const users = [{}];

// CORS for communication b/w urls
app.use(cors());
app.get("/message", (req, res) => {
    res.send("Hell Working");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("New Connection...");

    socket.on("joined", ({username}) => {
        users[socket.id] = username;
        console.log(`${username} has joined!`)
        socket.broadcast.emit("userJoined", {
            user: "Admin",
            message: ` ${users[socket.id]} has joined`,
        });
        socket.emit("welcome", {
            user: "Admin",
            message: `Welcome to the chat,${users[socket.id]} `,
        });
    });

    socket.on("message", ({ message, id }) => {
        io.emit("sendMessage", { user: users[id], message, id });
    });
    
    socket.on("Disconnect", () => {
        console.log(`user left`);
        socket.broadcast.emit("leave", {
            user: "Admin",
            message: `${users[socket.id]}  has left the chat`,
        });
    });
});




server.listen(port, () => {
    console.log(`Server Listning at http://localhost:4500`);
});
