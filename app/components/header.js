const cx = require('classnames');
const React = require('react');
const types = React.PropTypes;

class LogoBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onChangeSutra} = this.props;
        return (
            <div className={cx('row', 'logo-bar', (this.props.expandedMenu) ? 'expanded' : '' )}>
                <a className={cx('col-xs-3','logo-button', (this.props.expandedMenu) ? 'expanded' : '' )} onClick={this.props.onClick}>献立</a>
                <div className={cx('col-xs-18', (this.props.expandedMenu) ? '' : 'hidden' )}>
                    <fieldset className="col-xs-8">
                        <legend>Select a Sutra</legend>
                        <select name="sutra" defaultValue="heartsutra" onChange={onChangeSutra}>
                            <option>Select One</option>
                            <optgroup label="Maka Hannya Haramitta Shin Gyo">
                                <option value="heartsutra">Heart of Great Perfect Wisdom Sutra</option>
                            </optgroup>
                            <optgroup label="Sandokai">
                                <option disabled value="yes">Harmony of Difference and Equality</option>
                            </optgroup>
                            <optgroup label="Hokyo Zammai">
                                <option disabled value="yes">Song of the Jewel Mirror Samadhi</option>
                            </optgroup>
                        </select>
                    </fieldset>
                    <fieldset className="col-xs-7">
                        <legend>Display</legend>
                        <label>
                            <input type="checkbox" name="displayKanji" defaultChecked value="1" onChange={onChangeSutra}/>Kanji
                        </label>
                        <label>
                            <input type="checkbox" name="displayHiragana" onChange={onChangeSutra}/>Hiragana
                        </label>
                        <label>
                            <input type="checkbox" name="displayRomaji" onChange={onChangeSutra}/>Romaji
                        </label>
                        <label>
                            <input type="checkbox" name="displayEnglish" onChange={onChangeSutra}/>English
                        </label>
                        <label>
                            <input type="checkbox" name="displayCharacterNum" onChange={onChangeSutra}/>Character #
                        </label>
                    </fieldset>
                </div>

            </div>
        );
    }
}
LogoBar.propTypes = {
    onClick: types.func.isRequired,
    expandedMenu: types.bool,
    onChangeSutra: types.func.isRequired
};


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedMenu: false
        };

    }

    toggleExpandMenu = (event) => {
        event.preventDefault();
        this.setState({expandedMenu: !this.state.expandedMenu});
    }

    render() {
        const {store: {}} = this.props;
        return (
            <header>
                <LogoBar {...{
                    expandedMenu: this.state.expandedMenu,
                    onClick: this.toggleExpandMenu,
                    onChangeSutra: this.props.onChangeSutra
                }} />
            </header>
        );
    }
}

Header.propTypes = {
    store: types.object.isRequired,
    onChangeSutra: types.func.isRequired
};

module.exports = Header;