// https://www.tutorialspoint.com/websockets/websockets_events_actions.htm

let s1 = new WebSocket("ws://echo.websocket.org");

/*
Websocket events
  + open
  + message
  + close
  + error
*/

s1.send("LOL");
if (socket.readyState === WebSocket.OPEN)
{
  socket.close( );
}

// or
// socket.close(1000,”Deliberate Connection”);