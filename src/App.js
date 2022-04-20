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
function App() {
  return (
    <Provider store={store}>
       <Router>
        <React.Fragment>
          <Header/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addTicketBooking" component={AddTicketBooking} />
          <Route exact path="/updateTicketBooking/:id" component={UpdateTicketBooking} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
