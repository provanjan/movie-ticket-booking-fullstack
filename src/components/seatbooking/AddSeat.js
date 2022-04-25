import React, { Component } from "react";
import { connect } from "react-redux";
import { createSeat } from "./../../actions/SeatActions";
import PropTypes from "prop-types";
import classnames from "classnames";

class AddSeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatNumber:"",
            type:"",
            ticketIdentifier:"",
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
        const newSeat = {
            seatNumber:this.state.seatNumber,
            type:this.state.type,
            ticketIdentifier:this.state.ticketIdentifier,
        };
        //console.log(newProject);
        this.props.createSeat(newSeat,newSeat.ticketIdentifier, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Select Your Seats</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                            <h6>Seat Number</h6>
                            <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.seatNumber,
                                        })}
                                        placeholder="Seat Number"
                                        name="seatNumber"
                                        value={this.state.seatNumber}
                                        onChange={this.onChange}
                                    />
                                    {errors.seatNumber && (
                                        <div className="invalid-feedback">
                                            {errors.seatNumber}
                                        </div>
                                    )}
                                </div>
                                <h6>Seat Type</h6>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.type,
                                        })}
                                        placeholder="Seat Type"
                                        name="type"
                                        value={this.state.type}
                                        onChange={this.onChange}
                                    />
                                    {errors.type && (
                                        <div className="invalid-feedback">{errors.type}</div>
                                    )}
                                </div>
                                <h6>Ticket Identifier</h6>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.ticketIdentifier,
                                        })}
                                        placeholder="Ticket Identifier "
                                        name="ticketIdentifier"
                                        value={this.state.ticketIdentifier}
                                        onChange={this.onChange}
                                    />
                                    {errors.ticketIdentifier && (
                                        <div className="invalid-feedback">{errors.ticketIdentifier}</div>
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

AddSeat.propTypes = {
    createSeat: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    errors: state.errors,
});
export default connect(mapStateToProps, { createSeat })(AddSeat);