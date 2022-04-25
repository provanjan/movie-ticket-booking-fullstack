import React, { Component } from "react";
import { getTicketBooking, createTicketBooking } from "./../../actions/TicketBookingActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UpdateTicketBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingId:"",
            movieId: "",
            bookingDate: "",
            transactionId: "",
            transactionMode: "",
            ticketIdentifier: "",
            customer: "",
            totalCost:"",
        };
    }

    componentWillReceiveProps(nextProps) {
        const {
            bookingId,
            movieId,
            bookingDate,
            transactionId,
            transactionMode,
            ticketIdentifier,
            customer,
            totalCost,
        } = nextProps.ticketBooking;
        this.setState({
            bookingId,
            movieId,
            bookingDate,
            transactionId,
            transactionMode,
            ticketIdentifier,
            customer,
            totalCost,
        });
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getTicketBooking(id, this.props.history);
    }
    onChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit hit");
        const newTicketBooking = {
            bookingId:this.state.bookingId,
            movieId:this.state.movieId,
            bookingDate:this.state.bookingDate,
            transactionId:this.state.transactionId,
            transactionMode:this.state.transactionMode,
            ticketIdentifier:this.state.ticketIdentifier,
            customer:this.state.customer,
            totalCost:this.state.totalCost,
        };
        this.props.createTicketBooking(newTicketBooking, this.props.history);
    };
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Your Booking Info</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Customer Name"
                                        name="customer"
                                        value={this.state.customer}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Movie Id"
                                        name="movieId"
                                        value={this.state.movieId}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Booking Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="bookingDate"
                                        value={this.state.bookingDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Transaction Id"
                                        name="transactionId"
                                        disabled
                                        value={this.state.transactionId}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Transaction Mode"
                                        name="transactionMode"
                                        disabled
                                        value={this.state.transactionMode}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="ticketIdentifier"
                                        className="form-control form-control-lg"
                                        placeholder="Ticket Identifier"
                                        disabled
                                        value={this.state.ticketIdentifier}
                                    />
                                </div>                                
                               <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateTicketBooking.propTypes = {
    getTicketBooking: PropTypes.func.isRequired,
    createTicketBooking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    ticketBooking: state.ticketBookings.ticketBooking,
});
export default connect(mapStateToProps, { getTicketBooking, createTicketBooking })(
    UpdateTicketBooking
);
