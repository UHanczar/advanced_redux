import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const userSelector = (id) => createSelector(
  state => state.get('userInfo'),
  userInfo => {
    const user = userInfo.find(user => user.get('id') === id);

    if (user) {
      return user;
    } else {
      return fromJS({
        name: '[...]',
        id,
        fetchedStatus: 'NOT_FETCHED'
      });
    }
  }
);
