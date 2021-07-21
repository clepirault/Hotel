import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function SecondaryTilte(props) {
  const { children } = props;
  return <h2 className="secondaryTitle">{children} </h2>;
}

SecondaryTilte.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryTilte;
