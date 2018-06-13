import { Listenable } from 'pockito';

const Store = new Listenable({
  initialState: {
    1000: null,
    500: null,
    200: null,
    100: null,
    50: null,
    20: null,
    10: null,
    5: null,
    1: null,
    totalincome: null,
    registerstart: null,
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