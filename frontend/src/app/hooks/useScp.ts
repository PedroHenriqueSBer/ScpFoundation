import { useContext } from "react";
import { ScpContext } from "../context/scpContext";

export const useScp = () => useContext(ScpContext)