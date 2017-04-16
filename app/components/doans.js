const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;
const Doan = require('./doan');
class Doans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numDoans: props.numDoans,
            doans: props.doans
        };
    }

    getValidationState() {
    }

    getDoanRows() {
        let outputRows = [];
        for (let x = 0; x < this.state.numDoans; x++) {
            outputRows.push(<Doan doanNum={x} doan={this.state.doans[x]}/>);
        }
        return <tbody>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>soku?</th>
            <th>kokyo</th>
            <th>doan</th>
            <th>tenkin</th>
            <th>soku</th>
            <th>soku WD</th>
            <th>soku PD</th>

        </tr>
        {outputRows}
        </tbody>;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const DoanRows = this.getDoanRows();
        return <Form horizontal>
            <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={6}>
                    Number of Doans
                </Col>
                <Col sm={6}>
                    <FormControl
                        type="text"
                        value={this.state.numDoans}
                        placeholder="# Doans"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <table className="col-sm-24">
                {DoanRows}
            </table>

        </Form>;
    }

}

Doans.propTypes = {
    numDoans: types.number.isRequired,
};

module.exports = Doans;