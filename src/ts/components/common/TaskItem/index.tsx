import * as React from 'react';
import Button from '../Button';

import './style.styl';

export default class TaskItem extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleClickResolve = this.handleClickResolve.bind(this);
    }

    handleClickRemove(): void {
        this.props.onRemove(this.props.id);
    }

    handleClickResolve(): void {
        this.props.onResolve(this.props.id);
    }

    render() {
        return (
            <li className="task-list-item">
                <div className="task-list-item__title">
                    {this.props.children}
                </div>
                <div className="task-list-item__controls">
                    <Button onClick={this.handleClickResolve} type="success" disabled={this.props.resolved}>
                        Resolve
                    </Button>
                    <Button onClick={this.handleClickRemove} type="remove">
                        Remove
                    </Button>
                </div>
            </li>
        );
    }
}
