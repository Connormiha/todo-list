import * as React from 'react';

import BaseBem from 'components/common/BaseBem';

import './style.styl';

export default class Icon extends BaseBem<any, {}> {
    constructor(props) {
        super(props);
    }

    bemName: string = 'icon';

    render() {
        return (
            <span className={this.bemBlock({mods: [this.props.type]})} onClick={this.props.onClick}>{this.props.children}</span>
        );
    }
}
