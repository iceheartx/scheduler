const React = require('react');
const types = React.PropTypes;

const ReactBootstrap = require('react-bootstrap');
const Checkbox = ReactBootstrap.Checkbox;
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;


class Oryoki extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crewSize: 3,
            doans: props.doans
        };

    }

    getValidationState() {
    }


    renderCol(numServers, doan, key) {
        let rows = Array.from(Array(numServers).keys());
        return <Col key={key} sm={4}>
            {doan.name}
            {rows.map(function (aa) {
                debugger;
                return <FormControl
                    type="text"
                    value=''
                    placeholder={"server "+aa}
                />
            })}
        </Col>
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
                <Col componentClass={ControlLabel} sm={6}>
                    Crew Size
                </Col>
                <Col sm={6}>
                    <FormControl
                        type="text"
                        value='2'
                        placeholder="crew size"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}>
                    Randomize Schedule
                </Col>
                <Col sm={6}>
                    <Checkbox defaultChecked="true"></Checkbox>
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                {
                    this.state.doans.map(this.renderCol.bind(this, this.state.crewSize))
                }
            </FormGroup>
        </Form>;

    }
}


Oryoki.propTypes = {
    doans: types.array.isRequired,
};

module.exports = Oryoki;