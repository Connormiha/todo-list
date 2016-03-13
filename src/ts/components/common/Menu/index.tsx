import * as React from 'react';

import MenuItem from 'components/common/MenuItem';

import './style.styl';

export default class Menu extends React.Component<any, {}> {
    static contextTypes = {
        router: React.PropTypes.object
    };

    context: {
        router: any
    };

    constructor(props) {
        super(props);
        this.isActive = this.isActive.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    isActive(href): boolean {
        return this.context.router.isActive(href, true/* for index*/);
    }

    /**
     * Handle on click menu item
     * @param {Object} props
     */
    handleClick(props): void {
        let {router} = this.context;

        // disable click on active links
        if (this.isActive(props.href)) {
            return;
        }

        router.push(props.href);
    }

    renderItems() {
        return this.props.children.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    active={this.isActive(item.href)}
                    href={item.href}
                    onClick={this.handleClick}
                >
                {item.text}
                </MenuItem>
            );
        });
    }

    render() {
        return (
            <ul className="menu">
                {this.renderItems()}
            </ul>
        );
    }
}
