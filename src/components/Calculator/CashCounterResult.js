import store from "../store/Store"

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

const sumTotal = (sum, next) => sum + next;

const getTotalAmount = () =>
  currencies
    .map(currency => store[currency] * currency)
    .reduce(sumTotal, 0)


export default getTotalAmount;