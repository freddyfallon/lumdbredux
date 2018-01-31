import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {
      messageVisibility &&
      <p>You will see this if it is toggled</p>
    }
    <button onClick={toggleMessage}>
        Toggle Me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
  movies: state.movies.movies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
}, dispatch);

Toggle.propTypes = {
  toggleMessage: PropTypes.func.isRequired,
  messageVisibility: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
