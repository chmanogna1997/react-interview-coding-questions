import { useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionContext from "./AccordionContext";

// FAQ accordion using Context API to avoid prop drilling
const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is Context?",
    answer: "Context allows components to share data without prop drilling.",
  },
  {
    id: 3,
    question: "What is useState?",
    answer: "useState is a React hook used to manage component state.",
  },
];

// Parent component that provides state to all accordion items via Context
function Accordion() {
  // Track which accordion item is open (by id)
  const [open, setOpen] = useState(0);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            // Share open state with all items via Context (no prop drilling needed)
            <AccordionContext.Provider
              key={item.id}
              value={{ open, setOpen }}
            >
              <AccordionItem item={item} />
            </AccordionContext.Provider>
          );
        })}
    </div>
  );
}

export default Accordion