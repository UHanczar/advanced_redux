import { connect } from 'react-redux';

import { CurrentUser } from './CurrentUser';
import { updateStatus } from './../../actions';

const mapStateToProps = (state) => {
  const currentUser = state.get('currentUser');

  return {
    name: currentUser.get('name'),
    status: currentUser.get('status'),
    id: currentUser.get('id')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStatus: ({ target: { value } }) => {
      dispatch(updateStatus(value));
    }
  };
};

export const CurrentUserContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
