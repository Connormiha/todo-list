import * as React from 'react';
import BaseBem from 'components/common/BaseBem';

import Icon from 'components/common/Icon';

import './style.styl';

export default class Button extends BaseBem<any, {}> {
    constructor(props) {
        super(props);
        this.renderIcon = this.renderIcon.bind(this);
    }

    bemName: string = 'button';

    renderIcon() {
        switch (this.props.type) {
            case 'remove':
                return <Icon type="x" />;

            case 'success':
                return <Icon type="check" />;
        }

        return null;
    }

    render() {
        let mods = [this.props.type];

        if (this.props.disabled) {
            mods.push('disabled');
        }

        return (
            <button className={this.bemBlock({mods: mods})} onClick={this.props.onClick}>
                {this.renderIcon()}
                <span className={this.bemBlock({block: ['text']})}>{this.props.children}</span>
            </button>
        );
    }
}
