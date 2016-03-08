import * as React from 'react';
import Button from '../Button';

import './style.styl';

export default class TaskItem extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleClickRemove(): void {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <li className="task-list__item row">
                <div className="task-item__title col-md-4">
                    {this.props.children}
                </div>
                <div className="col-md-2">
                    <Button onClick={this.handleClickRemove} mods={['danger']}>
                        <span className="glyphicon glyphicon-remove"></span> Remove
                    </Button>
                </div>
            </li>
        );
    }
}
