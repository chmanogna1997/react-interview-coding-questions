import { useEffect, useState, useRef } from "react";
import { createMockSocket } from "./mockSocket";

// Demonstrates the throttle pattern: updates arrive frequently from a socket,
// but are only rendered to the UI on a fixed schedule (once per second).
function Throttle() {
  const [price, setPrice] = useState(0);
  const received = useRef(0);

  useEffect(() => {
    // Create a mock socket that sends price updates every 100ms
    const socket = createMockSocket({ intervalMs: 100 });

    // Capture incoming prices in a ref (frequent updates, not rendered yet)
    socket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      received.current = payload.price;
    };

    // Throttle the display: read the latest price and update state only once per second
    const timer = setInterval(() => {
      setPrice(received.current);
    }, 1000);

    // Cleanup: close the socket and clear the timer
    return () => {
      socket.close();
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Testing live messages and applying throttle</h1>
      <p>Price is :: {price}</p>
    </div>
  );
}

export default Throttle;

  