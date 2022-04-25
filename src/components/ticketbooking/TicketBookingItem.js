import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteTicketBooking } from "../../actions/TicketBookingActions";
import PropTypes from "prop-types";
class TicketBookingItem extends React.Component {
    onDeleteClick = (id) => {
        this.props.deleteTicketBooking(id);
      };
    render() {
        const { ticketBooking } = this.props;
        return (

            <div className="container" >
                <div className="card card-body bg-light mb-3" >
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto" id="identifier">Ticket Id: {ticketBooking.ticketIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3 id="movieId">Movie ID :{ticketBooking.movieId}</h3>
                            <p id="common">Customer Name :{ticketBooking.customer}</p>
                            <p id="common">Number of Seats :{ticketBooking.ticket.noOfSeats}</p>
                            <p id="common">Cost :{ticketBooking.totalCost}</p>
                            <p id="common">Booking Date :{ticketBooking.bookingDate}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to={`/selectSeat/SeatDashboard/${ticketBooking.ticketIdentifier}`}>
                                    <li className="list-group-item board" id="board">
                                        <i className="fa fa-duotone fa-couch pr-1">&nbsp;<span id="couch">Select Seats</span> </i>
                                    </li>
                                </Link>
                                <Link to={`/updateTicketBooking/${ticketBooking.ticketIdentifier}`}>
                                    <li className="list-group-item update" id="board">
                                        <i className="fa fa-edit pr-1">&nbsp;<span id="update">Update Your Ticket Booking</span></i>
                                    </li>
                                </Link>
                                <a href="">
                                    <li className="list-group-item delete" id="board"
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        ticketBooking.ticketIdentifier
                                      )}
                                      >
                                        <i className="fa fa-minus-circle pr-1">&nbsp;<span id="delete">Delete Booking</span></i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
TicketBookingItem.propTypes = {
    deleteTicketBooking: PropTypes.func.isRequired,
};

export default connect(null, { deleteTicketBooking})(TicketBookingItem);