import React from 'react';
import { connect } from 'react-redux';

const Toggle = props => (
  <div>
    {
      props.messageVisibility &&
      <p>You will see this if it's toggled</p>
    }
    <button onClick={() => props.dispatch({ type: 'TOGGLE_MESSAGE' })}>
        Toggle Me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);
