const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;

const ReactBootstrap = require('react-bootstrap');
const Tabs = ReactBootstrap.Tabs;
const Tab = ReactBootstrap.Tab;

const useStore = require('./use_store');

const Ino = require('./ino');
const Doans = require('./doans');
const SeniorMonks = require('./seniorMonks');
const TangaryoMonks = require('./tangaryoMonks');

let content;

class Application extends React.Component {
    static propTypes = {
        store: types.object.isRequired,
        view: types.string
    };

    setView() {
        content =
            <Tabs id="controlled-tab-example">
                <Tab eventKey={1} title="Ino"><Ino inoName={this.state.inoName}/></Tab>
                <Tab eventKey={2} title="Doans"><Doans numDoans={this.state.numDoans} doans={this.state.doans}/></Tab>
                <Tab eventKey={3} title="Senior Monks"><SeniorMonks numSeniorMonks={this.state.numSeniorMonks}
                                                                    seniorMonks={this.state.seniorMonks}/></Tab>
                <Tab eventKey={4} title="Tangaryo Monks"><TangaryoMonks numTangaryoMonks={this.state.numTangaryoMonks}
                                                                      tangaryoMonks={this.state.tangaryoMonks}/></Tab>
                <Tab eventKey={5} title="Oryoki">Oryoki</Tab>
                <Tab eventKey={6} title="Dates">Dates</Tab>
                <Tab eventKey={7} title="Schedule">Schedule</Tab>
            </Tabs>;
    }

    constructor(props, context) {
        super(props, context);
        this.state = props.store;
        this.setView();
    }


    render() {
        return (
            <div className="page">
                <div className="container">
                    {content}
                </div>
            </div>
        );
    }

}

Bootstrap.init(useStore(Application));

module.exports = useStore(Application);
