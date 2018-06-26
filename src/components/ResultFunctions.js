import { TipsStore, TerminalStore, Store } from "./store/Store"

const sumTotal = (sum, next) => sum + next;

/* Terminal Total */
const terminals = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

export const getTotalTerminal = () =>
  terminals
    .map(terminal => Number(TerminalStore[terminal]))
    .reduce(sumTotal, 0)

export const getTotalTips = () =>
  terminals
    .map(terminal => Number(TipsStore[terminal]))
    .reduce(sumTotal, 0)


/* Counter Total */

const currencies = [
  1000,
  500,
  200,
  100,
  50,
  20,
  10,
  5,
  1,
];

export const getTotalAmount = () =>
  currencies
    .map(currency => Store[currency] * currency)
    .reduce(sumTotal, 0)


export const getCounterTotal = () => getTotalAmount() - Store["registerstart"]

export const getDifference = () => Store["totalincome"] - (getCounterTotal() + getTotalTerminal())