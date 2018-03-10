import { makeActionCreator } from './../utility/makeActionCreator';

export const SET_CHANNEL_INFO = 'SET_CHANNEL_INFO';
export const setChannelInfo = makeActionCreator(SET_CHANNEL_INFO, 'channel');
