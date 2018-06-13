import { Listenable } from 'pockito';

const TerminalStore = new Listenable({
  initialState: {
    1: null,
    2: null,
    3: null,
  }
});

export default TerminalStore;