import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

const duck = {
  name: 'movie',
  actions,
  selectors,
  reducer,
};

export default duck;
