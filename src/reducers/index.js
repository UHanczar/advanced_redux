import { combineReducers } from './../utility/';
import { currentUser } from './currentUser';
import { channels } from './channels'
import { activeChannel } from './activeChannel'
import { userInfo } from './userInfo';

export const reducer = combineReducers({
  currentUser,
  channels,
  activeChannel,
  userInfo
});
