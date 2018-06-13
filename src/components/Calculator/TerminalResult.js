import store from "../store/Store"

const terminals = [
  "Terminal1",
  "Terminal2",
  "Terminal3",
];

const sumTotal = (sum, next) => sum + next;

const getTotalTerminal = () =>
  terminals
    .map(terminal => store[terminal])
    .reduce(sumTotal)


export default getTotalTerminal;