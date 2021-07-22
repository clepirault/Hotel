import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Admin() {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/booking')
      .then((res) => res.data)
      .then((data) => {
        setBooking(data);
      });
  }, []);
  return (
    <div>
      {booking.map((element) => (
        <ul>
          <li key={element.id}>{element.user_name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Admin;
