import { makeActionCreator } from '../utility/makeActionCreator';

export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';
export const setActiveChannel = makeActionCreator(SET_ACTIVE_CHANNEL, 'id');
