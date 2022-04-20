import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicketBooking } from "./../../actions/TicketBookingActions";
import PropTypes from "prop-types";
import classnames from "classnames";

class AddTicketBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId:"",
            bookingDate:"",
            transactionId:"",
            transactionMode:"",
            ticketIdentifier:"",
            customer:"",
            errors: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    onChange = (event) => {
        //console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log("------------onSubmit Triggered--------------");
        const newTicketBooking = {
            movieId:this.state.movieId,
            bookingDate:this.state.bookingDate,
            transactionId:this.state.transactionId,
            transactionMode:this.state.transactionMode,
            ticketIdentifier:this.state.ticketIdentifier,
            customer:this.state.customer,
        };
        //console.log(newProject);
        this.props.createTicketBooking(newTicketBooking, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Book Your Ticket</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.customer,
                                        })}
                                        placeholder="Customer Name"
                                        name="customer"
                                        value={this.state.customer}
                                        onChange={this.onChange}
                                    />
                                    {errors.customer && (
                                        <div className="invalid-feedback">
                                            {errors.customer}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.movieId,
                                        })}
                                        placeholder="Movie Id"
                                        name="movieId"
                                        value={this.state.movieId}
                                        onChange={this.onChange}
                                    />
                                    {errors.movieId && (
                                        <div className="invalid-feedback">{errors.movieId}</div>
                                    )}
                                </div>
                                <h6>Booking Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="bookingDate"
                                        value={this.state.bookingDate}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.transactionId,
                                        })}
                                        placeholder="Transaction ID"
                                        name="transactionId"
                                        value={this.state.transactionId}
                                        onChange={this.onChange}
                                    />
                                    {errors.transactionId && (
                                        <div className="invalid-feedback">
                                            {errors.transactionId}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.transactionMode,
                                        })}
                                        placeholder="Transaction Mode"
                                        name="transactionMode"
                                        value={this.state.transactionMode}
                                        onChange={this.onChange}
                                    />
                                    {errors.transactionMode && (
                                        <div className="invalid-feedback">
                                            {errors.transactionMode}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.ticketIdentifier,
                                        })}
                                        placeholder="Ticket Identifier"
                                        name="ticketIdentifier"
                                        value={this.state.ticketIdentifier}
                                        onChange={this.onChange}
                                    />
                                    {errors.ticketIdentifier && (
                                        <div className="invalid-feedback">
                                            {errors.ticketIdentifier}
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddTicketBooking.propTypes = {
    createTicketBooking: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    errors: state.errors,
});
export default connect(mapStateToProps, { createTicketBooking })(AddTicketBooking);