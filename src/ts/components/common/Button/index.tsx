import * as React from 'react';

export default class Button extends React.Component<any, {}> {
    render() {
        return (
            <button className="btn btn-danger" onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}
