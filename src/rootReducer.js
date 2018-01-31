import { combineReducers } from 'redux';

import movies from './movies/reducer';
import toggle from './toggle/reducer';

const rootReducer = combineReducers({
  movies, toggle,
});

export default rootReducer;
