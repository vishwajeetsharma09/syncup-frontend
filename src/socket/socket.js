import { io } from "socket.io-client";

// const socket = io("http://localhost:5000", {
//   transports: ["websocket", "polling"],
//   autoConnect: true,
//   reconnection: true,
// });

const socket = io(
    "https://syncup-backend-4fxf.onrender.com/",
    {
      transports: ["websocket", "polling"],
      autoConnect: true,
      reconnection: true,
    }
  );
export default socket;