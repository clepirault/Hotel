import React from 'react';
import PropTypes from 'prop-types';

function Tilte(props) {
  const { children } = props;
  return <h1>{children} </h1>;
}

Tilte.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tilte;
