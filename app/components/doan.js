const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;
const Checkbox = ReactBootstrap.Checkbox;

class Doan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doanNum: props.doanNum,
            doan: props.doan
        };
    }

    getValidationState() {
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return <tr key={this.state.doanNum}>
            <td>D{this.state.doanNum}</td>
            <td>{this.state.doan.name}</td>
            <td><Checkbox defaultChecked={this.state.doan.soku}></Checkbox></td>
            <td>{this.state.doan.numKokyo}</td>
            <td>{this.state.doan.numDoan}</td>
            <td>{this.state.doan.numTenken}</td>
            <td>{(this.state.doan.soku) ? this.state.doan.numSoku : ''}</td>
            <td>{(this.state.doan.soku) ? this.state.doan.numSokuWd : ''}</td>
            <td>{(this.state.doan.soku) ? this.state.doan.numSokuPd : ''}</td>
        </tr>;
    }

}

Doan.propTypes = {
    doanNum: types.number.isRequired,
    doan: types.object.isRequired
};

module.exports = Doan;