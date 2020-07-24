import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { video } from './video.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  video,
  alert
});

export default rootReducer;