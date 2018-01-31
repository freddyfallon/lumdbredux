import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { toggleMessage } from './actions';
import { getMovies } from '../movies/actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {
      messageVisibility &&
      <p>You will see this if it is toggled</p>
    }
    <button onClick={toggleMessage}>
        Toggle Me
    </button>
    <button onClick={getMovies}>
        Load movies
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
  movies: state.movies.movies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  getMovies,
}, dispatch);

Toggle.propTypes = {
  toggleMessage: PropTypes.func.isRequired,
  messageVisibility: PropTypes.bool.isRequired,
  getMovies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
