import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { video } from './video.reducer';
import { playlist } from './playlist.reducer';
import { comment } from './comment.reducer';
import { search } from './search.reducer';
import { user } from "./user.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  video,
  playlist,
  alert,
  comment,
  search,
  user
});

export default rootReducer;