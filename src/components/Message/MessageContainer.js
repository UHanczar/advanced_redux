import { connect } from 'react-redux';

import { Message } from './Message';

import { userSelector } from './../../selectors'

const mapStateToProps = (state, { message }) => {
  const owner = userSelector(message.get('owner'))(state);
  const ownerName = owner.get('fetchStatus').includes('FETCHED') ? owner.get('name') : '[...]';
  return {
    text: message.get('content').get('text'),
    owner: {
      name: ownerName
    }
  };
};

const mapDispatchToProps = dispatch => ({});

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(
  Message
);
