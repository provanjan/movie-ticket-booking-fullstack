import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteShow } from '../../actions/ShowActions';
import PropTypes from "prop-types";

class ShowItem extends React.Component {

    onDeleteClick = id => {
      this.props.deleteShow(id);
    };

  render() {
      const { show } = this.props;
      // Equivalent to const show = this.props.show; --> Known as the destructuring concept.
    return(  
    <div className="container">
      <div className="card card-body bg-light mb-3">
        <div className="row">
            <div className="col-2">
                <span className="mx-auto">{ show.showName }</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
                <h3>{ show.movie }</h3>
                <p>{ show.theatreId }</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
                <ul className="list-group">
                    <a href="#">
                        <li className="list-group-item board">
                            <i className="fa fa-flag-checkered pr-1">Show Board </i>
                        </li>
                    </a>
                    <Link to={`/updateShow/${show.showName}`}>
                        <li className="list-group-item update">
                            <i className="fa fa-edit pr-1">Update Show Info</i>
                        </li>
                    </Link>
                    <Link to="#">
                        <li className="list-group-item delete"
                        onClick={ this.onDeleteClick.bind(this, show.showName) } >
                            <i className="fa fa-minus-circle pr-1">Delete Show</i>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
</div>
    );
  }
}

ShowItem.propTypes = {
    deleteShow: PropTypes.func.isRequired,
};
export default connect(null, { deleteShow }) (ShowItem);