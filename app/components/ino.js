const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;

class Ino extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inoName : props.inoName };
    }

    getValidationState() {
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (<Form horizontal>
            <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={6}>
                    Ino
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        value={this.state.inoName}
                        placeholder="Ino's Name"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
        </Form>);
    }

}

Ino.propTypes = {
    inoName: types.string.isRequired,
};

module.exports = Ino;