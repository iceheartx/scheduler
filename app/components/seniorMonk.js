const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;
const Checkbox = ReactBootstrap.Checkbox;

class SeniorMonks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seniorMonkNum: props.seniorMonkNum,
            seniorMonk: props.seniorMonk
        };
    }

    getValidationState() {
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return <tr key={this.state.seniorMonkNum}>
            <td>D{this.state.seniorMonkNum}</td>
            <td>{this.state.seniorMonk.name}</td>
            <td><Checkbox defaultChecked={this.state.seniorMonk.jobs}></Checkbox></td>
            <td><Checkbox defaultChecked={this.state.seniorMonk.soku}></Checkbox></td>
            <td><Checkbox defaultChecked={this.state.seniorMonk.server}></Checkbox></td>
            <td>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numFirewatch : ''}</td>
            <td>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numShoten : ''}</td>
            <td>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numJikido : ''}</td>
            <td>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numJikidoPd : ''}</td>
        </tr>;
    }

}

SeniorMonks.propTypes = {
    seniorMonkNum: types.number.isRequired,
    seniorMonk: types.object.isRequired
};

module.exports = SeniorMonks;