import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
//--|>
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "day",
            icon: <FontAwesomeIcon icon={faMoon} color={'#4D5B6B'} />
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.state.mode === "day"
            ? this.setState({
                mode: "night",
                icon: <FontAwesomeIcon icon={faSun} color={'#FFA500'} />
            })
            : this.setState({
                mode: "day",
                icon: <FontAwesomeIcon icon={faMoon} color={'#4D5B6B'} />
            });

        const newMode = this.state.mode;
        this.props.switchMode(newMode);
    }

    render() {
        return (
            <button className="app__dark-mode-btn icon level-right"
                onClick={this.handleClick}>
                {this.state.icon}
                {/* <FontAwesomeIcon icon={faMoon} color={'#4D5B6B'}/> */}
                {/* <FontAwesomeIcon icon={faSun} color={'#FFA500'}/> */}
            </button>
        );
    }

}
