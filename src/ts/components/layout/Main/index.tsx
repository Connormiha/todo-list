import * as React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Main extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <ul id="top-menu">
                    <li><IndexLink to="/">Main</IndexLink></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
