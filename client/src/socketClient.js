import socketIOClient from "socket.io-client";
var hostEndpoint = `http://${process.env.REACT_APP_URL}`;

const socketClient = socketIOClient(hostEndpoint);

export default socketClient;
