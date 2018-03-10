import { makeActionCreator } from '../utility/makeActionCreator';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const receiveMessage = makeActionCreator(RECEIVE_MESSAGE, 'message');
