/*

TCP connection server use tenet client from windows 
Use Telenet as client :-> telnet 127.0.0.1 8080
Use Debuger
TCP is statefull

*/

// const net = require('net');
// const server = net.createServer(socket => {
//     socket.write("Hello")
//     socket.on("data", data => {
//         console.log(data.toString());
//     })
// })

// server.listen(8080)


const dgram = require('dgram');
const socket = dgram.createSocket('udp4')

socket.on('message', (msg, rinfo) => {
    console.log(`server got : ${msg} from ${rinfo.address}:${rinfo.port}`);
})

socket.bind(8081)