const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;
const TangaryoMonk = require('./tangaryoMonk');


class TangaryoMonks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numTangaryoMonks: props.numTangaryoMonks,
            tangaryoMonks: props.tangaryoMonks
        };
    }

    getValidationState() {
    }

    getTangaryoMonks() {
        let outputRows = [];
        for (let x = 0; x < this.state.numTangaryoMonks; x++) {
            outputRows.push(<TangaryoMonk tangaryoMonkNum={x} tangaryoMonk={this.state.tangaryoMonks[x]}/>);
        }
        return (<tbody>
        <tr>
            <th className="text-center">id</th>
            <th className="text-center">name</th>
            <th className="text-center">server?</th>
            <th className="text-center">firewatch</th>
            <th className="text-center">shoten</th>
            <th className="text-center">jikido</th>
            <th className="text-center">jikido PD</th>

        </tr>
        {outputRows}
        </tbody>);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const tangaryoMonkRows = this.getTangaryoMonks();
        return (<Form horizontal>
            <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={6}>
                    Number of Tangaryo Monks
                </Col>
                <Col sm={6}>
                    <FormControl
                        type="text"
                        value={this.state.numTangaryoMonks}
                        placeholder="# monks"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
            <table className="col-sm-24">
                {tangaryoMonkRows}
            </table>

        </Form>);
    }

}

TangaryoMonks.propTypes = {
    numTangaryoMonks: types.number.isRequired,
    tangaryoMonks: types.array.isRequired,
};

module.exports = TangaryoMonks;