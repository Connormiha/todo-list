import * as React from 'react';
import {Link, IndexLink} from 'react-router';

import Menu from 'components/common/Menu';

import './style.styl';

const MENU_ITEMS = [
    {
        href: '/',
        text: 'Main'
    },
    {
        href: '/about',
        text: 'About'
    }
];

export default class Main extends React.Component<any, {}> {
    render() {
        return (
            <div id="layout">
                <Menu>
                    {MENU_ITEMS}
                </Menu>
                <div id="layout__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
