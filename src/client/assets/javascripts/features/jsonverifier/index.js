import React from 'react'
import { Col, Row, FormGroup, ControlLabel, FormControl, Glyphicon, Alert } from 'react-bootstrap'
import validateJSON from 'utils/jsonUtil'

class JsonVerifier extends React.Component {

    componentWillMount() {
        this.setState({
            input: "",
            validationState: null,
            isValidJson: false,
        })
    }

    inputChanged = (e) => {
        const jsonString = e.target.value
        this.setState({
            input: e.target.value
        })
        if(validateJSON(jsonString)) {
            this.setState({
                validationState: 'success',
                isValidJson: true
            })
        }
        else if(e.target.value.length === 0)
        {
            console.log(0)
            this.setState({
                validationState: null,
                isValidJson: false
            })  
        }
        else
        {
            this.setState({
                validationState: 'warning',
                isValidJson: false
            })  
        }
    }

    getFeedBack = () => {
        if(this.state.input.length === 0)
        {
            return  <FormControl.Feedback>
                        <Glyphicon glyph="hand-left" />
                    </FormControl.Feedback>
        }
        if(this.state.isValidJson)
        {
            return  <FormControl.Feedback>
                        <Glyphicon glyph="thumbs-up" />
                    </FormControl.Feedback>
        }
        return  <FormControl.Feedback>
                    <Glyphicon glyph="thumbs-down" />
                </FormControl.Feedback>
    }

    getAlert = () => {
        if(this.state.input.length == 0)
        {
            return <Alert bsStyle="info">
                        Enter some JSON to validate it.
                    </Alert>
        }
        if(this.state.isValidJson)
        {
            return  <Alert bsStyle="success">
                        The input JSON is valid.
                    </Alert>
        }

        return <Alert bsStyle="warning">
                        The input JSON is not valid.
                    </Alert>
    }

    render() {
        return (
            <div>
                <ControlLabel>JSON Validator</ControlLabel>
                {this.getAlert()}
                <FormGroup controlId="formControlsTextarea" validationState={this.state.validationState}>
                    <FormControl onKeyUp={(e) => this.inputChanged(e)} componentClass="textarea" placeholder="Enter JSON string" />
                    {this.getFeedBack()}
                </FormGroup>
            </div>
        )
    }

}

export default JsonVerifier