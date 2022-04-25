import React from "react";
import SeatItem from "./seatbooking/SeatItem";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSeats } from "../actions/SeatActions";
import PropTypes from "prop-types";

class SeatDashboard extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSeats(id,this.props.history);
    }
    render() {
        const { seat } = this.props;
        const { seats } = this.props.seats;
        console.log(seats);
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Seats</h1>
                            <br />
                            <Link to="/addSeat" className="btn btn-lg btn-info">
                                Select Your Seat
                            </Link>
                            <br />
                            <hr />
                            {seats.map((seat) => {
                                return (
                                    <SeatItem key={seat.id} seat={seat} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SeatDashboard.propTypes = {
    getSeats: PropTypes.func.isRequired,
    seats: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    seats: state.seats,
});

export default connect(mapStateToProps, { getSeats })(SeatDashboard);