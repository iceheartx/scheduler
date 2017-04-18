const React = require('react');
const types = React.PropTypes;

const ReactBootstrap = require('react-bootstrap');
const Checkbox = ReactBootstrap.Checkbox;
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;


class Dates extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            crewSize: 3,
            doans: props.doans
        };

    }

    getValidationState() {
    }

    render() {
        return <Form horizontal>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}>
                    Oryoki Enabled
                </Col>
                <Col sm={6}>
                    <Checkbox defaultChecked="true"></Checkbox>
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}> Schedule Start </Col>
                <Col sm={6}>
                    <FormControl type="date" placeholder="start date" onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}> Schedule End </Col>
                <Col sm={6}>
                    <FormControl type="date" placeholder="end date" onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}> tangaryo start</Col>
                <Col sm={6}>
                    <FormControl type="date" placeholder="end date" onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}> sesshin dates</Col>
                <Col sm={6}>
                    <FormControl type="text" value='2' placeholder="end date" onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}> personal days </Col>
                <Col sm={6}>
                    <FormControl type="text" value='2' placeholder="end date" onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}> work days </Col>
                <Col sm={6}>
                    <FormControl type="text" value='2' placeholder="end date" onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
        </Form>
    }
}


Dates.propTypes = {
};

module.exports = Dates;