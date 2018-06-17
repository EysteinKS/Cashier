import { Listenable } from 'pockito';

const Store = new Listenable({
  initialState: {
    1000: "",
    500: "",
    200: "",
    100: "",
    50: "",
    20: "",
    10: "",
    5: "",
    1: "",
    totalincome: "",
    registerstart: "",
  }
});

export default Store;

/*
(I storen)
const Store = new Listenable({
  initialState: {
    money: {
      1000: 0,
      500: 0,
      200: 0,
      100: 0,
      50: 0,
      20: 0,
      10: 0,
      5: 0,
      1: 0,
    }
  }
});

(I en annen component)
store.set({
  money: {
    ...store.money,
    [currency]: 1337
  }
});
*/