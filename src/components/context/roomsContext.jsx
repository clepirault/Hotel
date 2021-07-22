import React, { createContext, useState } from 'react';

export const RoomContext = createContext(null);

const RoomProvider = ({ children }) => {
  const [room, setRoom] = useState([]);
  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
