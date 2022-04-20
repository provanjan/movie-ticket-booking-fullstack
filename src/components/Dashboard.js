import React from "react";
import TicketBookingItem from "./ticketbooking/TicketBookingItem";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTicketBookings } from "../actions/TicketBookingActions";
import PropTypes from "prop-types";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getTicketBookings();
    }
    render() {
        const { ticketBookings } = this.props.ticketBookings;
        console.log(ticketBookings);
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Ticket Bookings</h1>
                            <br />
                            <Link to="/addTicketBooking" className="btn btn-lg btn-info">
                                Create a Booking
                            </Link>
                            <br />
                            <hr />
                            {ticketBookings.map((ticketBooking) => {
                                return (
                                    <TicketBookingItem key={ticketBooking.id} ticketBooking={ticketBooking} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getTicketBookings: PropTypes.func.isRequired,
    ticketBookings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    ticketBookings: state.ticketBookings,
});

export default connect(mapStateToProps, { getTicketBookings })(Dashboard);