const Cursor = require('pui-cursor');
const React = require('react');
const Dispatcher = require('../dispatchers/dispatcher');

const useStore = Component => class extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            store: {
                inoName: 'Hiro',

                numTangaryoMonks: 3,
                tangaryoMonks: [
                    {
                        name: 'brett',
                        server: true,
                        numFirewatch: 0,
                        numShoten: 1,
                        numServer: 0,
                        numJikido: 1,
                        numJikidoPd: 0
                    },
                    {
                        name: 'argelia',
                        server: true,
                        numFirewatch: 0,
                        numShoten: 1,
                        numServer: 0,
                        numJikido: 1,
                        numJikidoPd: 0
                    },

                    {
                        name: 'wheelie',
                        server: false,
                        numFirewatch: 0,
                        numShoten: 1,
                        numServer: 0,
                        numJikido: 1,
                        numJikidoPd: 0
                    }


                ],
                numSeniorMonks: 3,
                seniorMonks: [
                    {
                        name: 'goyo',
                        jobs: false,
                        soku: false,
                        server: true,
                        numFirewatch: 0,
                        numShoten: 1,
                        numServer: 0,
                        numJikido: 1,
                        numJikidoPd: 0
                    },
                    {
                        name: 'kim',
                        jobs: false,
                        soku: true,
                        server: true,
                        numFirewatch: 0,
                        numShoten: 1,
                        numServer: 0,
                        numJikido: 1,
                        numJikidoPd: 0
                    },

                    {
                        name: 'mimi',
                        jobs: true,
                        soku: false,
                        server: false,
                        numFirewatch: 0,
                        numShoten: 1,
                        numServer: 0,
                        numJikido: 1,
                        numJikidoPd: 0
                    }


                ],

                numDoans: 6,
                doans: [
                    {
                        name: 'dillon',
                        soku: false,
                        numKokyo: 1,
                        numDoan: 0,
                        numTenken: 1,
                        numSoku: 0,
                        numSokuWd: 0,
                        numSokuPd: 0
                    },
                    {
                        name: 'stacey',
                        soku: true,
                        numKokyo: 1,
                        numDoan: 0,
                        numTenken: 1,
                        numSoku: 0,
                        numSokuWd: 0,
                        numSokuPd: 0
                    },
                    {
                        name: 'antoine',
                        soku: true,
                        numKokyo: 1,
                        numDoan: 0,
                        numTenken: 1,
                        numSoku: 0,
                        numSokuWd: 0,
                        numSokuPd: 0
                    },
                    {
                        name: 'tanya',
                        soku: true,
                        numKokyo: 1,
                        numDoan: 0,
                        numTenken: 1,
                        numSoku: 0,
                        numSokuWd: 0,
                        numSokuPd: 0
                    },
                    {
                        name: 'jaqueline',
                        soku: true,
                        numKokyo: 1,
                        numDoan: 0,
                        numTenken: 1,
                        numSoku: 0,
                        numSokuWd: 0,
                        numSokuPd: 0
                    },
                    {
                        name: 'gensan',
                        soku: true,
                        numKokyo: 1,
                        numDoan: 0,
                        numTenken: 1,
                        numSoku: 0,
                        numSokuWd: 0,
                        numSokuPd: 0
                    }
                ],
                view: 'sutra',
                sutra: 'heartsutra'
            },
        }
        ;
    }

    updateStore = function (callback) {
        this.setState({store: callback(this.state)});
    }.bind(this);

    getStore = function () {
        return this.state;
    }.bind(this);

    setStoreVal(key, val) {
        this.updateStore(store => {
            store[key] = val;
            return store;
        });
    }

    render() {
        const props = this.props;
        Dispatcher.$store = new Cursor(this.state.store, store => this.setState({store}));
        return (<Component {...props} {...this.state}/>);
    }
};

module.exports = useStore;
