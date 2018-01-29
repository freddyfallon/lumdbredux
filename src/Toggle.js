import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleMessage } from './actions';

const Toggle = props => (
  <div>
    {
      props.messageVisibility &&
      <p>You will see this if it's toggled</p>
    }
    <button onClick={() => props.dispatch(toggleMessage())}>
        Toggle Me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

Toggle.propTypes = {
  messageVisibility: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Toggle);
