import React, { Component } from "react";
import { getSeat, updateSeat } from "./../../actions/SeatActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UpdateSeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatId:"",
            seatNumber:"",
            type:"",
            seatSequence:"",            
            ticketIdentifier:"",
        };
    }

    componentWillReceiveProps(nextProps) {
        const {
            seatId,
            seatNumber,
            type,
            seatSequence,            
            ticketIdentifier,
        } = nextProps.seat;
        this.setState({
            seatId,
            seatNumber,
            type,
            seatSequence,            
            ticketIdentifier,
        });
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSeat(id, this.props.history);
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
        const newSeat = {
            seatId:this.state.seatId,
            seatNumber:this.state.seatNumber,
            type:this.state.type,
            seatSequence:this.state.seatSequence,            
            ticketIdentifier:this.state.ticketIdentifier,
        };
        this.props.updateSeat(newSeat,newSeat.ticketIdentifier,newSeat.seatSequence, this.props.history);
    };
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Your Seating Info</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <h6>Seat Number</h6>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Seat Number"
                                        name="seatNumber"
                                        value={this.state.seatNumber}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Seat Type</h6>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Seat Type"
                                        name="type"
                                        value={this.state.type}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Ticket Identifier</h6>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Ticket Identifier"
                                        disabled
                                        name="ticketIdentifier"
                                        value={this.state.ticketIdentifier}
                                        onChange={this.onChange}
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

UpdateSeat.propTypes = {
    getSeat: PropTypes.func.isRequired,
    updateSeat: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    seat: state.seats.seat,
});
export default connect(mapStateToProps, { getSeat, updateSeat })(
    UpdateSeat
);
