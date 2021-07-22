import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SecondaryTilte from './title/SecondaryTitle';
import RoomButton from './button/RoomButton';

function RoomItem(props) {
  const { name } = props;
  return (
    <div>
      <SecondaryTilte>{name}</SecondaryTilte>
      <RoomButton>
        <Link to="/rooms">Découvrir</Link>
      </RoomButton>
    </div>
  );
}

RoomItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RoomItem;
