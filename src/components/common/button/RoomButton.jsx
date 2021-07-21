import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function RoomButton(props) {
  const { children } = props;
  return (
    <button type="button" className="roomButton">
      {children}
    </button>
  );
}

RoomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoomButton;
