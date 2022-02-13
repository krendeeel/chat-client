import * as io from 'socket.io-client';
const socketUrl = 'https://reactappchat-server.herokuapp.com';
const socket = io.connect(socketUrl);
export default socket;
