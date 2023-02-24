import { createContext } from "react";

export const authContext = createContext<string | undefined | null>(null);
