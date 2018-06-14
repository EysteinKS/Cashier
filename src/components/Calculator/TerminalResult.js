import store from "../store/TerminalStore"

const terminals = [
  1,
  2,
  3,
];

const sumTotal = (sum, next) => sum + next;

const getTotalTerminal = () =>
  terminals
    .map(terminal => store[terminal] * 1)
    .reduce(sumTotal, 0)


export default getTotalTerminal;