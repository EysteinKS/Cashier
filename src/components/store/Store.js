import { Listenable } from 'pockito';

export const Store = new Listenable({
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

export const TerminalStore = new Listenable({
  initialState: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  }
});

export const TipsStore = new Listenable({
  initialState: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  }
});

export const ProfileStore = new Listenable({
  initialState: {
    "name": "",
    "employeeID": "",
    "workplace": "",
  }
});

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