// A stand-in for a WebSocket that pushes a new price on a fixed interval.
// It exposes just the parts of the real API we use — `onmessage` and `close()` —
// so a component written against this works unchanged against a real socket.

export function createMockSocket({ intervalMs = 100, startPrice = 100 } = {}) {
  let price = startPrice

  const socket = {
    onmessage: null,
    close: () => clearInterval(timer),
  }

  const timer = setInterval(() => {
    // random walk, so the number moves in a believable way instead of jumping
    price = Math.max(1, price + (Math.random() - 0.5) * 2)

    // real sockets deliver a string in event.data, so this does too
    socket.onmessage?.({
      data: JSON.stringify({
        symbol: "ACME",
        price: Number(price.toFixed(2)),
        at: Date.now(),
      }),
    })
  }, intervalMs)

  return socket
}
