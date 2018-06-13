import { Listenable } from 'pockito';

const Store = new Listenable({
  initialState: {
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
});

export default Store;