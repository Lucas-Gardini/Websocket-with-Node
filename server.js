const WebSocket = require("ws");

const server = new WebSocket.Server({
	port: 8080,
});

let sockets = [];

server.on("connection", (socket) => {
	console.log("Socket Connected");
	sockets.push(socket);

	socket.on("message", (msg) => {
		console.log("Message Received");
		sockets.forEach((s) => s.send(msg));
	});

	socket.on("close", () => {
		console.log("Socket Closed");
		sockets = sockets.filter((socketFromArray) => socket !== socketFromArray);
	});
});
