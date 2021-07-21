import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../views/home/Home';
import Rooms from '../views/rooms/Rooms';
import RoomSelected from '../common/rooms/RoomSelected';
import Services from '../views/services/Services';
import Contact from '../views/contact/Contact';

function MainRouter() {
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
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default MainRouter;
