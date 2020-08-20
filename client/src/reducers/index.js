import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { video } from './video.reducer';
import { playlist } from './playlist.reducer';
import {comment} from './comment.reducer';
import {mainPlaylist} from './main.playlist.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  video,
  playlist,
  alert,
  comment,
  mainPlaylist
});

export default rootReducer;