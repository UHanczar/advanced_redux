import { makeActionCreator } from '../utility/makeActionCreator';

export const REQUEST_CREATE_CHANNEL = 'REQUEST_CREATE_CHANNEL';
export const requestCreateChannel = makeActionCreator(REQUEST_CREATE_CHANNEL, 'channelID', 'contactID', 'ownID', 'channelName');
