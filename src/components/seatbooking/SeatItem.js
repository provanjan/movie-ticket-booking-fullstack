import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteSeat } from "../../actions/SeatActions";
import PropTypes from "prop-types";
class SeatItem extends React.Component {
    onDeleteClick = (id,sequence) => {
        this.props.deleteSeat(id,sequence);
      };
    render() {
        const { seat } = this.props;
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto" id="identifier">{seat.seatSequence}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3 id="common">Seat Type :{seat.type}</h3>
                            <p id="common">Seat Number :{seat.seatNumber}</p>                           
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to={`/updateSeat/${seat.seatSequence}`}>
                                    <li className="list-group-item update"id="board">
                                        <i className="fa fa-edit pr-1">&nbsp;<span id="update">Update Your Seat</span></i>
                                    </li>
                                </Link>
                                <a href="">
                                    <li className="list-group-item delete" id="board"
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        seat.ticketIdentifier,
                                        seat.seatSequence
                                      )}
                                      >
                                        <i className="fa fa-minus-circle pr-1">&nbsp;<span id="delete">Delete Seat</span></i>
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
SeatItem.propTypes = {
    deleteSeat: PropTypes.func.isRequired,
};

export default connect(null, { deleteSeat})(SeatItem);