import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function MainTilte(props) {
  const { children } = props;
  return <h1 className="mainTitle">{children} </h1>;
}

MainTilte.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTilte;
