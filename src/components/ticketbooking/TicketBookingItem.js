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

            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{ticketBooking.ticketIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{ticketBooking.movieId}</h3>
                            <p>{ticketBooking.cost}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1">Select Seats </i>
                                    </li>
                                </a>
                                <Link to={`/updateTicketBooking/${ticketBooking.ticketIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1">Update Your Ticket Booking</i>
                                    </li>
                                </Link>
                                <a href="">
                                    <li className="list-group-item delete"
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        ticketBooking.ticketIdentifier
                                      )}
                                      >
                                        <i className="fa fa-minus-circle pr-1">Delete Booking</i>
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