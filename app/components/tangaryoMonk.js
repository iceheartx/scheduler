const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;
const Checkbox = ReactBootstrap.Checkbox;

class TangaryoMonks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tangaryoMonkNum: props.tangaryoMonkNum,
            tangaryoMonk: props.tangaryoMonk
        };
    }

    getValidationState() {
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return <tr key={this.state.tangaryoMonkNum}>
            <td className="text-center">T{this.state.tangaryoMonkNum}</td>
            <td className="text-left">{this.state.tangaryoMonk.name}</td>
            <td className="text-center"><Checkbox defaultChecked={this.state.tangaryoMonk.server}></Checkbox></td>
            <td className="text-center">{this.state.tangaryoMonk.numFirewatch }</td>
            <td className="text-center">{this.state.tangaryoMonk.numShoten }</td>
            <td className="text-center">{this.state.tangaryoMonk.numJikido }</td>
            <td className="text-center">{this.state.tangaryoMonk.numJikidoPd }</td>
        </tr>;
    }

}

TangaryoMonks.propTypes = {
    tangaryoMonkNum: types.number.isRequired,
    tangaryoMonk: types.object.isRequired
};

module.exports = TangaryoMonks;