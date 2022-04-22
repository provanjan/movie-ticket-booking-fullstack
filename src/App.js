import "./App.css";
import React from "react";
import Header from "./components/common/Header";
import Dashboard from "./components/Dashboard";
import AddTicketBooking from "./components/ticketbooking/AddTicketBooking";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import UpdateTicketBooking from "./components/ticketbooking/UpdateTicketBooking";
import AddSeat from "./components/seatbooking/AddSeat";
import SeatDashboard from "./components/SeatDashboard";
import UpdateSeat from "./components/seatbooking/UpdateSeat";
import Footer from "./components/common/Footer";
import CarouselComponent from "./components/common/CarouselComponent";

function App() {
  return (
    <Provider store={store}>
       <Router>
        <React.Fragment>
          <Header/>
          <CarouselComponent/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addTicketBooking" component={AddTicketBooking} />
          <Route exact path="/updateTicketBooking/:id" component={UpdateTicketBooking} />
          <Route exact path="/selectSeat/SeatDashboard/:id" component={SeatDashboard} />
          <Route exact path="/addSeat" component={AddSeat} />
          <Route exact path="/updateSeat/:id" component={UpdateSeat} />
          <Footer/>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
