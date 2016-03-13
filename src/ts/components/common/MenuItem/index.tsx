import * as React from 'react';

import BaseBem from 'components/common/BaseBem';

import './style.styl';

export default class MenuItem extends BaseBem<any, {}> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    bemName: string = 'menu-item';

    handleClick(): void {
        this.props.onClick(this.props);
    }

    render() {
        return (
            <li className={this.bemBlock({mods: {active: this.props.active}})} onClick={this.handleClick}>
                <span className="menu-item__text">{this.props.children}</span>
            </li>
        );
    }
}
