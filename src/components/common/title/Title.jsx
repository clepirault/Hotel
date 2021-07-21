import React from 'react';
import PropTypes from 'prop-types';

function Tilte(props) {
  const { children } = props;
  return <h2>{children} </h2>;
}

Tilte.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tilte;
