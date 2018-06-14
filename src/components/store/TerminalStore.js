import { Listenable } from 'pockito';

const TerminalStore = new Listenable({
  initialState: {
    1: "",
    2: "",
    3: "",
  }
});

export default TerminalStore;