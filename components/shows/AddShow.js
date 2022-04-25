import React, {Component} from 'react';
import {connect} from "react-redux";
import { createShow } from '../../actions/ShowActions';
import PropTypes from "prop-types";

class AddShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            showName : '',
            movie : '',
            screensId : '',
            theatreId : '', 
            showStartDateTime : '',
            showEndDateTime : ''
        };
    }
    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newShow = {
            showName : this.state.showName ,
            movie : this.state.movie ,
            screensId : this.state.screensId ,
            theatreId : this.state.theatreId , 
            showStartDateTime : this.state.showEndDateTime ,
            showEndDateTime : this.state.showEndDateTime
        }
        
        //Call the create project method from action.
        this.props.createShow(newShow, this.props.history);
    }
  render() {
    return (
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg " 
                            placeholder="Unique Show Name" 
                            name='showName' 
                            value={this.state.showName}
                            onChange = {this.onChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Movie name" 
                            name='movie' 
                            value={this.state.movie}
                            onChange = {this.onChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Screens Id" 
                            name='screensId' 
                            value={this.state.screensId}
                            onChange = {this.onChange} />
                        </div>
                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Theatre Id" 
                            name='theatreId' 
                            value={this.state.theatreId}
                            onChange = {this.onChange} ></textarea>
                        </div>
                        <h6>Start Date Time</h6>
                        <div className="form-group">
                            <input type="date" 
                            className="form-control form-control-lg" 
                            name="showStartDateTime" 
                            onChange = {this.onChange}  />
                        </div>
                        <h6>Estimated End Date Time</h6>
                        <div className="form-group">
                            <input type="date" 
                            className="form-control form-control-lg" 
                            name="showEndDateTime" 
                            onChange = {this.onChange} />
                        </div>
                        <input 
                        type="submit" 
                        className="btn btn-primary btn-block mt-4" />
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
  }
}

AddShow.propTypes = {
    
    createShow: PropTypes.func.isRequired,
};
export default connect(null, { createShow }) (AddShow);
