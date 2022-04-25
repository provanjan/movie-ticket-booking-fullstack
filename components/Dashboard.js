import React from "react";
import { Link } from "react-router-dom";
import ShowItem from "./shows/ShowItem";
import { connect } from "react-redux";
import { getShows } from "../actions/ShowActions";
import PropTypes from "prop-types";

class Dashboard extends React.Component{
    componentDidMount(){
        this.props.getShows();
    }
    render(){
        const {shows} = this.props.shows;
        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Shows</h1>
                        <br />
                        <Link to="/addShow" className="btn btn-lg btn-info">
                            Create a show
                        </Link>
                        <br />
                        <hr />
                        {
                            shows.map((show) => (<ShowItem key={show.id} show={show} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}
Dashboard.propTypes = {
    getShows : PropTypes.func.isRequired,
    shows : PropTypes.object.isRequired ,
}

const mapStateToProps = (state) => ({
    shows : state.shows ,
});

export default connect(mapStateToProps, { getShows }) (Dashboard);