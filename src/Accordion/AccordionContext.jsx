import { createContext } from "react";

// Context to share accordion state (open/setOpen) without prop drilling
// Holds: { open: number, setOpen: function }
const AccordionContext = createContext(null);

export default AccordionContext;