import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';
import Home from '../views/home/Home';
import Rooms from '../views/rooms/Rooms';
import RoomSelected from '../common/rooms/RoomSelected';
import Services from '../views/services/Services';
import Contact from '../views/contact/Contact';
import Admin from '../views/Admin';
import { RoomContext } from '../context/roomsContext';

function MainRouter() {
  const { setRoom } = useContext(RoomContext);
  useEffect(() => {
    axios
      .get('http://localhost:8000/rooms')
      .then((res) => res.data)
      .then((data) => {
        setRoom(data);
      });
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <MainLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:name" component={RoomSelected} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" component={Admin} />
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default MainRouter;
