import { useContext } from "react";
import { BankContext } from "../context/bankContext";

export const useBank = () => useContext(BankContext)