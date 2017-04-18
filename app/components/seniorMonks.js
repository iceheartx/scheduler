const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;
const SeniorMonk = require('./seniorMonk');


class SeniorMonks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numSeniorMonks: props.numSeniorMonks,
            seniorMonks: props.seniorMonks
        };
    }

    getValidationState() {
    }

    getSeniorMonks() {
        let outputRows = [];
        for (let x = 0; x < this.state.numSeniorMonks; x++) {
            outputRows.push(<SeniorMonk seniorMonkNum={x} seniorMonk={this.state.seniorMonks[x]}/>);
        }
        return <tbody>
        <tr>
            <th className="text-center">id</th>
            <th className="text-center">name</th>
            <th className="text-center">jobs?</th>
            <th className="text-center">soku?</th>
            <th className="text-center">server?</th>
            <th className="text-center">firewatch</th>
            <th className="text-center">shoten</th>
            <th className="text-center">jikido</th>
            <th className="text-center">jikido PD</th>

        </tr>
        {outputRows}
        </tbody>;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const seniorMonkRows = this.getSeniorMonks();
        return <Form horizontal>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}>
                    Number of Senior Monks
                </Col>
                <Col sm={6}>
                    <FormControl
                        type="text"
                        value={this.state.numSeniorMonks}
                        placeholder="# monks"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <Col componentClass={ControlLabel} sm={6}>
                    Frequency
                </Col>
                <Col sm={6}>
                    <FormControl
                        type="text"
                        value='2'
                        placeholder="# monks"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <table className="col-sm-24">
                {seniorMonkRows}
            </table>

        </Form>;
    }

}

SeniorMonks.propTypes = {
    numSeniorMonks: types.number.isRequired,
    seniorMonks: types.array.isRequired,
};

module.exports = SeniorMonks;