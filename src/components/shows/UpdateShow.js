import React, { Component } from 'react'
import {connect} from "react-redux";
import { getShow, createShow } from '../../actions/ShowActions';
import PropTypes from "prop-types";

class UpdateShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '' ,
            showName : '',
            movie : '',
            screensId : '',
            theatreId : '', 
            showStartDateTime : '',
            showEndDateTime : ''
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getShow(id, this.props.history);
    }

    componentWillReceiveProps(nextProps){
        const {
            id ,
            showName ,
            movie ,
            screensId ,
            theatreId , 
            showStartDateTime ,
            showEndDateTime 
        } = nextProps.show;

        this.setState({
            id ,
            showName ,
            movie ,
            screensId ,
            theatreId , 
            showStartDateTime ,
            showEndDateTime })
    }

    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newShow = {
            id : this.state.id ,
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
                    <h5 className="display-4 text-center">Update Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg " 
                            placeholder="Unique Show Name" 
                            name='showName' 
                            value={this.state.showName}
                            disabled
                            />
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
UpdateShow.propTypes = {
    
    getShow: PropTypes.func.isRequired,
    createShow : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    show : state.shows.show ,
})

export default connect(mapStateToProps, { getShow, createShow }) (UpdateShow);