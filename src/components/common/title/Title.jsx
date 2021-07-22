import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { children } = props;
  return <h2 className="title">{children} </h2>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
