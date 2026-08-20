import { useContext } from "react";
import AccordionContext from "./AccordionContext";

// Individual accordion item that consumes context to manage open/close state
function AccordionItem({ item }) {
  // Get open state and setter from context (avoiding prop drilling)
  const { open, setOpen } = useContext(AccordionContext);

  return (
    <div>
      {/* Click to toggle this item's answer */}
      <button onClick={() => setOpen(item.id)}>
        Question: {item.question}
      </button>
      {/* Show answer only when this item is open */}
      {open === item.id && <p>Answer: {item.answer}</p>}
    </div>
  );
}

export default AccordionItem;