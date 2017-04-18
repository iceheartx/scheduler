const React = require('react');
const types = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const Checkbox = ReactBootstrap.Checkbox;
const cx = require('classnames');

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
        return (<tr key={this.state.seniorMonkNum}>
            <td className="text-center">D{this.state.seniorMonkNum}</td>
            <td className="text-left">{this.state.seniorMonk.name}</td>
            <td className="text-center"><Checkbox defaultChecked={this.state.seniorMonk.jobs} /></td>
            <td className="text-center"><Checkbox defaultChecked={this.state.seniorMonk.soku} /></td>
            <td className="text-center"><Checkbox defaultChecked={this.state.seniorMonk.server} /></td>
            <td className={cx('text-center',(this.state.seniorMonk.jobs) ? '' : 'disabled' )}>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numFirewatch : ''}</td>
            <td className={cx('text-center',(this.state.seniorMonk.jobs) ? '' : 'disabled' )}>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numShoten : ''}</td>
            <td className={cx('text-center',(this.state.seniorMonk.jobs) ? '' : 'disabled' )}>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numJikido : ''}</td>
            <td className={cx('text-center',(this.state.seniorMonk.jobs) ? '' : 'disabled' )}>{(this.state.seniorMonk.jobs) ? this.state.seniorMonk.numJikidoPd : ''}</td>
        </tr>);
    }

}

SeniorMonks.propTypes = {
    seniorMonkNum: types.number.isRequired,
    seniorMonk: types.object.isRequired
};

module.exports = SeniorMonks;